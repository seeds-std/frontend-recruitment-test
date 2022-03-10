import React from "react";

// component
import Layout from "components/Layout";
import Description from "components/Description";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";
import ArrowForwardButton from "components/ArrowForwardButton";
import TargetFileName from "components/TargetFileName";
import Playground from "components/Playground/Part-1";

//  chakra
import { Box } from "@chakra-ui/react";

const TestPart1 = () => {
  return (
    <Layout title="第一問">
      <Description>
        ・入力フォームの値を、【表示箇所】の部分に表示してください。
        <br />
        ・値が空の場合は、「メッセージを入れてください！」という文言を表示するようにしてください。
        <Box mt={4}>
          <TargetFileName codeName="src/components/Playground/Part-1.tsx" />
        </Box>
      </Description>

      <Box my={12} minHeight={150}>
        <Playground />
      </Box>

      <ButtonWrapper>
        <ArrowBackButton href="/">戻る</ArrowBackButton>
        <ArrowForwardButton href="/test/part-2">次の問題へ</ArrowForwardButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default TestPart1;
