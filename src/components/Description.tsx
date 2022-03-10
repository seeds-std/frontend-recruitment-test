import React from "react";

//  chakra
import { Box, Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Description: React.VFC<Props> = ({ children }) => {
  return (
    <Box bgColor="gray.50" borderRadius={3} p={4}>
      {children}
    </Box>
  );
};

export default Description;
