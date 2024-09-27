import { Metadata } from "next";
import WorkCard from "~/components/work-card";

export const metadata: Metadata = {
  title: "Work",
  description: "Check out my work.",
};

export default function Work() {
  return (
    <div className="mx-auto mt-10 grid min-h-screen max-w-screen-xl grid-rows-1 items-start p-8 sm:p-20">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <WorkCard
          title="DiscoRS"
          description="DiscoRS is a Discord music bot that I made for a personal server. It's a simple bot featuring slash commands to play music from either YouTube or Spotify. It was written in Rust using the Serenity library."
          technologies={["rust"]}
          links={{ github: "https://github.com/bl4d3tv/DiscoRS" }}
        />
      </div>
    </div>
  );
}
