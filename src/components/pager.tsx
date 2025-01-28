import Link from "next/link"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

interface DocsPagerProps {
  doc: any // TODO: Add type
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev?.link && (
        <Link
          href={pager.prev.link}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.link && (
        <Link
          href={pager.next.link}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(doc: any) {
  const nav = siteConfig.posts
  const flattenedLinks = [null, ...nav, null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.slug
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next,
  }
}