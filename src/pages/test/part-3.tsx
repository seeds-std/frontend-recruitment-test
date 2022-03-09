import React, { useEffect, useState } from "react";

// component
import Layout from "components/Layout";
import Description from "components/Description";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";
import ArrowForwardButton from "components/ArrowForwardButton";

//  chakra
import { Box, Button } from "@chakra-ui/react";

const TestPart3 = () => {
  const Contents = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //   setCount((prev) => prev + 1);
    // }, [count]);

    return <Box>テスト</Box>;
  };

  return (
    <Layout title="第三問">
      <Description>
        問題文この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        <br />
        問題文この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
        <br />
        問題文この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
      </Description>
      <Box mt={10} minHeight={300}>
        <Contents />
      </Box>
      <ButtonWrapper>
        <ArrowBackButton href="/test/part-2">戻る</ArrowBackButton>
        <ArrowForwardButton href="/complete">終了する</ArrowForwardButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default TestPart3;
