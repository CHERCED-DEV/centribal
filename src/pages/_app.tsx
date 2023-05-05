import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { lazy, useCallback, useEffect, useState } from 'react';
import { PageClasses } from "./api/customCms/db/utils.interface";
import { pageClassDynamicBody } from '@/utils/domMethods/pageClassDynamicBody';
/* import { getCMSData } from '@/utils/providers/requests/homeCB'; */
import { usePortalProvider } from '@/utils/providers/modalProvider';

const Layout = lazy(() => import("../components/ui-kit/Layout"));

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const id = router.pathname;
    const {handleSubMenu, sethandleSubMenu} = usePortalProvider();
    const [pageClasses, setPageClasses] = useState<PageClasses>({ pageClass: "", mainClass: "" });

    /* const storageConstructor = useCallback(async () => {
        const CmsData = await getCMSData();
        window.localStorage.setItem("CmsData", JSON.stringify(CmsData));
    }, []); */

    useEffect(() => {
        /* storageConstructor(); */
        const { pageClass, mainClass } = pageClassDynamicBody(id);
        setPageClasses({ pageClass, mainClass });
        sethandleSubMenu(false);
    }, [id]);


    return (
        <Layout
            pageClass={pageClasses.pageClass}
            mainClass={pageClasses.mainClass}
        >
            <Component {...pageProps as any} />
        </Layout>
    );
}
