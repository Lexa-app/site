"use client";

import React from "react";
import { useIntl } from "react-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";

import Spotlight from "@/components/aceternity/Spotlight";
import ShimmerButton from "@/components/magicui/shimmer-button";
import DasboardEnDarkSVG from "@/public/svg/dashboard_en_dark.svg";
import DasboardEnLightSVG from "@/public/svg/dashboard_en_light.svg";

const HeroBanner = () => {
  const { formatMessage } = useIntl();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  console.log("AXEL isDark: ", isDark);

  const spotlightColor = React.useMemo(() => {
    switch (resolvedTheme) {
      case "dark":
        return "white";
      case "light":
        return "rgb(0, 122, 255)";
      default:
        return "white";
    }
  }, [resolvedTheme]);

  return (
    <div className={"flex flex-col relative items-center"}>
      <div className={"flex flex-col  text-center h-screen max-w-xl"}>
        <div className="flex flex-2 pt-8 flex-col gap-3">
          <Spotlight key={isDark ? "dark" : "light"} fill={spotlightColor} />
          <h1 className="text-5xl leading-12 font-bold">
            {formatMessage({ id: "hero.title" })}
          </h1>
          <h2 className={"text-secondaryLabel"}>
            {formatMessage({ id: "hero.subtitle" })}
          </h2>
        </div>

        <div className={"flex flex-1 relative h-full w-full md:block "}>
          <motion.div
            layout
            animate={{ opacity: isDark ? 1 : 0 }}
            className={" absolute inset-0 flex items-center justify-center"}
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.3 },
            }}
          >
            <Image
              priority
              alt={"Hero"}
              height={150}
              src={DasboardEnDarkSVG}
              width={400}
            />
          </motion.div>

          <motion.div
            layout
            animate={{ opacity: !isDark ? 1 : 0 }}
            className={"absolute inset-0 flex items-center justify-center"}
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.3 },
            }}
          >
            <Image
              priority
              alt={"Hero"}
              height={150}
              src={DasboardEnLightSVG}
              width={400}
            />
          </motion.div>
        </div>

        <ShimmerButton className={"md:hidden"} color={"primary"}>
          <p className={"text-white text-sm"}>
            {formatMessage({ id: "hero.CTA" })}
          </p>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default HeroBanner;
