import { Center, Link, Heading, Text, Divider, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Center h="calc(100vh - 131px)">
      <VStack>
        <Heading textShadow="2px 2px #0987A0">
          Minimal Web3 Starter Kit!
        </Heading>
        <Divider />
        <Text>
          With <Link href="https://nextjs.org/">Next.js</Link>,{" "}
          <Link href="https://www.typescriptlang.org/">Typescript</Link>,{" "}
          <Link href="https://thirdweb.com/">ThirdWeb</Link> and{" "}
          <Link href="https://thirdweb.com/">Chakra-ui</Link>
        </Text>
        <Divider />
      </VStack>
    </Center>
  );
};

export default Home;
