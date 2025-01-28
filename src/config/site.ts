import { type NavItemFooter } from "@/types/nav"
import { homePagePosts, allPosts } from "@/config/posts";
import { Post } from "@/types/blog";
import { HomeIcon, PencilIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { SiteConfig } from "@/types";

const links = {
  github: "",
  twitter: "",
  linkedin: "",
  discord: "",
  authorsWebsite: "",
  authorsGitHub: "",
  openGraphImage: "",
}

export const siteConfig: SiteConfig = {
  name: "Federico Ghedini",
  description:
    "I'm an aerospace engineering student and a self-taught web developer.",
  links,
  url: "https://ghedo.me",
  ogImage: links.openGraphImage,
  author: "Federico Ghedini",
  // hostingRegion: "fra1",
  keywords: ["Aerospace Engineer", "Federico Ghedini"],
  mainNav: {
    navbar: [
      { href: "/", icon: HomeIcon, label: "Home" },
      { href: "/blog", icon: PencilIcon, label: "Blog" },
    ],
    contact: {
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/ghedo44",
          icon: Icons.github,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/federico-ghedini/",
          icon: Icons.linkedin,
        },
      //   Twitter: {
      //     name: "X",
      //     url: "https://x.com/",
      //     icon: Icons.x,
      //   },
        Email: {
          name: "Send Email",
          url: "mailto:federico.ghedini@mail.polimi.it",
          icon: Icons.email,
        },
      //   Youtube: {
      //     name: "YouTube",
      //     url: "https://www.youtube.com/",
      //     icon: Icons.youtube,
      //   },
      },
    },
  },
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