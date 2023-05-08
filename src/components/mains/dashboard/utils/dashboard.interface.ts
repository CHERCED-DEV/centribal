import { ImgConfig } from "@/pages/api/customCms/db/utils.interface";
import { CreateOrderConfig } from "./create-order/util/create-order.interface";
import { UIOrdersConfig } from "./orders/util/orders.interface";
import { UiInventoryConfig } from "./inventory/utils/inventory.interface";

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
            orders: UIOrdersConfig;
            inventory: UiInventoryConfig;
            create_order: CreateOrderConfig;
        }
    }
}

export interface DashBoardDataProps {
    dashboard: DashBoardConfig;
}