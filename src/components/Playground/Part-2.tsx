import React, { useState } from "react";

//  chakra
import {
  HStack,
  Box,
  Input,
  Button,
  Flex,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

type itemProps = {
  id: null | number;
  last_name: string;
  first_name: string;
  age: number;
};

const Playground = () => {
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

  const initInputValues: itemProps = {
    id: null,
    last_name: "",
    first_name: "",
    age: 0,
  };

  const [inputValues, setInputValues] = useState<itemProps>(initInputValues);

  // 入力値の設定
  const onChangeInputValue = (label: string, value: string | number): void => {
    setInputValues((prev) => {
      return {
        ...prev,
        [label]: value,
      };
    });
  };

  // 追加
  const addItems = (): void => {
    // itemsに追加
    setItems((prev) => [...prev, inputValues]);
    // 入力内容をクリア
    setInputValues(initInputValues);
  };

  return (
    <Box>
      <HStack spacing={3} mb={4} alignItems="flex-end">
        <FormControl>
          <FormLabel htmlFor="last_name" color="GrayText" fontSize={14}>
            姓
          </FormLabel>
          <Input
            id="last_name"
            size="md"
            value={inputValues.last_name}
            onChange={(e) => onChangeInputValue("last_name", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="first_name" color="GrayText" fontSize={14}>
            名
          </FormLabel>
          <Input
            id="first_name"
            size="md"
            value={inputValues.first_name}
            onChange={(e) => onChangeInputValue("first_name", e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="age" color="GrayText" fontSize={14}>
            年齢
          </FormLabel>
          <Input
            id="age"
            size="md"
            type="number"
            value={inputValues.age}
            onChange={(e) => onChangeInputValue("age", e.target.value)}
          />
        </FormControl>

        <Button onClick={addItems} width="50%" colorScheme="teal">
          追加
        </Button>
      </HStack>

      <Box>
        {items.map((item, index) => (
          <Flex
            // key={item.id} TODO: idは一旦ナシの方向で
            key={index}
            bgColor="gray.50"
            borderRadius={4}
            p={3}
            mt={index ? 2 : 0}
            justifyContent="space-between"
          >
            <Box>{`${item.last_name} ${item.first_name}`}</Box>
            <Box>{`${item.age}歳`}</Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Playground;
