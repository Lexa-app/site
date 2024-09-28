import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";

import Particles from "@/components/magicui/particles";
import ChildEnDarkSVG from "@/public/svg/child_en_dark.svg";
import ChildEnLightSVG from "@/public/svg/child_en_light.svg";
import InputDarkSVG from "@/public/svg/input_dark.svg";
import InputLightSVG from "@/public/svg/input_light.svg";
import TrackDarkSVG from "@/public/svg/tracking_en_dark.svg";
import TrackLightSVG from "@/public/svg/tracking_en_light.svg";

type Feature = {
  darkImage: StaticImageData;
  lightImage: StaticImageData;
  title: string;
  subTitle: string;
  isReversed?: boolean;
};

type ImageConfig = Omit<StaticImageData, "src">;

const imageConfig: ImageConfig = {
  height: 150,
  width: 400,
};

const features: Feature[] = [
  {
    darkImage: { ...imageConfig, src: ChildEnDarkSVG },
    lightImage: { ...imageConfig, src: ChildEnLightSVG },
    subTitle: "features.share.subtitle",
    title: "features.share.title",
  },

  {
    darkImage: { ...imageConfig, src: InputDarkSVG },
    lightImage: { ...imageConfig, src: InputLightSVG },
    subTitle: "features.input.subtitle",
    title: "features.input.title",
  },
  {
    darkImage: { ...imageConfig, src: TrackDarkSVG },
    lightImage: { ...imageConfig, src: TrackLightSVG },
    subTitle: "features.track.subtitle",
    title: "features.track.title",
  },
];

const Features = () => {
  const { theme } = useTheme();

  const { formatMessage } = useIntl();

  const particuleColor = React.useMemo(() => {
    if (theme === "dark") {
      return "#ffffff";
    }

    return "#000000";
  }, [theme]);

  return (
    <div className={"flex flex-col relative gap-32"}>
      {features.map((feature) => (
        <section
          key={feature.title}
          className="flex items-center justify-center"
        >
          <Feature
            darkImage={feature.darkImage}
            isReversed={feature.isReversed}
            lightImage={feature.lightImage}
            subTitle={formatMessage({ id: feature.subTitle })}
            title={formatMessage({ id: feature.title })}
          />
        </section>
      ))}

      <Particles
        refresh
        className="absolute inset-0 z-0"
        color={particuleColor}
        ease={80}
        quantity={100}
      />
    </div>
  );
};

const Feature = ({
  darkImage,
  lightImage,
  title,
  subTitle,
  isReversed,
}: Feature) => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className={`flex z-10 ${isReversed ? "flex-row-reverse" : ""}`}>
      <div className={"flex relative hidden md:block "}>
        <motion.div
          layout
          animate={{ opacity: isDark ? 1 : 0 }}
          className={" absolute"}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
        >
          <div className={"bg-secondarySystemBackground p-4 rounded-3xl"}>
            <Image alt={"Child"} {...darkImage} />
          </div>
        </motion.div>

        <motion.div
          layout
          animate={{ opacity: !isDark ? 1 : 0 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
        >
          <div className={"bg-secondarySystemBackground p-4 rounded-3xl"}>
            <Image alt={"Child"} {...lightImage} />
          </div>
        </motion.div>
      </div>

      <div
        className={`flex-1 relative flex flex-col p-12 gap-4 ${isReversed ? "items-end text-end" : "items-start"} max-w-lg`}
      >
        <h2 className={"text-3xl font-bold"}>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default Features;
