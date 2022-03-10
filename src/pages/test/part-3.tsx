import React from "react";

// component
import Layout from "components/Layout";
import Description from "components/Description";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";
import ArrowForwardButton from "components/ArrowForwardButton";
import TargetFileName from "components/TargetFileName";
import Playground from "components/Playground/Part-3";

//  chakra
import { Box } from "@chakra-ui/react";

const TestPart3 = () => {
  return (
    <Layout title="第三問">
      <Description>
        ・擬似的な技術ブログの一覧があります。
        <br />
        ・この一覧のソースコードが冗長なので、ループ処理や条件分岐を使用してコンポーネント化してください。
        <br />
        ・あらかじめ用意しているデータがありますので、そちらをご使用ください。
        <Box mt={4}>
          <TargetFileName codeName="src/components/Playground/Part-3.tsx" />
        </Box>
      </Description>
      <Box my={12} minHeight={150}>
        <Playground />
      </Box>
      <ButtonWrapper>
        <ArrowBackButton href="/test/part-2">戻る</ArrowBackButton>
        <ArrowForwardButton href="/complete">終了する</ArrowForwardButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default TestPart3;
