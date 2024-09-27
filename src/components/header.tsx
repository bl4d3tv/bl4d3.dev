"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { SendIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { email } from "~/lib/config";
import { cn } from "~/lib/utils";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={
          "fixed inset-x-0 top-0 z-[5000] flex w-full flex-row items-center justify-center space-x-2 py-6 font-mono text-sm backdrop-blur-lg md:space-x-4 md:text-base"
        }
      >
        <Link
          href="/"
          className={cn(
            "text-stone-400 transition-colors hover:text-foreground hover:underline",
            pathname === "/" ? "text-foreground" : "",
          )}
        >
          Home
        </Link>
        <Link
          href="/work"
          className={cn(
            "text-stone-400 transition-colors hover:text-foreground hover:underline",
            pathname === "/work" ? "text-foreground" : "",
          )}
        >
          Work
        </Link>
        <Link
          href="/work/minecraft"
          className={cn(
            "text-stone-400 transition-colors hover:text-foreground hover:underline",
            pathname === "/work/minecraft" ? "text-foreground" : "",
          )}
        >
          Minecraft Work
        </Link>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-1 text-amber-600 transition-colors hover:text-foreground hover:underline"
        >
          <SendIcon className="size-5" />
          Contact me
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
