import React from "react";
import { Post } from "@/types/blog";
import { siteConfig } from "@/config/site";
import { PostCard } from "../post-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const projectsData: Post[] = siteConfig.homePagePosts;

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <PostCard key={index} post={project} />
        ))}
      </div>
      {/* Link to Blog */}
      <div className="flex justify-end">
        <Button variant="ghost" asChild>
          <Link href="/blog">View all projects <ChevronRight /></Link>
        </Button>
      </div>
    </div>
  );
}

export default Projects;