import { type Icons } from "@/components/icons"

export interface NavItem {
  href: string
  icon: keyof typeof Icons | any
  label: string
}

export interface SocialItem {
  name: string
  url: string
  icon: keyof typeof Icons | any,
}

export interface MainNav {
  navbar: NavItem[]
  contact: {
    social: {
      [key: string]: SocialItem
    }
  }
}

export interface NavItemFooter {
  title: string
  items: {
    title: string
    href: string
    external?: boolean
  }[]
}