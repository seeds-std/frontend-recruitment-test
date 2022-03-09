import React from "react";

// chakra
import { Button } from "@chakra-ui/react";

// icon
import { ArrowBackIcon } from "@chakra-ui/icons";

// next
import Link from "next/link";

const ArrowBackButton = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <Button colorScheme="gray" size="lg" leftIcon={<ArrowBackIcon />}>
        {children}
      </Button>
    </Link>
  );
};

export default ArrowBackButton;
