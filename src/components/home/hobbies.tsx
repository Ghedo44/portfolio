// import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function Hobbies() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold">Hobbies</h1>

            <div className="flex gap-4 flex-col min-[1700px]:flex-row items-center">
                {/* <AspectRatio ratio={16 / 9} className="bg-muted w-[400px]">
                    <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Photo by Drew Beamer"
                        fill
                        className="h-full w-full rounded-md object-cover"
                    />
                </AspectRatio> */}
                {/* <div className="h-[250px] w-[400px] bg-primary rounded-xl shrink-0"></div> */}

                <div className="h-[250px] w-[400px] bg-primary rounded-xl shrink-0 relative overflow-hidden">
                    <Image src="/images/hockey.jpg" alt="Ice Hockey" className="w-full h-full object-cover" fill />
                </div>

                <p className="text-lg">
                    One of my main hobbies is playing ice hockey. I have played in the IHL Division One (Italian Hockey League), which has been an incredible experience.
                    Ice hockey has taught me the importance of teamwork, discipline, and perseverance. It has also helped me develop strong leadership skills and the ability to stay calm under pressure.
                    These qualities have been advantageous in both my personal and professional life, allowing me to effectively collaborate with others and tackle challenges head-on.
                </p>
            </div>

            <div className="grid gap-4 grid-cols-1 min-[1700px]:grid-cols-2 items-center justify-items-center">
                <div className="h-[250px] w-[400px] bg-primary rounded-xl shrink-0 relative overflow-hidden">
                    <Image src="/images/coding.jpg" alt="Coding" className="w-full h-full object-cover" fill />
                </div>
                <p className="text-lg min-[1700px]:-order-1">
                    Another hobby of mine is coding. I enjoy creating web applications and exploring new technologies.
                    Coding allows me to solve complex problems and continuously learn and improve my skills. It is
                    both a challenging and rewarding activity that keeps me engaged and motivated. Through coding,
                    I have developed a strong attention to detail and the ability to think logically and systematically. These skills have been beneficial in my career as a software developer, enabling me to build efficient and effective solutions.
                </p>
            </div>

            <div className="flex gap-4 flex-col min-[1700px]:flex-row items-center">
                <div className="h-[250px] w-[400px] bg-primary rounded-xl shrink-0 relative overflow-hidden">
                    <Image src="/images/gaming.jpg" alt="Gaming" className="w-full h-full object-cover" fill />
                </div>
                <p className="text-lg">
                    One of my favorite hobbies is playing video games. Video games provide a great way to relax and
                    unwind after a long day. They also offer a unique form of storytelling and interactive entertainment
                    that can be both immersive and engaging. Playing video games has helped me develop quick reflexes,
                    strategic thinking, and problem-solving skills. Additionally, it has allowed me to connect with
                    friends and other gamers from around the world, fostering a sense of community and teamwork.
                </p>
            </div>
        </div>
    );
}