import { Box, Button, HStack, Heading, Text, Link } from "@chakra-ui/react";
import React from "react";
import { useAddress, useConnect } from "@thirdweb-dev/react";

const Layout = function ({ children }: { children: React.ReactNode }) {
  const address = useAddress();
  const [
    {
      data: { connectors },
    },
    connect,
  ] = useConnect();

  return (
    <Box>
      <HStack
        paddingX="8"
        paddingY="4"
        backgroundColor={"cyan.700"}
        display="flex"
        justifyContent="space-between"
      >
        <Heading color={"white"}>LOGO</Heading>
        {address ? (
          <Text
            borderRadius={"2xl"}
            bgColor={"cyan.900"}
            px={"3"}
            color={"white"}
          >
            {address.slice(0, -36)}...{address.substring(38)}
          </Text>
        ) : (
          <Button
            variant="solid"
            onClick={() => {
              connect(connectors[0]);
            }}
          >
            Connect Metamask
          </Button>
        )}
      </HStack>
      {children}
      <HStack
        paddingX="8"
        paddingY="4"
        backgroundColor={"cyan.700"}
        display="flex"
        justifyContent="center"
      >
        <Text color={"white"}>
          Build with 💜 by{" "}
          <Link href="https://github.com/0xRajkumar">Rajkumar</Link>{" "}
        </Text>
      </HStack>
    </Box>
  );
};

export default Layout;
