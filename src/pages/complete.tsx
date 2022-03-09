import React from "react";

// component
import Layout from "components/Layout";
import ButtonWrapper from "components/ButtonWrapper";
import ArrowBackButton from "components/ArrowBackButton";

const Complete = () => {
  return (
    <Layout title="お疲れさまでした！">
      テストは以上です。お疲れさまでした。
      <ButtonWrapper justifyContent="center">
        <ArrowBackButton href="/test/part-2">トップに戻る</ArrowBackButton>
      </ButtonWrapper>
    </Layout>
  );
};

export default Complete;
