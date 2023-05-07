import React, { Suspense, lazy, useEffect, useState } from 'react';
import { DashBoardDataProps } from './utils/dashboard.interface';
import { Portal } from '@/utils/portals/modalPortal';
import Image from 'next/image';
import { usePortalProvider } from '@/utils/providers/modalProvider';
import { Orders } from './utils/orders/Orders';

import Inventory from './utils/inventory/Inventory';
import { CreateOrder } from './utils/create-order/CreateOrder';

const CentribaLoader = lazy(() => import('@/components/ui-kit/Spiners&Loaders/CentribaLoader'));

export const Dashboard: React.FC<DashBoardDataProps> = ({ dashboard }) => {
    const { portalSwitch, setPortalSwitch } = usePortalProvider()
    const [renderPortal, setRenderPortal] = useState<string>("");

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
                        <Portal>
                            <Suspense fallback={<CentribaLoader />}>
                                {renderPortal === 'Orders' && <Orders orders={dashboard.portal.components.orders} />}
                                {renderPortal === 'Inventory' && <Inventory inventory={dashboard.portal.components.inventory} />}
                                {renderPortal === 'New order' && <CreateOrder create_order={dashboard.portal.components.create_order} />}
                            </Suspense>
                        </Portal>
                    ) : (<>
                        <h3 className='portal__welcome-title'>{dashboard.portal.welcome.label}</h3>
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

