import React, { Suspense, useState } from 'react';
import { DashBoardDataProps } from './utils/dashboard.interface';
import { Portal } from '@/utils/portals/modalPortal';
import Image from 'next/image';
import { usePortalProvider } from '@/utils/providers/modalProvider';
import { Orders } from './utils/Orders';
import CentribaLoader from '@/components/ui-kit/Spiners&Loaders/CentribaLoader';
import { Inventory } from './utils/Inventory';
import { CreateOrder } from './utils/CreateOrder';

export const Dashboard: React.FC<DashBoardDataProps> = ({ dashboard }) => {
    const { portalSwitch } = usePortalProvider()
    const [renderPortal, setRenderPortal] = useState("");
    return (
        <>
            <aside className='aside'>
                <nav className='aside__nav'>
                    <ul className='aside__list'>
                        {dashboard.aside.map((item) => (
                            <li key={item} className='aside__item'>
                                <span className='aside__text'>{item}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <section className='portal' id='portal'>
                <h1>{ }</h1>
                <>
                    {portalSwitch ? (
                        <Portal>
                            <Suspense fallback={<CentribaLoader />}>
                                {renderPortal === 'Orders' && <Orders />}
                                {renderPortal === 'Inventory' && <Inventory />}
                                {renderPortal === 'New order' && <CreateOrder />}
                            </Suspense>
                        </Portal>
                    ) : (<>
                        <h2>Welcome</h2>
                        <Image
                            src=""
                            alt=""
                            width={0}
                            height={0}
                        />
                    </>)}
                </>
            </section>
        </>
    );
};

