import { LayoutConfig } from "./layout.interface";

export const layout: LayoutConfig = {
    header: {
        brandImage: {
            src: "/assets/logos/centribal-logo.svg",
            alt: "",
            width: 58,
            height: 58,
        },
        buttonMenu: {
            src: '/assets/icons/navbar.png',
            alt: 'menu button',
            width: 31,
            height: 18,
        },
        backTo: {
            src: '/assets/icons/backTo.png',
            alt: 'BackTo',
            width: 40,
            height: 40,
        },
    },
    footer: {
        contactMe: {
            channels: [
                {
                    img: {
                        src: "/assets/logos/telephone-logo.svg",
                        alt: "phone",
                        width: 30,
                        height: 30,
                    },
                    label: "+57 (322) 374 6739",
                },
                {
                    img: {
                        src: "/assets/logos/mailito-logo.svg",
                        alt: "email",
                        width: 30,
                        height: 30,
                    },
                    label: "servicio@lurdes.co",
                },
            ],
            social_media: [
                {
                    src: "/assets/logos/instagramIcon.png",
                    alt: "instagram",
                    width: 50,
                    height: 50,
                },
                {
                    src: "/assets/logos/facebookIcon.png",
                    alt: "facebook",
                    width: 50,
                    height: 50,
                },
            ],
        },
        newsletter: {
            title: "SUBSCRIBE TO OUR NEWSLETTER!",
            form: {
                placeholder: "Your email",
                submit: "Send",
            },
        },
        copyRight: {
            terms: "Terms & Conditions | Privacy Policy",
            powered_by:
                "© Copyright 2020 - 2021 Ingenuity & Solutions LLC All Rights Reserved.",
        },
    },
};
