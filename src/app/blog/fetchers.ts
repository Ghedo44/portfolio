import fs from "fs"
import path from "path"
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc"
import { components } from "@/components/mdx-components";

const contentDir = path.join(process.cwd(), "src/posts")

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, rehypeSlug],
  },
};

export async function getBlogBySlug(slug: string[] | string) {
  try {
    if (Array.isArray(slug)) {
      slug = slug.join("/")
    } 
    const fileName = slug + ".mdx"
    const filePath = path.join(contentDir, fileName)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { frontmatter, content } = await compileMDX<{
      title: string
      description: string
      component: boolean
      category: string
      links: any //string[]
    }>({
      source: fileContent,
      options: options,
      components: components
    })
    return {
      frontmatter,
      content,
      slug: path.parse(fileName).name,
      raw: fileContent
    }
  }
  catch {
    return null
  }
}

export async function getBlogs() {
  const files = fs.readdirSync(contentDir)
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name))
  )
  return blogs
}

export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir)
  // return files.map((file) => path.parse(file).name)

  // Handle nested directories
  // return files.map((file) => {
  //   if (fs.statSync(path.join(contentDir, file)).isDirectory()) {
  //     const nestedFiles = fs.readdirSync(path.join(contentDir, file))
  //     return nestedFiles.map((nestedFile) => path.parse(nestedFile).name)
  //   }
  //   return path.parse(file).name
  // })

  // Handle nested directories, consider the directory in the slug
  return files.map((file) => {
    if (fs.statSync(path.join(contentDir, file)).isDirectory()) {
      const nestedFiles = fs.readdirSync(path.join(contentDir, file))
      return nestedFiles.map((nestedFile) => [file, path.parse(nestedFile).name])
    }
    return path.parse(file).name
  }).flat()

}