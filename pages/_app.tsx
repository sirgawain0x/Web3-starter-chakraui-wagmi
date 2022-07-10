import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mainnet;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
