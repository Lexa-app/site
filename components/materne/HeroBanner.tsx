"use client";

import { useIntl } from "react-intl";
import { useTheme } from "next-themes";
import Image from "next/image";

import HeroSVG from "./Hero.svg";

import Spotlight from "@/components/aceternity/Spotlight";
import ShimmerButton from "@/components/magicui/shimmer-button";

const HeroBanner = () => {
  const { formatMessage } = useIntl();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center text-center gap-4 h-[87vh] max-w-xl">
      <Spotlight />
      <div className="flex flex-col gap-3 mt-8 mb-8 -mt-32">
        <h1 className="text-5xl leading-12 font-bold">
          {formatMessage({ id: "hero.title" })}
        </h1>
        <h2 className={"text-secondaryLabel"}>
          {formatMessage({ id: "hero.subtitle" })}
        </h2>
      </div>
      <Image
        priority
        alt={"Hero"}
        className="hidden md:block"
        height={150}
        src={HeroSVG}
        width={400}
      />

      <ShimmerButton className={"md:hidden"} color={"primary"}>
        <p className={"text-white text-sm"}>
          {formatMessage({ id: "hero.CTA" })}
        </p>
      </ShimmerButton>
      {/*<div className={"h-48"}>*/}
      {/*  <HeroSVG widht={50} />*/}
      {/*</div>*/}
    </div>
  );
};

export default HeroBanner;
