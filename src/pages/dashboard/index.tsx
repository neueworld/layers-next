import {
  VStack,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Flex,
  Box,
  Image,
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useUser } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";

import truncateAddress from "@/utils/truncateAddress";
import type { IContract } from "@/types/contract.types";
import snowIcon from "@/assets/svgs/snow.svg";
import BasicCard from "@/components/cards/BasicCard";
import Body from "@/components/common/Body";
import DashboardCard from "@/components/common/DashboardCard";
import SideNav from "@/components/navbar/sideNav";
import { useGetAllContractsByAddressQuery } from "@/redux/api/contracts/contractApi";
import NextImage from "next/image";
import { useRouter } from "next/router";

const Main = () => {
  const [skip, setSkip] = useState(true);
  const { isLoggedIn, user } = useUser();

  const address = user?.address as string;
  const router = useRouter();
  // if (!user) {
  //   router.push('/');
  // }

  const { data: contracts, isLoading: loadingData } =
    useGetAllContractsByAddressQuery({ address, status: "all" }, { skip });
  console.log(contracts);

  const { data: underReviewContracts } = useGetAllContractsByAddressQuery(
    { address, status: "under-review" },
    { skip }
  );
  console.log(underReviewContracts);

  const { data: signDeployContracts } = useGetAllContractsByAddressQuery(
    { address, status: "awaiting-sign-deploy" },
    { skip }
  );
  const { data: deployedContracts } = useGetAllContractsByAddressQuery(
    { address, status: "deployed" },
    { skip }
  );

  const { data: inProgressContracts } = useGetAllContractsByAddressQuery(
    { address, status: "progress" },
    { skip }
  );

  useEffect(() => {
    if (isLoggedIn) {
      setSkip(false);
    }
  }, [isLoggedIn]);

  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("light.500", "dark.900");
  const color = useColorModeValue("light.600", "grey.900");

  return (
    <Body>
      <Flex
        w="full"
        pb="50px"
        pt="20px"
        align="flex-start"
        // gap={{ base: "0px", xl: "25px" }}
      >
        <Box w={{ md: "20%" }} display={{ base: "none", xl: "initial" }}>
          <VStack align="flex-start" fontSize="15px" className="fixedNavPane">
            <SideNav />
          </VStack>
        </Box>

        <Tabs w={{ base: "100%", xl: "80%" }}>
          <Box
            w="100%"
            className="overflow"
            overflowY={{ base: "auto", md: "initial" }}
            pb={{ base: "0px", xl: "40px" }}
          >
            <TabList
              w={{ base: "max-content", xl: "76%" }}
              position={{ base: "static", xl: "fixed" }}
              top={{ base: "0px", xl: "70px" }}
              bg={bg}
              pt={{ base: "0px", xl: "20px" }}
              zIndex="1"
              borderColor={color}
            >
              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                All
              </Tab>

              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                In Progress
              </Tab>

              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                Under Review
              </Tab>

              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                Awaiting Signature/Deployment
              </Tab>

              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                Awaiting Funding
              </Tab>

              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                Void
              </Tab>

              <Tab
                fontSize="14px"
                _selected={{
                  color: { bg },
                  borderColor: "grey.100",
                }}
                minW="max-content"
                fontWeight="medium"
              >
                Cancelled
              </Tab>
            </TabList>
          </Box>

          {loadingData ? (
            <Center w="full" pb="50px" pt="20px">
              <Spinner />
            </Center>
          ) : (
            <TabPanels w="full">
              <TabPanel px="0" pt="20px">
                <Wrap w="full" spacing="30px">
                  <WrapItem w={{ base: "full", xl: "initial" }}>
                    <DashboardCard contractStatus="isNew" />
                  </WrapItem>

                  {contracts?.map((contract: IContract) => {
                    return (
                      <WrapItem
                        key={contract.slug}
                        w={{ base: "full", xl: "initial" }}
                      >
                        <DashboardCard
                          tag1={contract.category[0] as string}
                          tag2={contract.category[1] as string}
                          contractStatus={contract.status}
                          isAuthor={
                            user?.address === contract.author.walletAddress
                          }
                          author={contract.author}
                          guest={contract.guest}
                          address={truncateAddress(
                            contract.guest.walletAddress
                          )}
                          created={new Date(
                            contract?.createdAt as string
                          ).toDateString()}
                          title={contract.title}
                          slug={contract.slug}
                        />
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </TabPanel>

              <TabPanel px="0" pt="20px">
                <Wrap w="full" spacing="30px">
                  {inProgressContracts?.map((contract: IContract) => {
                    return (
                      <WrapItem
                        key={contract.slug}
                        w={{ base: "full", xl: "initial" }}
                      >
                        <DashboardCard
                          tag1={contract.category[0] as string}
                          tag2={contract.category[1] as string}
                          isAuthor={
                            user?.address === contract.author.walletAddress
                          }
                          author={contract.author}
                          guest={contract.guest}
                          contractStatus={contract.status}
                          address={truncateAddress(
                            contract.guest.walletAddress
                          )}
                          created={new Date(
                            contract?.createdAt as string
                          ).toDateString()}
                          title={contract.title}
                          slug={contract.slug}
                        />
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </TabPanel>

              <TabPanel px="0" pt="20px">
                <Wrap w="full" spacing="30px">
                  {underReviewContracts?.map((contract: IContract) => {
                    return (
                      <WrapItem
                        key={contract.slug}
                        w={{ base: "full", xl: "initial" }}
                      >
                        <DashboardCard
                          tag1={contract.category[0] as string}
                          tag2={contract.category[1] as string}
                          contractStatus={contract.status}
                          isAuthor={
                            user?.address === contract.author.walletAddress
                          }
                          author={contract.author}
                          guest={contract.guest}
                          address={truncateAddress(
                            contract.guest.walletAddress
                          )}
                          created={new Date(
                            contract?.createdAt as string
                          ).toDateString()}
                          title={contract.title}
                          slug={contract.slug}
                        />
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </TabPanel>

              <TabPanel px="0" pt="20px">
                <Wrap spacing="30px" w="full">
                  {signDeployContracts?.map((contract: IContract) => {
                    return (
                      <WrapItem
                        key={contract.slug}
                        w={{ base: "full", xl: "initial" }}
                      >
                        <DashboardCard
                          tag1={contract.category[0] as string}
                          tag2={contract.category[1] as string}
                          isAuthor={
                            user?.address === contract.author.walletAddress
                          }
                          author={contract.author}
                          guest={contract.guest}
                          contractStatus={contract.status}
                          address={truncateAddress(
                            contract.guest.walletAddress
                          )}
                          created={new Date(
                            contract?.createdAt as string
                          ).toDateString()}
                          title={contract.title}
                        />
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </TabPanel>

              <TabPanel px="0" pt="20px">
                <Wrap spacing="30px" w="full">
                  {deployedContracts?.map((contract: IContract) => {
                    return (
                      <WrapItem
                        key={contract.slug}
                        w={{ base: "full", xl: "initial" }}
                      >
                        <DashboardCard
                          tag1={contract.category[0] as string}
                          tag2={contract.category[1] as string}
                          isAuthor={
                            user?.address === contract.author.walletAddress
                          }
                          author={contract.author}
                          guest={contract.guest}
                          contractStatus={contract.status}
                          address={truncateAddress(
                            contract.guest.walletAddress
                          )}
                          created={new Date(
                            contract?.createdAt as string
                          ).toDateString()}
                          title={contract.title}
                          slug={contract.slug}
                        />
                      </WrapItem>
                    );
                  })}
                </Wrap>
              </TabPanel>

              <TabPanel px="0" pt="20px">
                <Wrap spacing="30px" w="full">
                  {/* <WrapItem w={{ base: "full", xl: "initial" }}>
                    <DashboardCard
                      tag1="web design"
                      tag2="webflow development"
                      contractStatus="voided"
                      address="Marie Ratke (0x76....87cd)"
                      created="Jan 02 2022"
                      title="NEUE WORLD x Stitchain - UI / UX"
                    />
                  </WrapItem> */}
                </Wrap>
              </TabPanel>

              <TabPanel px="0" pt="20px">
                <Wrap spacing="30px" w="full">
                  {/* <WrapItem w={{ base: "full", xl: "initial" }}>
                    <DashboardCard
                      tag1="web design"
                      tag2="webflow development"
                      contractStatus="voided"
                      address="Marie Ratke (0x76....87cd)"
                      created="Jan 02 2022"
                      title="NEUE WORLD x Stitchain - UI / UX"
                    />
                  </WrapItem> */}
                </Wrap>
              </TabPanel>
            </TabPanels>
          )}
        </Tabs>
      </Flex>
    </Body>
  );
};

export default Main;
