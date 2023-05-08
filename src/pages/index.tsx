import { Dashboard } from '@/components/mains/dashboard/Dashboard';
import Head from 'next/head';
import { UiStaticData } from './api/customCms/db/utils.interface';

export default function Home({ CMS }: UiStaticData) {
    return (
        <>
            <Head>
                <title>DashBoard | Centribal </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {
                CMS && (<Dashboard dashboard={CMS.dashboard} />)
            }

        </>
    )
}

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

