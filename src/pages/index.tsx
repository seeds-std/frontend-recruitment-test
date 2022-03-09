import React from "react";

// chakra
import { Box, Button, UnorderedList, ListItem, Flex } from "@chakra-ui/react";

// component
import Layout from "components/Layout";

// icon
import { ArrowForwardIcon } from "@chakra-ui/icons";

// next
import Link from "next/link";

const Home = () => {
  return (
    <Layout title="はじめに">
      <Box>
        <UnorderedList>
          <ListItem>
            注意事項テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </ListItem>
          <ListItem>
            注意事項テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </ListItem>
          <ListItem>
            注意事項テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </ListItem>
          <ListItem>
            注意事項テキストが入ります。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
          </ListItem>
        </UnorderedList>
      </Box>
      <Flex justifyContent="center" mt={10}>
        <Link href="/test/part-1" passHref>
          <Button colorScheme="teal" size="lg" rightIcon={<ArrowForwardIcon />}>
            テストを開始する
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default Home;
