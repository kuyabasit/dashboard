import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/assets");
  }, [router]);

  return <></>;
};
export default Home;
