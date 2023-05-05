import { ImgConfig } from "@/pages/api/customCms/db/utils.interface"

interface ChannelConfig {
    img: ImgConfig;
    label: string;
  }

export interface ContactMeConfig {
    channels: ChannelConfig[],
    social_media: ImgConfig[]
}

export interface ContactMeDataProps {
    contactMe: ContactMeConfig;
}