import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Url } from "url";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: Url | string;
};

const NavLink = ({ href, children }: PropsWithChildren<NavLinkProps>) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        variant={isActive ? "solid" : "ghost"}
        colorScheme={isActive ? "orange" : undefined}
        fontWeight="medium"
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default NavLink;
