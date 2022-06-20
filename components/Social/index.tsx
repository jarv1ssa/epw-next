import { HStack, IconButton, Link } from "@chakra-ui/react";
import { RiGithubLine } from "react-icons/ri";

const Social = () => {
  return (
    <HStack>
      <IconButton
        as={Link}
        aria-label="Source code"
        variant="ghost"
        colorScheme="orange"
        icon={<RiGithubLine size={24} />}
        href="https://github.com/jarv1ssa/epw-next"
        target="_blank"
      />
    </HStack>
  );
};

export default Social;
