import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = "force-static";

function getPostSlugs() {
    const slugs = siteConfig.posts.map((post) => post.slug);
    return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {

    const slugs = getPostSlugs();

    const routes = slugs.map((slug) => {
        return {
            url: `${siteConfig.url}/blog/${slug}`,
            priority: 0.5,
        }
    })

    return [
        {
            url: siteConfig.url,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${siteConfig.url}/blog`,
        },
        ...routes
    ]
}