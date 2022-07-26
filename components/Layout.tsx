import { Box } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

import SideNav from "./SideNav";

interface AuxProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AuxProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideNav />
      <Box
        p={7}
        as='main'
        pos='absolute'
        top={0}
        right={0}
        bottom={0}
        w='85vw'
        h='100vh'
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;