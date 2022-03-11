import React from "react";

// chakra
import {
  Box,
  Button,
  UnorderedList,
  ListItem,
  Flex,
  Text,
} from "@chakra-ui/react";

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
        <Text>
          株式会社シーズのフロントエンド試験にご参加いただきありがとうございます。
          <br />
          本試験は以下の内容を問う事を想定した問題となっています。
        </Text>
        <UnorderedList my={4}>
          <ListItem>Reactの基礎</ListItem>
          <ListItem>配列操作/state管理</ListItem>
          <ListItem>コンポーネント設計</ListItem>
        </UnorderedList>
        <Text>
          テストを開始すると問題が表示されます。
          <br />
          作業ファイルを修正して指示された動作を実装してください。
        </Text>
        <Text mt={3}>
          準備ができましたら「テストを開始する」をクリックしてください。
        </Text>
      </Box>
      <Flex justifyContent="center" mt={12}>
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
