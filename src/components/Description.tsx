import React from "react";

//  chakra
import { Box, Text } from "@chakra-ui/react";

const Description = ({ children }) => {
  return (
    <Box bgColor="gray.50" borderRadius={3} p={4}>
      <Text>{children}</Text>
    </Box>
  );
};

export default Description;
