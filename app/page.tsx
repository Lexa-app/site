"use client";
import { Link } from "@nextui-org/link";
import { useIntl } from "react-intl";

const Home = () => {
  const { formatMessage } = useIntl();

  console.log(
    'AXEL formatMessage({id: "home.title"}): ',
    formatMessage({ id: "hero.title" }),
  );

  return (
    <section className="flex flex-col items-center justify-center background gap-4 ">
      <Link href={"materne"}>
        <p>Materne</p>
      </Link>
    </section>
  );
};

export default Home;
