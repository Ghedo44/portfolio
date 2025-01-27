import { SidebarNavItem } from "@/types/nav";

export const resourcesLinks: SidebarNavItem[] = [
    {
        title: "Getting Started",
        items: [
            {
                title: "Introduction",
                href: "/blog/hi",
                slug: "hi",
                items: [],
            },
            {
                title: "Installation",
                href: "/resources/installation",
                items: [],
            },
        ],
    },
    {
        title: "Economics",
        items: [
            {
                title: "Gross Domestic Product",
                href: "/resources/economics/gross-domestic-product",
                items: [],
            },
        ],
    },
    {
        title: "Valuation",
        items: [
            {
                title: "Discounted Cash Flow",
                href: "/resources/valuation/dcf",
                items: [],
            },
        ],
    },
]