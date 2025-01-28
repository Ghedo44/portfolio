import { MainNav, NavItemFooter } from "@/types/nav"
import { Post } from "@/types/blog"

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
  // hostingRegion: string;
  keywords: string[];
  mainNav: MainNav;
  navItemsFooter: NavItemFooter[];
  homePagePosts: Post[];
  posts: Post[];
}
