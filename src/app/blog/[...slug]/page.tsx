import { getTableOfContents } from "@/lib/toc"
import { getBlogBySlug, getAllBlogSlug } from "../fetchers"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DashboardTableOfContents } from "@/components/toc"
import { ChevronRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { cn, 
    // absoluteUrl 
} from "@/lib/utils"
import { Balancer } from "react-wrap-balancer"
import Link from "next/link"
import { badgeVariants } from "@/components/ui/badge"
import { DocsPager } from "@/components/pager"

import "@/styles/mdx.css"

import { Metadata } from "next"
// import { siteConfig } from "@/config/site"

interface ResourcesPageProps {
  params: Promise<{
    slug: string[]
  }>
}


export async function generateMetadata(props: ResourcesPageProps): Promise<Metadata> {
  const params = await props.params;
  const doc = await getBlogBySlug(params.slug)

  if (!doc) {
    return {}
  }

  return {
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    openGraph: {
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
      type: "article",
    //   url: absoluteUrl(doc.slug),
    //   images: [
    //     {
    //     //   url: siteConfig.ogImage,
    //       width: 1200,
    //       height: 630,
    //     //   alt: siteConfig.name,
    //     },
    //   ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.frontmatter.title,
      description: doc.frontmatter.description,
    //   images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams() {
    // return getAllBlogSlug()
    return getAllBlogSlug().map((slug) => {
      if (Array.isArray(slug)) {
        return ({ slug: slug })
      }
      return ({ slug: [slug] })
    } )
  }

export default async function BlogPage(props: ResourcesPageProps) {
    const params = await props.params;

  const doc = await getBlogBySlug(params.slug)

  if (!doc) {
    return <div>Not found</div>
  }

  const toc = await getTableOfContents(doc.raw)

  return (
    <div className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
          <Link href="/blog" className="truncate hover:underline underline-offset-1">
            All Posts
          </Link>
          {
            doc.frontmatter.category && (<>
              <ChevronRightIcon className="h-3.5 w-3.5" />
              <div className="truncate">{doc.frontmatter.category}</div>
            </>
            )
          }
          <ChevronRightIcon className="h-3.5 w-3.5" />
          <div className="text-foreground">{doc.frontmatter.title}</div>
        </div>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
            {doc.frontmatter.title}
          </h1>
          {doc.frontmatter.description && (
            <p className="text-base text-muted-foreground">
              <Balancer>{doc.frontmatter.description}</Balancer>
            </p>
          )}
        </div>
        {doc.frontmatter.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.frontmatter.links?.doc && (
              <Link
                href={doc.frontmatter.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                Docs
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
            {doc.frontmatter.links?.api && (
              <Link
                href={doc.frontmatter.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            )}
          </div>
        ) : null}
        <article className="pb-12 pt-8">
          {doc.content}
        </article>
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] pt-4">
          <ScrollArea className="h-full pb-10">
            {toc && <DashboardTableOfContents toc={toc} />}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}