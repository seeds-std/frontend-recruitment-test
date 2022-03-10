import React, { useState } from "react";

//  chakra
import { Box, Input, Text } from "@chakra-ui/react";

const Playground = () => {
  const [messege, setMessege] = useState<string>("");

  const onChangeMessege = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessege(e.target.value);
  };

  return (
    <>
      <Box mb={4} textAlign="center">
        <Text fontSize="sm" color="GrayText">
          入力メッセージ
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          {messege || "メッセージを入れてください！"}
        </Text>
      </Box>

      <Input placeholder="メッセージ" size="md" onChange={onChangeMessege} />
    </>
  );
};

export default Playground;
