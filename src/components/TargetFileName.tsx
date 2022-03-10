import React from "react";

//  chakra
import { Code, Heading } from "@chakra-ui/react";

type Props = {
  codeName: string;
};

const TargetFileName: React.VFC<Props> = ({ codeName }) => {
  return (
    <>
      <Heading size="xs" fontWeight="bold">
        # 作業ファイル
      </Heading>
      <Code colorScheme="gray">{codeName}</Code>
    </>
  );
};

export default TargetFileName;
