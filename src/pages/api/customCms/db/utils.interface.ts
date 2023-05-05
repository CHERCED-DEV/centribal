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

export interface FooterConfig {
  backOption: {
    img: ImgConfig;
    text: string;
    link: Link;
  };
  footerSocialMedia: ImgConfig[];
  copyright: {
    strongText: string;
    normalText: string;
  };
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
