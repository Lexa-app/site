"use client";
import { Link } from "@nextui-org/link";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center background gap-4 ">
      <Link href={"materne"}>
        <p>Materne</p>
      </Link>
    </section>
  );
};

export default Home;
