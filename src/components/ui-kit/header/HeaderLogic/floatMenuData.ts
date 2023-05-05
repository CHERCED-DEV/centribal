import { ListItems } from "@/pages/api/customCms/db/utils.interface";

export let floatMenuData: { [key: string]: ListItems[] } = {
  options: [
    {
      title: "About me",
      href: "aboutMe",
    },
    {
      title: "Services",
      href: "services",
    },
    {
      title: "Portfolio",
      href: "portfolio",
    },
    {
      title: "Blog",
      href: "blog",
    },
    {
      title: "Contact Me",
      href: "contactMe",
    },
  ],
};
