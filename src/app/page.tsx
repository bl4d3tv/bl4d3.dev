import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import {
  BinaryIcon,
  BriefcaseIcon,
  BugOffIcon,
  RabbitIcon,
  SendIcon,
  SproutIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "~/assets/logo.png";
import SkillCard from "~/components/skill-card";

export default function Home() {
  return (
    <div className="mx-auto mt-10 grid min-h-screen max-w-screen-xl grid-rows-1 items-center justify-items-center p-8 sm:p-20">
      <main className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-0">
          <div className="order-2 space-y-2 text-balance font-mono md:order-none">
            <p className="text-xl sm:text-2xl">
              👋 Hi, I&apos;m <span className="text-amber-600">Nicolás</span>,
              also known as <span className="text-amber-600">Blade</span>.
            </p>
            <p className="text-sm sm:text-base">
              I&apos;m a self-taught passionate software developer from
              Argentina. My programming journey started when I was 16 years old,
              and I&apos;ve been diving deeper into the world of software
              development ever since. Even though I&apos;ve started programming
              at 16 years old, my love for technology started 6 years before
              that, when I got my first computer.
            </p>
            <p className="text-sm sm:text-base">
              My main focus is on backend development, but I also enjoy working
              on frontend projects. I&apos;ve worked with a variety of
              programming languages and technologies, from Typescript and
              Node.js to Rust and Java.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                href="/work"
                className="flex h-12 max-w-fit items-center justify-center rounded-full border border-solid border-transparent bg-foreground px-5 font-sans text-sm font-semibold text-background transition-colors hover:border-none hover:bg-[#ccc] sm:text-base"
              >
                <BriefcaseIcon className="mr-1 size-6" />
                Checkout my work
              </Link>
              <a
                href="mailto:bl4d3sitoo@gmail.com"
                className="flex h-12 max-w-fit items-center justify-center rounded-full border border-solid border-amber-600 bg-background px-5 font-sans text-sm font-semibold text-amber-600 transition-colors hover:border-transparent hover:bg-amber-600 hover:text-background sm:text-base"
              >
                <SendIcon className="mr-1 size-6" />
                Contact me
              </a>
            </div>
          </div>
          <div className="order-1 flex flex-col items-center md:order-none md:basis-2/3">
            <Image src={logo} width={300} alt="Logo" />
            <div className="flex flex-row gap-2">
              <a
                href="https://x.com/bl4d3tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiX className="size-8 fill-stone-700 transition-colors hover:fill-white" />
              </a>
              <a
                href="https://github.com/bl4d3tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="size-8 fill-stone-700 transition-colors hover:fill-white" />
              </a>
            </div>
          </div>
        </div>
        <section id="skills" className="flex w-full flex-col gap-5">
          <h2 className="justify-start text-3xl font-bold">
            Professional Skills
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <SkillCard
              title="Programming Languages"
              description="I have the most experience coding in Rust, Go, Java and TypeScript, but I also know Python, C# and Kotlin."
              icon={<BinaryIcon className="size-7 text-amber-600" />}
            />
            <SkillCard
              title="Clean Code"
              description="I'm a big fan of clean code and I always try to write
                  code that is easy to read, understand and maintain."
              icon={<SproutIcon className="size-7 text-amber-600" />}
            />
            <SkillCard
              title="Fast Learner"
              description="I'm a fast learner and I'm always looking for new
                  technologies to learn and ways to improve my skills."
              icon={<RabbitIcon className="size-7 text-amber-600" />}
            />
            <SkillCard
              title="Problem Solver"
              description="I have a strong ability to troubleshoot and debug, always
                  looking for efficient and creative solutions."
              icon={<BugOffIcon className="size-7 text-amber-600" />}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
