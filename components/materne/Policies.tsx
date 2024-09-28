import React from "react";
import { useIntl } from "react-intl";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import TextReveal from "@/components/magicui/text-reveal";

const Policies = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      className={"relative items-center text-center gap-4 flex flex-col w-full"}
    >
      <TextReveal text={formatMessage({ id: "policies.title" })}>
        <div className={"flex flex-col gap-6 items-center max-w-xl"}>
          <p>{formatMessage({ id: "policies.subtitle" })}</p>

          <div className={"flex justify-center gap-8 max-w-lg"}>
            <Link href={"/materne/privacy"}>
              <Button className={"flex-1"} variant={"bordered"}>
                {formatMessage({ id: "policies.privacy.CTA" })}
              </Button>
            </Link>

            <Link href={"/materne/terms"}>
              <Button className={"flex-1"} variant={"bordered"}>
                {formatMessage({ id: "policies.terms.CTA" })}
              </Button>
            </Link>
          </div>
        </div>
      </TextReveal>
    </div>
  );
};

export default Policies;
