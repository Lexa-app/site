"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

import { cn } from "@/utils/cn";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  children?: ReactNode;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
  children,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  const childrenOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const childrenTranslateY = useTransform(scrollYProgress, [0.9, 1], [20, 0]);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "flex flex-col sticky top-0  mx-auto  bg-transparent max-w-4xl items-center px-[1rem] py-[5rem]"
        }
        id={"container"}
      >
        <p
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        <motion.div
          style={{
            opacity: childrenOpacity,
            translateY: childrenTranslateY,
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        className={"text-black dark:text-white"}
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
