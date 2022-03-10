import React from "react";

//  chakra
import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  justifyContent?: string;
};

const ButtonWrapper: React.VFC<Props> = ({
  children,
  justifyContent = "space-between",
}) => {
  return (
    <Flex
      justifyContent={justifyContent}
      // borderTop="1px"
      // borderColor="gray.200"
    >
      {children}
    </Flex>
  );
};

export default ButtonWrapper;
