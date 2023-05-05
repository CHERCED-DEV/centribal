import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { lazy, useEffect, useState } from 'react';
import { PageClasses } from "./api/customCms/db/utils.interface";
import { pageClassDynamicBody } from '@/utils/domMethods/pageClassDynamicBody';
import "../sass/styles.scss";

import { PortalContextProvider, usePortalProvider } from '@/utils/providers/modalProvider';

const Layout = lazy(() => import("../components/ui-kit/Layout"));

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const id = router.pathname;
    const [pageClasses, setPageClasses] = useState<PageClasses>({ pageClass: "", mainClass: "" });

    useEffect(() => {
        const { pageClass, mainClass } = pageClassDynamicBody(id);
        setPageClasses({ pageClass, mainClass });
    }, [id]);


    return (
        <PortalContextProvider>
            <Layout
                pageClass={pageClasses.pageClass}
                mainClass={pageClasses.mainClass}
            >
                <Component {...pageProps as any} />
            </Layout>
        </PortalContextProvider>

    );
}
