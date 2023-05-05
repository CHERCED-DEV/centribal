import React, { ReactNode, Suspense, lazy, memo, useCallback, useEffect, useState } from 'react';
import { LayoutCmsConfig } from './utils/layout.interface';
import { usePortalProvider } from '@/utils/providers/modalProvider';

interface LayOutDataProps {
    children:  ReactNode | JSX.Element | JSX.Element[];
    pageClass: string;
    mainClass: string;
}

const StarterApp = lazy(() => import("./Spiners&Loaders/StarterApp"));
const CentribaLoader = lazy(() => import("./Spiners&Loaders/CentribaLoader"));
const Header = lazy(() => import("./header/Header"));
const Footer = lazy(() => import("./footer/footer"));

const Layout: React.FC<LayOutDataProps> = ({ children, mainClass, pageClass }) => {
    const {headerSimple, setHeaderSimple} = usePortalProvider()
    const [layoutData, setLayoutData] = useState<LayoutCmsConfig>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [initialStorageValue, setInitialStorageValue] = useState<boolean>(false);

    const getLayoutData = useCallback(async () => {
        const data = await fetch("/api/customCms");
        const res = await data.json();
        if (data !== null) {
            setLayoutData(res.layout)
        }
    }, [])

    useEffect(() => {
        getLayoutData();
    }, [getLayoutData])

    useEffect(() => {
        if (pageClass == "BLOG-POST--PAGE" || pageClass == "PROJECTS-PAGE" || pageClass == "INBOX--PAGE") {
            setHeaderSimple(false);
        }
    }, [pageClass])

    useEffect(() => {
        const storedValue = window.sessionStorage.getItem('isLoading');
        if (storedValue !== null) {
            setIsLoading(storedValue === 'true');
        } else {
            setIsLoading(true);
        }
        setInitialStorageValue(true);
    }, []);

    useEffect(() => {
        function handlePageLoad() {
            if (sessionStorage.getItem('isLoading') === 'false') {
                console.log("Welcome to Cherced World")
            } else {
                const timerId = setTimeout(() => {
                    sessionStorage.setItem('isLoading', 'false');
                    setIsLoading(false);
                }, 4500);
                return () => {
                    clearTimeout(timerId);
                };
            }
        }

        handlePageLoad();

    }, []);

    return (
        <>
            {initialStorageValue && isLoading && <StarterApp />}
            {!isLoading && (
                <>
                    <Suspense fallback={<CentribaLoader />}>
                        <div className={pageClass}>
                            {
                                layoutData ? <Header header={layoutData.header} pageClass={pageClass} headerSimple={headerSimple} setHeaderSimple={setHeaderSimple} /> : null
                            }
                            <main className={mainClass}>
                                {children}
                            </main>
                            {
                                layoutData ? <Footer footer={layoutData.footer} /> : null
                            }
                        </div>
                    </Suspense>
                </>
            )
            }
        </>
    )
}

export default memo(Layout);
