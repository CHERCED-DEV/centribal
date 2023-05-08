import React, { useState, memo } from 'react';
import { InventoryDataProps } from './utils/inventory.interface';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';


const Inventory: React.FC<InventoryDataProps> = ({ ui_inventory, products }) => {
    const [sortKey, setSortKey] = useState<keyof ProductsConfig>('name');
    const [sortOrder, setSortOrder] = useState('');

    const sortInventory = (key: keyof ProductsConfig) => {
        if (sortKey === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    const sortedProducts = products.sort((a, b) => {
        const valueA = a[sortKey as keyof typeof a];
        const valueB = b[sortKey as keyof typeof b];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
            if (sortOrder === 'desc') {
                return valueB.localeCompare(valueA);
            } else {
                return valueA.localeCompare(valueB);
            }
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
            if (sortOrder === 'desc') {
                return valueB - valueA;
            } else {
                return valueA - valueB;
            }
        } else if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
            if (sortOrder === 'desc') {
                return valueB ? -1 : 1;
            } else {
                return valueA ? -1 : 1;
            }
        } else if (valueA instanceof Date && valueB instanceof Date) {
            if (sortOrder === 'desc') {
                return valueB.getTime() - valueA.getTime();
            } else {
                return valueA.getTime() - valueB.getTime();
            }
        }

        return 0; // Si los tipos no son compatibles, se considera que los elementos son iguales
    })


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
                    <th className="table__cell" onClick={() => sortInventory('description')}>
                        {ui_inventory.th.description}{sortKey === 'description' && sortOrder === 'asc' ? '▲' : '▼'}
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
                    <tr className="table__row" key={product.reference}>
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
