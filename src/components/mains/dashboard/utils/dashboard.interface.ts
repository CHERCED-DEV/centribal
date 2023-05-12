import { ImgConfig } from "@/pages/api/customCms/db/utils.interface";
import { UIOrdersConfig } from "./orders/util/orders.interface";
import { UiInventoryConfig } from "./inventory/utils/inventory.interface";
import { FromsConfig } from "@/components/common/forms/utils/general-forms.utils";

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
            create_order: FromsConfig;
        }
    }
}

export interface DashBoardDataProps {
    dashboard: DashBoardConfig;
}