import Inventory from '@/components/mains/dashboard/utils/inventory/Inventory'
import React, { memo } from 'react'
import { ProductsConfig } from '../api/products/db/products.utils';
import { useGetData } from '@/utils/providers/requests/helpers';
import { CmsStaticConfig } from '../api/customCms/db/utils.interface';

export default memo(function EditProduct() {
    const products = useGetData<ProductsConfig[]>("api/products", "products");
    const ui_products = useGetData<CmsStaticConfig>("api/customCms", "dashboard");
    return (
        <div>
            {
                ui_products && products && (<Inventory ui_inventory={ui_products.dashboard.portal.components.inventory} products={products} />)
            }
        </div>
    )
})