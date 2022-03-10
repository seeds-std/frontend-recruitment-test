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

type Props = {
  item: {
    id: string;
    title: string;
    publishedAt: string;
    tags: { id: string; name: string }[];
    starCount: number;
    isRecommend: boolean;
  };
};

const Card: React.VFC<Props> = ({ item }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" width="100%">
      <Box p={4}>
        <Flex justifyContent="space-between">
          <Heading as="h2" size="md" display="flex" alignItems="center">
            {item.isRecommend && (
              <Badge colorScheme="blue" mr={2}>
                おすすめ
              </Badge>
            )}
            {item.title}
          </Heading>

          {item.starCount > 0 && (
            <Tag size="sm" variant="outline" colorScheme="yellow">
              <TagLeftIcon as={StarIcon} />
              <TagLabel>{item.starCount}</TagLabel>
            </Tag>
          )}
        </Flex>

        <Text fontSize="xs" color="GrayText" mt={1}>
          {`${item.publishedAt} に公開`}
        </Text>

        {item.tags.length > 0 && (
          <Wrap mt={4}>
            {item?.tags.map((tag) => (
              <WrapItem key={tag.id}>
                <Tag size="sm">#{tag.name}</Tag>
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>
    </Box>
  );
};

const Playground = () => {
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
    },
  ];

  return (
    <VStack>
      {items.map((item) => {
        console.log(item);
        return <Card item={item} key={item.id} />;
      })}
    </VStack>
  );
};

export default Playground;
