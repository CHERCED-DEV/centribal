import { LayoutConfig } from "./layout.interface";

export const layout: LayoutConfig = {
    header: {
        brandImage: {
            src: "/assets/logos/centribal-logo.svg",
            alt: "",
            width: 40,
            height: 40,
        },
        buttonMenu: {
            src: '/assets/logos/navbar.png',
            alt: 'menu button',
            width: 31,
            height: 18,
        },
        backTo: {
            src: '/assets/logos/backTo.png',
            alt: 'BackTo',
            width: 40,
            height: 40,
        },
    },
    footer: {
        centribal: {
            src: '/assets/logos/centribalLoader.svg',
            alt: 'BackTo',
            width: 110,
            height: 143,
        },
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
                    label: "servicio@centribal.co",
                },
            ],
            social_media: [
                {
                    src: "/assets/logos/linkedInIcon.png",
                    alt: "instagram",
                    width: 35,
                    height: 35,
                    a: "https://www.linkedin.com/company/centribal/"
                },
                {
                    src: "/assets/logos/instagramIcon.png",
                    alt: "facebook",
                    width: 35,
                    height: 35,
                    a: "https://www.instagram.com/centribot_oficial/"
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
                "© Copyright Centribal 2023 LLC All Rights Reserved.",
        },
    },
};
