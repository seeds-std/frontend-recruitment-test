import React from "react";

// component
import Layout from "components/Layout";
import Description from "components/Description";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";
import ArrowForwardButton from "components/ArrowForwardButton";
import TargetFileName from "components/TargetFileName";
import Playground from "components/Playground/Part-2";

//  chakra
import { Box } from "@chakra-ui/react";

const TestPart2 = () => {
  return (
    <Layout title="第二問">
      <Description>
        ・姓・名・年齢で構成されたデータに対して、フォームとボタンを用いて、新たに「姓・名・年齢」を追加する処理を加えてください。
        <br />
        ・追加ボタンを押した後、フォームの値はクリアされるようにしてください。
        <Box mt={4}>
          <TargetFileName codeName="src/components/Playground/Part-2.tsx" />
        </Box>
      </Description>
      <Box my={12} minHeight={300}>
        <Playground />
      </Box>
      <ButtonWrapper>
        <ArrowBackButton href="/test/part-1">戻る</ArrowBackButton>
        <ArrowForwardButton href="/test/part-3">次の問題へ</ArrowForwardButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default TestPart2;
