import type { NextPage } from "next";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Lottie from "lottie-react";
import NextLink from "next/link";
import Page from "../components/Page";
import developer from "../assets/lotties/developer.json";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import { RiHeart3Line, RiMovie2Line, RiMusic2Line } from "react-icons/ri";
import { SiBeatsbydre, SiLichess } from "react-icons/si";

const Home: NextPage = () => {
  return (
    <Page id="Home" title="Home | EPW">
      <Layout>
        <Lottie animationData={developer} loop autoplay style={{ height: 240 }} />

        <Text p={4} borderRadius="lg" bgColor="gray.700" textAlign="center">
          Hi, I&apos;m a software developer based in Azerbaijan.
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          spacing={{ base: 6, md: 0 }}
          my={8}
        >
          <Box flex={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h2">Emin Aliyev</Heading>
            <Text>Software Developer</Text>
          </Box>

          <Logo boxSize={24} />
        </Stack>

        <Stack as="section" spacing={4} mb={8}>
          <Badge colorScheme="blue" w="max" px={2} py={1} fontSize="sm">
            SUMMARY
          </Badge>

          <Text textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            accusamus incidunt et quo alias ut omnis maxime magnam vero at quis
            ea autem optio quam, rem voluptate aperiam architecto cupiditate.
            Aut neque rem ad voluptatem repellendus pariatur libero
            exercitationem veritatis numquam assumenda vero vel corrupti iure
            provident, rerum eaque vitae aspernatur laboriosam nulla blanditiis!
            Nulla maiores consequuntur distinctio cum laudantium?
            Necessitatibus, ducimus earum dolorum, eveniet natus cum recusandae
            ratione dolor quos quaerat deserunt facere fuga impedit sit, vitae
            quibusdam. Earum recusandae ratione eaque deserunt. Aspernatur magni
            est dolor beatae deserunt?
          </Text>

          <NextLink href="/portfolio" passHref>
            <Button as="a" colorScheme="orange" alignSelf="center">
              See portfolio
            </Button>
          </NextLink>
        </Stack>

        <Stack as="section" spacing={4} mb={8}>
          <Badge colorScheme="orange" w="max" px={2} py={1} fontSize="sm">
            BIOGRAPHY
          </Badge>

          <Stack spacing={4}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 2 }}
            >
              <Tag w="max">2022 - present</Tag>
              <Text>Frontend Developer at Meetsoft LLC</Text>
            </Stack>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 2 }}
            >
              <Tag w="max">2019 - present</Tag>
              <Text>
                Bachelor&apos;s Degree of Information Technology at ADA
                University
              </Text>
            </Stack>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 2 }}
            >
              <Tag w="max">2021</Tag>
              <Text>Frontend Developer Intern at ATL Tech</Text>
            </Stack>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 1, sm: 2 }}
            >
              <Tag w="max">2002</Tag>
              <Text>Born in Azerbaijan</Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack as="section" spacing={4} mb={8}>
          <Badge colorScheme="red" w="max" px={2} py={1} fontSize="sm">
            LOVE
          </Badge>

          <Flex wrap="wrap" align="center" gap={2}>
            <Tag size="lg" colorScheme="purple">
              <TagLeftIcon as={RiMusic2Line} />
              <TagLabel>Music</TagLabel>
            </Tag>

            <Tag size="lg" colorScheme="yellow">
              <TagLeftIcon as={RiMovie2Line} />
              <TagLabel>Movies</TagLabel>
            </Tag>

            <Tag size="lg" colorScheme="green">
              <TagLeftIcon as={SiBeatsbydre} />
              <TagLabel>Beatbox</TagLabel>
            </Tag>

            <Tag size="lg">
              <TagLeftIcon as={SiLichess} />
              <TagLabel>Chess</TagLabel>
            </Tag>

            <Text as="span">and</Text>

            <Tag size="lg" colorScheme="red">
              <TagLeftIcon as={RiHeart3Line} />
              <TagLabel>Her</TagLabel>
            </Tag>
          </Flex>
        </Stack>
      </Layout>
    </Page>
  );
};

export default Home;
