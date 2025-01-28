import { type NavItem, type NavItemFooter } from "@/types"
import { MainNavItem, SidebarNavItem } from "@/types/nav"
import { homePagePosts, allPosts } from "@/config/posts";
import { Post } from "@/types/blog";

const links = {
  github:
    "https://github.com/pjborowiecki/SAASY-LAND-Next-14-Starters-With-Authentication-And-Database-Implemented",
  twitter: "https://twitter.com/pjborowiecki",
  linkedin: "https://www.linkedin.com/in/pjborowiecki",
  discord: "",
  authorsWebsite: "https://pjborowiecki.com",
  authorsGitHub: "https://github.com/pjborowiecki",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
}

export interface SiteConfig {
  name: string;
  description: string;
  links: {
    github: string;
    twitter: string;
    linkedin: string;
    discord: string;
    authorsWebsite: string;
    authorsGitHub: string;
    openGraphImage: string;
  };
  url: string;
  ogImage: string;
  author: string;
  hostingRegion: string;
  keywords: string[];
  navItems: NavItem[];
  mainNav: MainNavItem[];
  navItemsFooter: NavItemFooter[];
  homePagePosts: Post[];
  posts: Post[];
}

export const siteConfig: SiteConfig = {
  name: "Financial Corner",
  description:
    "An open-source starter for Next.js 14 full-stack projects with advanced authentication and several database configurations. The aim of this project is to provide a solid foundation for faster building and launching SaaS products, marketing sites, blogs, and more.",
  links,
  url: "https://saasyland.com",
  ogImage: links.openGraphImage,
  author: "pjborowiecki",
  hostingRegion: "fra1",
  keywords: ["SaaS", "Next.js", "Template"],
  navItems: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Features",
      href: "/#features",
    },
    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "FAQ",
      href: "/#faq",
    },
    {
      title: "Learn",
      href: "/resources",
    },
  ] satisfies NavItem[],
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Stocks",
      href: "/stocks",
    },
    {
      title: "Economy",
      href: "/economy",
    },
    {
      title: "Resources",
      href: "/resources",
    },
  ],
  navItemsFooter: [
    {
      title: "Legal",
      items: [
        {
          title: "Privacy",
          href: "/privacy-policy",
          external: false,
        },
        {
          title: "Terms",
          href: "/tos",
          external: false,
        },
      ],
    },
    {
      title: "Profile",
      items: [
        {
          title: "Profile",
          href: "/profile",
          external: false,
        },
        {
          title: "Billing",
          href: "/billing",
          external: false,
        },
      ],
    },
    {
      title: "Inspiration",
      items: [
        {
          title: "Resources",
          href: "/resources",
          external: false,
        },
        {
          title: "Dashboard",
          href: "/dashboard",
          external: false,
        },
      ],
    },
  ] satisfies NavItemFooter[],
  homePagePosts: homePagePosts satisfies Post[],
  posts: allPosts satisfies Post[],
}