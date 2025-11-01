import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { AiTwotoneHtml5 } from "react-icons/ai";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiFigma,
  SiGit,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { SiAntdesign } from "react-icons/si";

export default function page() {
  const techStack = [
    { name: "HTML5", icon: <AiTwotoneHtml5 /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "JavaScript", icon: <AiOutlineJavaScript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Ant Design", icon: <SiAntdesign /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Git", icon: <SiGit /> },
  ];
  return (
    <div className="py-10">
      <div className="container max-w-screen-sm mx-auto px-5">
        <p className="mb-1 animate-slide-top">Assalomu alaykum.</p>
        <p className="animate-slide-top delay-300 mb-1">
          Ismim Baxrom. Frontend dasturchiman 2024-yildan buyon dasturlash
          olamidaman.
        </p>
        <p className="animate-slide-top delay-600 mb-1">
          Dasturlashni <span className="underline">katta soqqa</span> borligidan
          tashqari dasturlar yaratishga ishtiyoqim balandligi uchun ham
          o'rganganman.
        </p>
        <p className="animate-slide-top delay-900 mb-1">
          Dasturlash hayotimda 10+ loyihalar qilganman. Ulardan{" "}
          <span className="underline">real</span> hisoblangani hamda hozir ham
          insonlarga manfaat beradiganlari 5+ hisoblanadi. Batafsil{" "}
          <Link className="underline" href="/projects">
            loyihalar
          </Link>{" "}
          bo'limida tanishishingiz mumkin.
        </p>
        {/* <p className="animate-slide-top delay-1200">
          Hozirda{" "}
          <a className="underline" href="https://najottalim.uz" target="_blank">
            Najot Ta'lim
          </a>{" "}
          da frontend kursida o'qiyman. Menda hozircha shular, endi o'zingizdan
          so'rasak :D
        </p> */}
      </div>

      <div className="px-10 animate-slide-top delay-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <Card
              key={index}
              className=" group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {tech.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
