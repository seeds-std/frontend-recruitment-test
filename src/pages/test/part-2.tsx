import React, { useState } from "react";

// component
import Layout from "components/Layout";
import Description from "components/Description";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";
import ArrowForwardButton from "components/ArrowForwardButton";

//  chakra
import { HStack, Box, Input, Button } from "@chakra-ui/react";

const Contents = () => {
  type itemProps = {
    id: null | number;
    last_name: string;
    first_name: string;
    age: number;
  };

  const initItems: itemProps[] = [
    {
      id: 1,
      last_name: "山田",
      first_name: "太郎",
      age: 30,
    },
    {
      id: 2,
      last_name: "鈴木",
      first_name: "一郎",
      age: 31,
    },
    {
      id: 3,
      last_name: "田中",
      first_name: "次郎",
      age: 32,
    },
  ];
  const [items, setItems] = useState<itemProps[]>(initItems);

  const initInputItem: itemProps = {
    id: null,
    last_name: "",
    first_name: "",
    age: 0,
  };
  const [inputItem, setInputItem] = useState<itemProps>(initInputItem);

  // 入力値の設定
  const onChangeInputValue = (label: string, value: string | number): void => {
    setInputItem((prev) => {
      return {
        ...prev,
        [label]: value,
      };
    });
  };

  // 追加
  const addItems = (): void => {
    // itemsに追加
    setItems((prev) => [...prev, inputItem]);
    // 入力内容をクリア
    setInputItem(initInputItem);
  };

  return (
    <Box>
      <HStack spacing={3} mb={4}>
        <Input
          placeholder="姓"
          size="md"
          value={inputItem.last_name}
          onChange={(e) => onChangeInputValue("last_name", e.target.value)}
        />
        <Input
          placeholder="名"
          size="md"
          value={inputItem.first_name}
          onChange={(e) => onChangeInputValue("first_name", e.target.value)}
        />
        <Input
          placeholder="年齢"
          size="md"
          type="number"
          value={inputItem.age}
          onChange={(e) => onChangeInputValue("age", e.target.value)}
        />
        <Button onClick={addItems} width="50%">
          追加
        </Button>
      </HStack>

      <Box>
        {items.map((item, index) => (
          <Box
            // key={item.id} TODO: idは一旦ナシの方向で
            key={index}
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius={4}
            p={3}
            mt={index ? 2 : 0}
          >
            {`${item.last_name} ${item.first_name}【${item.age}歳】`}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const TestPart2 = () => {
  return (
    <Layout title="第二問">
      <Description>
        ・姓・名・年齢で構成された配列に対して、フォームとボタンを用いて、新たに「姓・名・年齢」を追加する処理を加えてください。
        <br />
        ・追加ボタンを押した後、フォームの値はクリアされるようにしてください。
      </Description>
      <Box mt={10} minHeight={300}>
        <Contents />
      </Box>
      <ButtonWrapper>
        <ArrowBackButton href="/test/part-1">戻る</ArrowBackButton>
        <ArrowForwardButton href="/test/part-3">次の問題へ</ArrowForwardButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default TestPart2;
