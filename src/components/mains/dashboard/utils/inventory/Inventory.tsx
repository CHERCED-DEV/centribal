import React, { useState, memo, useEffect } from 'react';
import { InventoryDataProps } from './utils/inventory.interface';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';


const Inventory: React.FC<InventoryDataProps> = ({ ui_inventory, products }) => {
    const [sortKey, setSortKey] = useState<keyof ProductsConfig>('name');
    const [sortOrder, setSortOrder] = useState('');
    const [sortedProducts, setSortedProducts] = useState(products); // Crear una copia del array original

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



    return (
        <table className="table">
            <thead>
                <tr className="table__row">
                    <th className="table__cell" onClick={() => sortInventory('reference')}>
                        {ui_inventory.th.reference} {sortKey === 'reference' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th className="table__cell" onClick={() => sortInventory('name')}>
                        {ui_inventory.th.name} {sortKey === 'name' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th className="table__cell" >
                        {ui_inventory.th.description}
                    </th>
                    <th className="table__cell" onClick={() => sortInventory('price')}>
                        {ui_inventory.th.price} {sortKey === 'price' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                    <th className="table__cell" onClick={() => sortInventory('taxes')}>
                        {ui_inventory.th.taxes} {sortKey === 'taxes' && sortOrder === 'asc' ? '▲' : '▼'}
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedProducts.map((product) => (
                    <tr className="table__row" key={product._id}>
                        <td className="table__cell">{product.reference}</td>
                        <td className="table__cell">{product.name}</td>
                        <td className="table__cell">{product.description}</td>
                        <td className="table__cell">{product.price}</td>
                        <td className="table__cell">{product.taxes}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default memo(Inventory);
