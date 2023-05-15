import Inventory from '@/components/mains/dashboard/utils/inventory/Inventory'
import React, { memo } from 'react'
import { UiStaticData } from '../api/customCms/db/utils.interface';

export default memo(function EditProduct({CMS}:UiStaticData) {

    
    return (
        <div>
            {
                CMS && (<Inventory ui_inventory={CMS.dashboard.portal.components.inventory} />)
            }
        </div>
    )
})

export const getServerSideProps = async () => {
    try {
        const response = await fetch(`${process.env.VERCEL_URL_CORS}/api/customCms`);
        const CMS = await response.json();
        return {
            props: {
                CMS,
            },
        };
    } catch (error) {
        console.error('Error in getServerSideProps:', error);
        return {
            props: {
                error: 'An error occurred while fetching server-side data.',
            },
        };
    }
};