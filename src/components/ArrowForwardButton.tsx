import React from "react";

// chakra
import { Button } from "@chakra-ui/react";

// icon
import { ArrowForwardIcon } from "@chakra-ui/icons";

// next
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const ArrowForwardButton: React.VFC<Props> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <Button colorScheme="teal" size="lg" rightIcon={<ArrowForwardIcon />}>
        {children}
      </Button>
    </Link>
  );
};

export default ArrowForwardButton;
