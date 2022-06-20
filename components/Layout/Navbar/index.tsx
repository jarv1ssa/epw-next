import NavLink from "../../NavLink";
import { HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack as="nav" display={{ base: "none", md: "flex" }}>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </HStack>
  );
};

export default Navbar;
