import React from "react";

//  chakra
import { Box, Input, Text } from "@chakra-ui/react";

const Playground = () => {
  // 入力イベント
  const onChangeMessege = (e) => {
    // TODO: 入力内容の登録処理を記述してください。
  };

  return (
    <>
      <Box mb={4} textAlign="center">
        <Text fontSize="sm" color="GrayText">
          入力メッセージ
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          【表示箇所】
        </Text>
      </Box>

      <Input
        placeholder="メッセージ入力"
        size="md"
        onChange={onChangeMessege}
      />
    </>
  );
};

export default Playground;
