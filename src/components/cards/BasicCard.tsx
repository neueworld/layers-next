import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import React from "react";

interface CardProps extends BoxProps {
  variant: "dark" | "light";
  children: ReactNode;
}

function BasicCard({ children, variant, ...props }: CardProps) {
  return (
    <Box
      bg={variant === "dark" ? "dark.400" : "light.600"}
      p={4}
      rounded={10}
      {...props}
    >
      {children}
    </Box>
  );
}

export default BasicCard;
