import { Container } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      maxW="container.md"
      py={4}
      textColor="gray.400"
      textAlign="center"
    >
      &#169; 2022 Emin Aliyev. All Rights Reserved.
    </Container>
  );
};

export default Footer;
