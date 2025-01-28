import Link from "next/link";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
    return (
        <section className="text-center py-10">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                {/* Email */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <Icons.email className="text-primary w-6 h-6" />
                    <h3 className="font-semibold">Email</h3>
                    <Link href={"mailto:"+siteConfig.email} className="text-primary hover:underline">
                        {siteConfig.email}
                    </Link>
                </div>
                {/* Location */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <MapPin className="text-primary w-6 h-6" />
                    <h3 className="font-semibold">Location</h3>
                    <div className="flex flex-col items-center md:items-start">
                        <p>Milan, Italy</p>
                        <p>Cortina d'Ampezzo, Italy</p>
                    </div>
                </div>
            </div>
            {/* Social Media Buttons */}
            <div className="flex justify-center gap-4 mt-6">
                <Button variant="ghost" asChild>
                    <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <Icons.gitHub /> GitHub
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <Icons.linkedin /> LinkedIn
                    </Link>
                </Button>
                <Button variant="ghost" asChild>
                    <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <Icons.facebook /> Instagram
                    </Link>
                </Button>
            </div>
        </section>
    );
}