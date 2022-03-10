import React from "react";

// chakra
import { Container, Flex, Box, VStack, Heading, Text } from "@chakra-ui/react";

// next
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.VFC<Props> = ({ children, title }) => {
  return (
    <VStack minH="100vh" w="100%" spacing={0}>
      {/* header */}
      <Box
        as="header"
        py="3"
        px="4"
        borderBottom="2px"
        borderColor="gray.100"
        bgColor="white"
        w="100%"
        pos="sticky"
        top="0"
        left="0"
        zIndex="2000"
      >
        <Flex align="center">
          <Link href="/" passHref>
            <Heading size="md" cursor="pointer" fontWeight="extrabold">
              株式会社シーズ フロントエンドエンジニア 採用テスト
            </Heading>
          </Link>
        </Flex>
      </Box>

      {/* main */}
      <Box as="main" flexGrow={1} w="100%">
        <Container maxW="container.md" as="section" py={{ base: 7, sm: 12 }}>
          {title && (
            <Heading size="lg" as="h1" mb={4} isTruncated>
              {title}
            </Heading>
          )}
          {children}
        </Container>
      </Box>

      {/* footer */}
      <Box
        as="footer"
        bg="gray.100"
        h={10}
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize={14} color="grey">
          frontend-recruitment-test.
        </Text>
      </Box>
    </VStack>
  );
};

export default Layout;
