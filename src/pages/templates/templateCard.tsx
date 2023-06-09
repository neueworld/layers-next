import { AddIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import BasicCard from "@/components/cards/BasicCard";
import { useRouter } from "next/router";

const Card = ({
  user,
  title,
  created,
  slug,
}: {
  user: string;
  title?: string;
  created?: string;
  slug?: string;
}) => {
  const router = useRouter();

  return (
    <BasicCard
      variant="dark"
      w="full"
      py="40px"
      px="30px"
      borderWidth="1px"
      borderColor="grey.300"
    >
      <Flex
        direction={{ base: "column", xl: "row" }}
        align={{ base: "flex-start", xl: "center" }}
        w="full"
        gap={{ base: "15px", xl: "initial" }}
        justify="space-between"
      >
        {title ? (
          <Text fontWeight="bold">{title}</Text>
        ) : (
          <Text fontWeight="bold">UI/UX Design & Client</Text>
        )}

        <HStack
          w={{ base: "full", xl: "initial" }}
          spacing={{ base: "40px", xl: "30px", "2xl": "150px" }}
        >
          <VStack align="flex-start" spacing="0px">
            <Text fontSize="12px" color="grey" fontWeight="medium">
              Type
            </Text>
            <Text fontSize="14px" fontWeight="bold" textTransform="capitalize">
              {user} templates
            </Text>
          </VStack>

          <VStack align="flex-start" spacing="0px">
            <Text fontSize="12px" color="grey" fontWeight="medium">
              Creator
            </Text>
            <Text fontSize="14px" fontWeight="bold">
              Vinnet Yadav
            </Text>
          </VStack>
        </HStack>

        <HStack
          w={{ base: "full", xl: "initial" }}
          spacing={{ base: "90px", xl: "30px", "2xl": "160px" }}
        >
          <VStack align="flex-start" spacing="0px">
            <Text fontSize="12px" color="grey" fontWeight="medium">
              Created
            </Text>
            <Text fontSize="14px" fontWeight="bold">
              {created}
            </Text>
          </VStack>

          <VStack align="flex-start" spacing="0px">
            <Text fontSize="12px" color="grey" fontWeight="medium">
              Shared with
            </Text>

            <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Vinnet Yadav" src="" />
              <Avatar name="Ajay Yadav" src="" />
              <Avatar name="Seye Alex" src="" />
            </AvatarGroup>
          </VStack>
        </HStack>

        <HStack
          w={{ base: "full", xl: "initial" }}
          spacing={{ base: "50px", xl: "20px", "2xl": "40px" }}
        >
          <Button
            rounded={30}
            px="15px"
            h="45px"
            bg="primary.400"
            w={{ base: "full", xl: "initial" }}
            onClick={() => router.push(`/contract/${slug}`)}
          >
            <HStack w="full" justify="center" spacing="5px">
              <Text>Use Template</Text>
              <ArrowUpIcon fontSize="19px" transform="rotate(45deg)" />
            </HStack>
          </Button>

          <Box>
            <Link href="/templates/settings">
              <Center
                borderRadius="3px"
                border="1px"
                color="white"
                w={{ base: "20px", xl: "17px" }}
                h={{ base: "20px", xl: "17px" }}
              >
                <Text pb="8px">...</Text>
                {/* <AddIcon fontSize={{ base: '12px', xl: '8px' }} /> */}
              </Center>
            </Link>
          </Box>
        </HStack>
      </Flex>
    </BasicCard>
  );
};

export default Card;
