import { CreateProductConfig, FromsConfig } from "@/components/common/forms/utils/general-forms.utils";
import { DashBoardConfig } from "@/components/mains/dashboard/utils/dashboard.interface";

export interface ImgConfig {
  src: string;
  alt: string;
  fill?: boolean;
  width: number;
  height: number;
  a?: string;
}

export interface PageClasses {
  pageClass: string;
  mainClass: string;
}
export interface ListItems {
  title: string;
  href: string;
}
interface Link {
  href?: string;
}

// special config for contexts
export interface ContextProviderProps {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}
export interface CmsStaticConfig {
    dashboard: DashBoardConfig;
    create_products: FromsConfig;
    edit_products: FromsConfig;
}

export interface UiStaticData {
    CMS: CmsStaticConfig;
}