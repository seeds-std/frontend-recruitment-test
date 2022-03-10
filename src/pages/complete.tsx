import React from "react";

// component
import Layout from "components/Layout";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";

//  chakra
import { Box } from "@chakra-ui/react";

const Complete = () => {
  return (
    <Layout title="お疲れさまでした！">
      テストは以上です。お疲れさまでした。
      <Box mt={12}>
        <ButtonWrapper justifyContent="center">
          <ArrowBackButton href="/">トップに戻る</ArrowBackButton>
        </ButtonWrapper>
      </Box>
    </Layout>
  );
};

export default Complete;
