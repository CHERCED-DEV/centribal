import React, { lazy, memo, useState } from 'react';
import Image from 'next/image';
import { DashBoardDataProps } from './utils/dashboard.interface';
import { usePortalProvider } from '@/utils/providers/modalProvider';
import { ProductsConfig } from '@/pages/api/products/db/products.utils';
import { useGetData } from '@/utils/providers/requests/helpers';


const FormContainer = lazy(() => import('@/components/common/forms/FormContainer'));
const Inventory = lazy(() => import('@/components/mains/dashboard/utils/inventory/Inventory'));
const Orders = lazy(() => import('@/components/mains/dashboard/utils/orders/Orders'));

const Dashboard: React.FC<DashBoardDataProps> = ({ dashboard }) => {
    const { portalSwitch, setPortalSwitch } = usePortalProvider();
    const [renderPortal, setRenderPortal] = useState<string>("");

    const products = useGetData<ProductsConfig[]>("api/products", "products");

    const handlePortal = (option: string) => {
        if (portalSwitch === false) {
            setPortalSwitch(true)
            setRenderPortal(option);
        } else {
            setRenderPortal(option);
        }
    }

    return (
        <>
            <aside className='aside'>
                <nav className='aside__nav'>
                    <h1 className='aside__nav-title'>{dashboard.aside.title}</h1>
                    <ul className='aside__list'>
                        {dashboard.aside.options.map((item) => (
                            <li key={item} className='aside__item'>
                                <button onClick={() => handlePortal(item)} className='aside__item-button'>
                                    <span className='aside__item-span'>{item}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <section className='portal' id='portal'>
                <Image
                    className='portal__brand-img'
                    src={dashboard.portal.img.src}
                    alt={dashboard.portal.img.alt}
                    width={dashboard.portal.img.width}
                    height={dashboard.portal.img.height}
                />
                <h2 className='portal__title'>{dashboard.portal.title}</h2>
                <>
                    {portalSwitch ? (
                        products && (
                            <>
                                {renderPortal === 'Orders' && <Orders ui_orders={dashboard.portal.components.orders} />}
                                {renderPortal === 'Inventory' && <Inventory ui_inventory={dashboard.portal.components.inventory} products={products} />}
                                {renderPortal === 'New order' && <FormContainer forms={dashboard.portal.components.create_order} products={products} />}
                            </>
                        )
                    ) : (<>
                        <h3 className='portal__welcome-title'>{dashboard.portal.welcome.label} {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                        <Image
                            className='portal__welcome-img'
                            src={dashboard.portal.welcome.img.src}
                            alt={dashboard.portal.welcome.img.alt}
                            width={dashboard.portal.welcome.img.width}
                            height={dashboard.portal.welcome.img.height}
                        />
                    </>)}
                </>
            </section>
        </>
    );
};

export default memo(Dashboard);
