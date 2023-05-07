import { ImgConfig } from "@/pages/api/customCms/db/utils.interface";

export interface DashBoardConfig {
    aside: {
        title: string;
        options: string[];
    },
    portal: {
        img: ImgConfig;
        title: string;
        welcome: {
            img: ImgConfig;
            label: string;
        }
        components: {
            orders: string;
            inventory: string;
            create_order: string;
        }
    }
}

export interface DashBoardDataProps {
    dashboard: DashBoardConfig;
}