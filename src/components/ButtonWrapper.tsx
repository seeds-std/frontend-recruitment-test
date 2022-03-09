import React from "react";

//  chakra
import { Flex } from "@chakra-ui/react";

const ButtonWrapper = ({ children, justifyContent = "space-between" }) => {
  return (
    <Flex
      justifyContent={justifyContent}
      pt={4}
      // borderTop="1px"
      // borderColor="gray.200"
    >
      {children}
    </Flex>
  );
};

export default ButtonWrapper;
