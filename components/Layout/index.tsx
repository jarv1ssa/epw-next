import Footer from "./Footer";
import Header from "./Header";
import { Container, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Flex minH="100vh" direction="column">
      <Header />

      <Container as="main" maxW="container.sm" flex={1} mt={20}>
        {children}
      </Container>

      <Footer />
    </Flex>
  );
};

export default Layout;
