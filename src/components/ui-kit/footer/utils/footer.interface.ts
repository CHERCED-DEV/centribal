import { ContactMeConfig } from "./sections/contact-me/utils/contact-me.interface";
import { CopyRigthConfig } from "./sections/copyrigth/utils/copyrigth.interface";
import { NewsLetterConfig } from "./sections/news-letter/utils/newsletter.interface";

export interface footerConfig {
  contactMe: ContactMeConfig;
  copyRight: CopyRigthConfig;
  newsletter: NewsLetterConfig;
}

export interface footerDataProps {
  footer: footerConfig;
}
