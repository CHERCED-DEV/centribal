import React, { useState, memo, useEffect } from 'react';
import { InventoryDataProps, deleteProduct } from './utils/inventory.interface';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetData } from '@/utils/providers/requests/helpers';


const Inventory: React.FC<InventoryDataProps> = ({ ui_inventory }) => {
    const products = GetData<ProductsConfig[]>("/api/products", "products");
    const [sortKey, setSortKey] = useState<keyof ProductsConfig>('name');
    const [sortOrder, setSortOrder] = useState('');
    const [sortedProducts, setSortedProducts] = useState<ProductsConfig[]>(products || []);
    const router = useRouter();

    useEffect(() => {
        if (products) {
            setSortedProducts(products);
        }
    }, [products]);

    const sortInventory = (key: keyof ProductsConfig) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
        setNewOrder(sortKey);
    };

    const setNewOrder = (sortKey: keyof ProductsConfig) => {
        let sorted: ProductsConfig[] = [...sortedProducts];

        switch (sortKey) {
            case 'reference':
                sorted.sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return a.reference.localeCompare(b.reference);
                    } else {
                        return b.reference.localeCompare(a.reference);
                    }
                });
                setSortedProducts(sorted);
                break;
            case 'name':
                sorted.sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return a.name.localeCompare(b.name);
                    } else {
                        return b.name.localeCompare(a.name);
                    }
                });
                setSortedProducts(sorted);
                break;
            case 'price':
                sorted.sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return a.price - b.price;
                    } else {
                        return b.price - a.price;
                    }
                });
                setSortedProducts(sorted);
                break;
            case 'taxes':
                sorted.sort((a, b) => {
                    if (sortOrder === 'asc') {
                        return a.taxes - b.taxes;
                    } else {
                        return b.taxes - a.taxes;
                    }
                });
                setSortedProducts(sorted);
                break;
            default:
                break;
        }
    };

    const optionProduct = (_id: string, option: string) => {
        if (option === "delete") {
            return (
                <button className='' onClick={() => deleteProduct(_id, router)}>
                    <Image
                        className=''
                        src={"/assets/logos/delete.svg"}
                        alt='edit'
                        width={24}
                        height={24}
                    />
                </button>
            )
        } else {
            return (
                <button className='' onClick={() => router.push(`editProduct/${_id}`)}>
                    <Image
                        className=''
                        src={"/assets/logos/edit.svg"}
                        alt='edit'
                        width={24}
                        height={24}
                    />
                </button>
            )
        }
    }


    return (
        <table className="table">
            <thead>
                <tr className="table__row">
                    <th className="table__cell -r" onClick={() => sortInventory('reference')}>
                        {ui_inventory.th.reference} {sortKey === 'reference' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th className="table__cell -n" onClick={() => sortInventory('name')}>
                        {ui_inventory.th.name} {sortKey === 'name' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th className="table__cell -d" >
                        {ui_inventory.th.description}
                    </th>
                    <th className="table__cell -p" onClick={() => sortInventory('price')}>
                        {ui_inventory.th.price} {sortKey === 'price' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th className="table__cell -t" onClick={() => sortInventory('taxes')}>
                        {ui_inventory.th.taxes} {sortKey === 'taxes' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    {router.asPath !== "/" && (
                        <>
                            <th className="table__cell">
                                {ui_inventory.th.edit}
                            </th>
                            <th className="table__cell">
                                {ui_inventory.th.delete}
                            </th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody>
                {sortedProducts?.map((product) => (
                    <tr className="table__row" key={product._id}>
                        <td className="table__cell -r">{product.reference}</td>
                        <td className="table__cell -n">{product.name}</td>
                        <td className="table__cell -d">{product.description}</td>
                        <td className="table__cell -p">{product.price}</td>
                        <td className="table__cell -t">{product.taxes}</td>
                        {router.asPath !== "/" && (
                            <>
                                <td className="table__cell">{product?._id && optionProduct(product._id, "edit")}</td>
                                <td className="table__cell">{product?._id && optionProduct(product._id, "delete")}</td>
                            </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default memo(Inventory);
