import Logo from "../../Logo";
import Navbar from "../Navbar";
import NextLink from "next/link";
import Social from "../../Social";
import { Box, Container, HStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" pos="fixed" top={0} zIndex={100} w="full">
      <Container
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={{ base: 2, md: 4 }}
        backdropFilter="blur(10px)"
      >
        <NextLink href="/" passHref>
          <a>
            <HStack>
              <Logo />

              <Text
                display={{ base: "none", sm: "unset" }}
                fontSize="xl"
                fontWeight="bold"
              >
                Emin Aliyev
              </Text>
            </HStack>
          </a>
        </NextLink>

        <Navbar />

        <Social />
      </Container>
    </Box>
  );
};

export default Header;
