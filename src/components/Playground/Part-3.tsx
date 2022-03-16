import React from "react";

// chakra
import {
  Box,
  Heading,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  Wrap,
  WrapItem,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";

// icon
import { StarIcon } from "@chakra-ui/icons";

const Playground = () => {
  // TODO: このデータを使用してコンポーネント化してください
  const items = [
    {
      id: "1",
      title: "楽しく学ぶJavaScript！",
      publishedAt: "2022-04-10",
      tags: [{ id: "1", name: "JavaScript" }],
      starCount: 30,
      isRecommend: true,
    },
    {
      id: "2",
      title: "おすすめの技術書籍 ３選！",
      publishedAt: "2022-04-01",
      tags: [],
      starCount: 0,
      isRecommend: true,
    },
    {
      id: "3",
      title: "Nextjs使って、便利アプリを作ってみた。",
      publishedAt: "2022-03-30",
      tags: [
        { id: "2", name: "TypeScript" },
        { id: "3", name: "Next.js" },
        { id: "4", name: "React" },
      ],
      starCount: 1,
      isRecommend: false,
    },
    {
      id: "4",
      title: "フロントエンジニアの５つの心得",
      publishedAt: "2022-03-09",
      tags: [{ id: "5", name: "フロントエンド" }],
      starCount: 18,
      isRecommend: false,
    },
  ];

  return (
    <VStack>
      <Box borderWidth="1px" borderRadius="md" width="100%">
        <Box p={4}>
          <Flex justifyContent="space-between">
            <Heading as="h2" size="md" display="flex" alignItems="center">
              <Badge colorScheme="blue" mr={2}>
                おすすめ
              </Badge>
              楽しく学ぶJavaScript！
            </Heading>

            <Tag size="sm" variant="outline" colorScheme="yellow">
              <TagLeftIcon as={StarIcon} />
              <TagLabel>30</TagLabel>
            </Tag>
          </Flex>

          <Text fontSize="xs" color="GrayText" mt={1}>
            2022-04-10 に公開
          </Text>

          <Wrap mt={4}>
            <WrapItem>
              <Tag size="sm"># JavaScript</Tag>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>

      <Box borderWidth="1px" borderRadius="md" width="100%">
        <Box p={4}>
          <Flex justifyContent="space-between">
            <Heading as="h2" size="md" display="flex" alignItems="center">
              <Badge colorScheme="blue" mr={2}>
                おすすめ
              </Badge>
              おすすめの技術書籍 ３選！
            </Heading>
          </Flex>

          <Text fontSize="xs" color="GrayText" mt={1}>
            2022-04-01 に公開
          </Text>
        </Box>
      </Box>

      <Box borderWidth="1px" borderRadius="md" width="100%">
        <Box p={4}>
          <Flex justifyContent="space-between">
            <Heading as="h2" size="md" display="flex" alignItems="center">
              Nextjs使って、便利アプリを作ってみた。
            </Heading>

            <Tag size="sm" variant="outline" colorScheme="yellow">
              <TagLeftIcon as={StarIcon} />
              <TagLabel>1</TagLabel>
            </Tag>
          </Flex>

          <Text fontSize="xs" color="GrayText" mt={1}>
            2022-03-30 に公開
          </Text>

          <Wrap mt={4}>
            <WrapItem>
              <Tag size="sm"># TypeScript</Tag>
            </WrapItem>
            <WrapItem>
              <Tag size="sm"># Next.js</Tag>
            </WrapItem>
            <WrapItem>
              <Tag size="sm"># React</Tag>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>

      <Box borderWidth="1px" borderRadius="md" width="100%">
        <Box p={4}>
          <Flex justifyContent="space-between">
            <Heading as="h2" size="md" display="flex" alignItems="center">
              フロントエンジニアの５つの心得
            </Heading>

            <Tag size="sm" variant="outline" colorScheme="yellow">
              <TagLeftIcon as={StarIcon} />
              <TagLabel>18</TagLabel>
            </Tag>
          </Flex>

          <Text fontSize="xs" color="GrayText" mt={1}>
            2022-03-09 に公開
          </Text>

          <Wrap mt={4}>
            <WrapItem>
              <Tag size="sm"># フロントエンド</Tag>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </VStack>
  );
};

export default Playground;
