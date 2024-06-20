import { subtitle, title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme/dist/components/button";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>
          Lexa Apps
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Where ideas become apps
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow"
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>


      <div className="mt-8">
        <Link href={"/materne"}>
          <Card>
            <CardHeader>
              <h2 className={"text-2xl"}>Materne</h2>
            </CardHeader>
            <Divider />

            <CardBody>
              <p>Feed your baby right</p>
            </CardBody>

          </Card>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
