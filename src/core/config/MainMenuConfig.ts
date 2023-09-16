export interface MenuItem {
    heading?: string;
    sectionTitle?: string;
    route?: string;
    pages?: Array<MenuItem>;
    keenthemesIcon?: string;
    bootstrapIcon?: string;
    sub?: Array<MenuItem>;
}

export interface SocialMenuItem {
    heading?: string;
    route?: string;
    icon: string
}


const MainMenuConfig: Array<MenuItem> = [
    {
        pages: [
            {
                heading: "home",
                route: "/home",
                keenthemesIcon: "element-11",
                bootstrapIcon: "bi-app-indicator",
            },
        ],
    },
    {
        heading: "products",
        route: "/products",
        pages: [
            {
                sectionTitle: "pots",
                route: "/products/pots",
                keenthemesIcon: "element-plus",
                bootstrapIcon: "bi-archive",
                sub: [
                    {
                        heading: "beeCollection",
                        route: "/products/pots/bee",
                    },
                    {
                        heading: "hiveCollection",
                        route: "/products/pots/hive",
                    },
                    {
                        heading: "honeycombCollection",
                        route: "/products/pots/honeycomb",
                    },
                    {
                        heading: "queenCollection",
                        route: "/products/pots/queen",
                    },
                ],
            },
            {
                sectionTitle: "furniture",
                route: "/furniture",
                keenthemesIcon: "profile-circle",
                bootstrapIcon: "bi-person",
                sub: [
                    {
                        heading: "columnCollection",
                        route: "/products/furniture/column",
                    },
                    {
                        heading: "tableCollection",
                        route: "/products/furniture/table",
                    },
                    {
                        heading: "sideboardCollection",
                        route: "/products/furniture/sideboard",
                    },
                ],
            },
            {
                heading: "long",
                route: "/products/long",
                keenthemesIcon: "design",
                bootstrapIcon: "bi-shield-check",
            },
            {
                heading: "covering",
                route: "/products/covering",
                keenthemesIcon: "design",
                bootstrapIcon: "bi-shield-check",
            },
        ],
    },
    {
        pages: [
            {
                heading: "blog",
                route: "/blog",
                keenthemesIcon: "element-11",
                bootstrapIcon: "bi-app-indicator",
            },
            {
                heading: "about",
                route: "/about",
                keenthemesIcon: "element-11",
                bootstrapIcon: "bi-app-indicator",
            },
            {
                heading: "contact",
                route: "/contact",
                keenthemesIcon: "element-11",
                bootstrapIcon: "bi-app-indicator",
            },
        ],
    },
];
export const SocialMenuConfig: Array<SocialMenuItem> = [
    {
        heading: "Instagram",
        route: "#",
        icon: 'instagram'
    },
    {
        heading: "Facebook",
        route: "#",
        icon: 'facebook'
    },
    {
        heading: "Twitter",
        route: "#",
        icon: 'twitter'
    },
    {
        heading: "LinkedIn",
        route: "#",
        icon: 'linkedin'
    },
];

export default MainMenuConfig;
