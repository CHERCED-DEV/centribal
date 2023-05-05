import { ImgConfig } from "@/pages/api/customCms/db/utils.interface";

export interface HeaderConfig {
    brandImage: ImgConfig;
    buttonMenu: ImgConfig;
    backTo: ImgConfig;
}

export interface HeaderDataProps {
    header: HeaderConfig;
}