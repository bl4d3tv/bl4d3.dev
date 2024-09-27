import { Metadata } from "next";
import launcherImg from "~/assets/work/launcher.png";
import qsmpImg from "~/assets/work/qsmp.jpg";
import qsmpPurgatoryImg from "~/assets/work/qsmp_purgatory.jpg";
import qsmpPurgatory2Img from "~/assets/work/qsmp_purgatory_2.webp";
import WorkCard from "~/components/work-card";

export const metadata: Metadata = {
  title: "Minecraft Work",
  description: "Check out my Minecraft related work.",
};

export default function Minecraft() {
  return (
    <div className="mx-auto mt-10 grid min-h-screen max-w-screen-xl grid-rows-1 items-center justify-items-center p-8 sm:p-20">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <WorkCard
          title="QSMP"
          description="The QSMP was the first multilingual Minecraft multiplayer server made by Quackity. It was a survival multiplayer server with mods where content creators from all over the world were invited and could play together while having real time translations. The server also featured various events that happened regularly, including mini-games, new members joining, and story-focused events."
          role="Developer"
          date="MAY 2023 - JUN 2024"
          img={qsmpImg}
          technologies={["forge", "gcloud", "java"]}
        />
        <WorkCard
          title="Quackity Studios Launcher"
          description="The Quackity Studios Launcher was a custom-made Minecraft launcher made primarily for the QSMP, but later used for Purgatory and Purgatory 2 as well. It was a desktop application leveraging both web technologies (React, TypeScript, Vite) and Rust, thanks to the Tauri framework. The frontend featured a minimalistic and simple design, while the backend was responsible for downloading and launching the Minecraft client with the necessary mods and configurations."
          date="JUL 2023"
          img={launcherImg}
          technologies={["tauri", "rust", "react", "ts", "node"]}
        />
        <WorkCard
          title="QSMP Purgatory"
          description="The QSMP Purgatory was a competitive Minecraft event where the QSMP participants were divided into three teams and had to compete in various challenges, like 'egg wars' and 'capture the flag', and survive through several random events, that lasted around two weeks. The event was streamed live on Twitch, and it was a huge success, with thousands of viewers watching the event live every day."
          role="Developer"
          date="NOV 2023"
          img={qsmpPurgatoryImg}
          technologies={["forge", "gcloud", "java"]}
        />
        <WorkCard
          title="QSMP Purgatory 2"
          description="The QSMP Purgatory 2 was the second edition of the competitive Minecraft event that followed the success of the first edition, continuing the storyline established in the last one. This time, several new creators that haven't participated in the first edition were invited, and the event lasted three days. For this time, several new challenges were introduced, and the event was once again streamed live on Twitch to a concurrent audience of more than 100K viewers."
          role="Developer"
          date="DEC 2023"
          img={qsmpPurgatory2Img}
          technologies={["forge", "gcloud", "java"]}
        />
      </div>
    </div>
  );
}
