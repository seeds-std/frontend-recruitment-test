import React, { useState } from "react";

// component
import Layout from "components/Layout";
import Description from "components/Description";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowForwardButton from "components/ArrowForwardButton";

//  chakra
import { Box, Input, Text } from "@chakra-ui/react";

const Contents = () => {
  const [messege, setMessege] = useState<string>("");

  const onChangeMessege = (e) => {
    setMessege(e.target.value);
  };

  return (
    <>
      <Box mb={4} textAlign="center">
        <Text fontSize="sm">【入力メッセージ】</Text>
        <Text fontSize="lg" fontWeight="bold">
          {messege || "メッセージを入れてください！"}
        </Text>
      </Box>

      <Input placeholder="メッセージ" size="md" onChange={onChangeMessege} />
    </>
  );
};

const TestPart1 = () => {
  return (
    <Layout title="第一問">
      <Description>
        ・入力フォームの値を、【表示箇所】の部分に表示してください。
        <br />
        ・値が空の場合は、「メッセージを入れてください！」という文言を表示するようにしてください。
      </Description>

      <Box mt={10} minHeight={300}>
        <Contents />
      </Box>

      <ButtonWrapper justifyContent="center">
        <ArrowForwardButton href="/test/part-2">次の問題へ</ArrowForwardButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default TestPart1;
