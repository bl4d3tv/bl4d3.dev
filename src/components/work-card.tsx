"use client";

import {
  SiCondaforge,
  SiGooglecloud,
  SiNodedotjs,
  SiOpenjdk,
  SiReact,
  SiRust,
  SiTauri,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import {
  BriefcaseBusinessIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type WorkCardProps = {
  title: string;
  description: string;
  date?: string;
  role?: string;
  img?: StaticImageData;
  technologies?: (keyof typeof icons)[];
  links?: {
    github?: string;
    website?: string;
  };
};

const icons = {
  java: (
    <SiOpenjdk
      key="wc-icon=java"
      className="work-card-technology-icon"
      title="Java"
    />
  ),
  ts: <SiTypescript key="wc-icon=ts" className="work-card-technology-icon" />,
  forge: (
    <SiCondaforge
      key="wc-icon=forge"
      className="work-card-technology-icon"
      title="Minecraft Forge"
    />
  ),
  gcloud: (
    <SiGooglecloud key="wc-icon=gcloud" className="work-card-technology-icon" />
  ),
  react: <SiReact key="wc-icon=react" className="work-card-technology-icon" />,
  tauri: <SiTauri key="wc-icon=tauri" className="work-card-technology-icon" />,
  rust: <SiRust key="wc-icon=rust" className="work-card-technology-icon" />,
  node: (
    <SiNodedotjs key="wc-icon=node" className="work-card-technology-icon" />
  ),
};

export default function WorkCard({
  title,
  description,
  date,
  role,
  img,
  technologies,
  links,
}: WorkCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {(date || role) && (
          <CardDescription className="flex flex-col font-mono text-stone-500">
            {date && (
              <div className="flex flex-row items-center gap-1">
                <CalendarIcon className="size-4" />
                <span>{date}</span>
              </div>
            )}
            {role && (
              <div className="flex flex-row items-center gap-1">
                <BriefcaseBusinessIcon className="size-4" />
                <span>{role}</span>
              </div>
            )}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
        {img && (
          <Image
            className="size-1/2 rounded-lg object-contain"
            height={300}
            src={img}
            alt=""
          />
        )}
        <p className="font-mono text-sm lg:text-base">{description}</p>
      </CardContent>
      {technologies && (
        <CardFooter className="flex flex-col items-start">
          {links && (
            <div className="flex flex-col font-mono">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-1 text-amber-600 hover:underline"
                >
                  <span>Source code</span>
                  <ExternalLinkIcon className="size-5" />
                </a>
              )}
            </div>
          )}
          <h3>Technologies used</h3>
          <div className="flex flex-row items-center gap-2">
            {technologies.map((t) => icons[t])}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
