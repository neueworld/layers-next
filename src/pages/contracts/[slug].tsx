import { ArrowUpIcon, EditIcon, LockIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Icon,
  useToast,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useBalance, useSDK, useUser, Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import type { FormikErrors, FormikTouched } from "formik";
import { Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { object, array, number, string, date } from "yup";

import PageLoader from "@/components/common/PageLoader";
import checkIcon from "@/assets/svgs/checkIcon2.svg";
import dateIcon from "@/assets/svgs/dateIcon.svg";
import fee from "@/assets/svgs/fee.svg";
import snowIcon from "@/assets/svgs/snow.svg";
import writeIcon from "@/assets/svgs/writeIcon.svg";
import BasicCard from "@/components/cards/BasicCard";
import Body from "@/components/common/Body";
import Card from "@/components/contract/Card";
import Payments from "@/components/contract/Payments";
import Scope from "@/components/contract/Scope";
import StepBox from "@/components/contract/StepBox";
import {
  // useDeleteContractMutation,
  useUpdateDeployedContractMutation,
  useGetContractQuery,
  useSignContractMutation,
  useUploadContractMutation,
  useUpdateContractMutation,
  contractApi,
} from "@/redux/api/contracts/contractApi";
// import EscrowAbi from '@/utils/EscrowAbi';
import FactoryAbi from "@/utils/FactoryAbi";
import SignatureAbi from "@/utils/SignatureAbi";

import type { ICategory, IWorks } from "@/types/contract.types";
import { StatusType } from "@/types/contract.types";
import { useRouter } from "next/router";
import { FormikBag } from "formik";
import { FormikProps } from "formik";
import { FormikValues } from "formik";
import NextImage from "next/image";
import deepEqual from "deep-equal";
import { useDispatch } from "react-redux";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";

const ViewContract = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const { user, isLoggedIn } = useUser();
  const toast = useToast();

  const {
    data: contract,
    isFetching,
    refetch,
  } = useGetContractQuery(slug as string, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  // const dispatch = useDispatch();

  // function handleRefetchTwo() {
  //   // has the same effect as `refetch` for the associated query
  //   dispatch(
  //     contractApi.endpoints.getContract.initiate(
  //       { count: 5 },
  //       { subscribe: false, forceRefetch: true }
  //     )
  //   );
  // }

  const [
    updateContract,
    { isSuccess: isUpdateSuccess, isLoading: isUpdating },
  ] = useUpdateContractMutation();

  useEffect(() => {
    if (isUpdateSuccess) {
      // refetch();
      // router.push('/my-contracts');
      toast({
        title: "Contract Updated Successfully",
        description: "Contract has Been Updated!",
        status: "success",
        isClosable: true,
        position: "top",
      });
    }
  }, [isUpdateSuccess, router, toast, refetch]);

  // const [
  //   deleteContract,
  //   { isLoading: isDeleting, isSuccess: isDeleteSuccess }
  // ] = useDeleteContractMutation();

  // console.log(contract);

  // const InitialValues = {
  //   title: contract && contract.title,
  //   works: contract && contract.works,
  //   author: contract && contract.author,
  //   guest: contract && contract.guest,
  //   payment: {
  //     ...contract.payment,
  //     type: contract && contract.payment?.type,
  //     startDate:
  //       contract &&
  //       contract.payment &&
  //       new Date(contract?.payment?.startDate as string)
  //         .toISOString()
  //         .slice(0, 10),
  //     endDate:
  //       contract &&
  //       contract?.payment &&
  //       new Date(contract?.payment?.endDate as string)
  //         .toISOString()
  //         .slice(0, 10),
  //   },
  //   status: contract && contract?.status,
  //   intellectualProperty:
  //     contract &&
  //     contract.intellectualProperty[contract?.intellectualProperty.length - 1],
  //   confidentiality:
  //     contract &&
  //     contract.confidentiality[contract?.confidentiality.length - 1 || 0],
  //   termination: contract.termination[contract?.termination.length - 1 || 0],
  //   liability: contract.liability[contract?.liability.length - 1 || 0],
  //   dispute: contract.dispute[contract?.dispute.length - 1 || 0],
  //   totalCost: contract.totalCost,
  //   createdAt: contract.createdAt,
  //   updatedAt: contract.updatedAt,
  //   deletedScopes: [],
  // };
  const InitialValues = {
    title: contract?.title,
    works: contract?.works,
    author: contract?.author,
    guest: contract?.guest,
    payment: {
      ...contract?.payment,
      type: contract?.payment?.type,
      startDate:
        contract?.payment &&
        new Date(contract?.payment?.startDate as string)
          .toISOString()
          .slice(0, 10),
      endDate:
        contract?.payment &&
        new Date(contract?.payment?.endDate as string)
          .toISOString()
          .slice(0, 10),
    },
    status: contract?.status,
    intellectualProperty:
      contract &&
      contract?.intellectualProperty[
        contract?.intellectualProperty?.length - 1 || 0
      ],
    confidentiality:
      contract &&
      contract?.confidentiality[contract?.confidentiality?.length - 1 || 0],
    termination:
      contract && contract?.termination[contract?.termination?.length - 1 || 0],
    liability:
      contract && contract?.liability[contract?.liability?.length - 1 || 0],
    dispute: contract && contract?.dispute[contract?.dispute?.length - 1 || 0],
    totalCost: contract?.totalCost,
    createdAt: contract?.createdAt,
    updatedAt: contract?.updatedAt,
    deletedScopes: [],
  };

  const contractSchema = object().shape({
    title: string().required("Enter a title for the Contract"),
    userTag: object().shape({
      userAddress: string(),
      guestAddress: string(),
      role: string(),
    }),
    scope: array().of(
      object().shape({
        description: string(),
      })
    ),
    payment: object().shape({
      totalFee: number(),
      upfront: number(),
      hourlyRate: number(),
      maxHours: number(),
      monthlyCost: number(),
      weeklyCost: number(),
      submitHours: number(),
      startDate: date(),
      endDate: date(),
      months: number(),
      weeks: number(),
      milestone: array().of(
        object().shape({
          title: string(),
          description: string(),
          cost: number(),
          dueDate: date(),
        })
      ),
    }),
  });

  const [isEditable, setIsEditable] = useState(false);
  const [lockEditing, setLockEditing] = useState(false);

  // console.log(contract);

  const [currentUser, setCurrentUser] = useState<"author" | "guest">("author");

  useEffect(() => {
    if (user?.address === contract?.author?.walletAddress) {
      setCurrentUser("author");
      switch (contract?.status) {
        case StatusType.edited:
          setLockEditing(false);
          break;
        case StatusType.received:
          setLockEditing(false);
          break;
        default:
          setLockEditing(true);
          break;
      }
    } else {
      setCurrentUser("guest");
      switch (contract?.status) {
        case StatusType.created:
          setLockEditing(false);
          break;
        case StatusType.reviewed:
          setLockEditing(false);
          break;
        default:
          setLockEditing(true);
          break;
      }
    }
  }, [contract, user?.address]);

  const VALIDITY_OF_SIGNATURE = 24 * 60 * 60 * 1000; // 24hours
  const [timestamp, setTimestamp] = useState(0);
  const MESSAGE_TO_BE_SIGNED =
    "I am signing a very important message via layers foundation";

  useEffect(() => {
    const t = new Date().getTime() + VALIDITY_OF_SIGNATURE;
    setTimestamp(t);
  }, [VALIDITY_OF_SIGNATURE]);

  const sdk = useSDK();
  const [signContract, { isSuccess: isSignSuccess }] =
    useSignContractMutation();

  const [updateDeployedContract, { isSuccess: hasUpdatedDeployed }] =
    useUpdateDeployedContractMutation();

  const [isDeploying, setIsDeploying] = useState(false);

  const [
    uploadContract,
    { isLoading: isUploading, isSuccess: isUploadSuccess },
  ] = useUploadContractMutation();

  useEffect(() => {
    if (isSignSuccess) {
      // console.log(contract);
      router.push("/dashboard");
      toast({
        title: "Contract Signed Successfully",
        description: "Contract has Been Updated!",
        status: "success",
        isClosable: true,
        position: "top",
      });
    }

    if (hasUpdatedDeployed) {
      refetch();

      toast({
        title: "Contract Deployed Successfully",
        description: "Contract has Been deployed to the blockchain!",
        status: "success",
        isClosable: true,
        position: "top",
      });
    }
  }, [
    isSignSuccess,
    router,
    toast,
    refetch,
    isUploadSuccess,
    hasUpdatedDeployed,
  ]);

  useEffect(() => {
    if (isUploadSuccess) {
      toast({
        title: "Contract Uploaded Successfully",
        description: "Contract has Been uploaded to Ipfs!",
        status: "info",
        isClosable: true,
        position: "top",
        duration: 500,
      });
    }
  }, [toast, isUploadSuccess]);

  const deletedScopes: string[] = [];

  const { data: balance, isLoading } = useBalance(NATIVE_TOKEN_ADDRESS);

  return (
    <Body>
      {isFetching ? (
        <PageLoader />
      ) : (
        <Box pb="50px">
          <Formik
            enableReinitialize
            initialValues={InitialValues}
            validationSchema={contractSchema}
            onSubmit={(values /* action */) => {
              const editedValues = JSON.parse(JSON.stringify(values));
              editedValues.totalCost = Number(values.totalCost);
              editedValues.payment.totalFee = Number(values.payment.totalFee);
              editedValues.deletedScopes = deletedScopes;
              // console.log('We don dey submit');

              updateContract({
                contractId: contract?.contractId as string,
                slug: contract?.slug as string,
                data: editedValues,
              }).then(() => {
                refetch();
              });
              // .unwrap()
            }}
          >
            {({
              errors,
              touched,
              values,
              setFieldValue,
              dirty,
              status,
              initialTouched,
              setStatus,
              initialValues,
            }) => (
              <Form>
                <Flex
                  direction={{ base: "column", xl: "row" }}
                  // gap='30px'
                  // mt='30px'
                  w="full"
                >
                  <VStack
                    w={{ base: "full", xl: "20%" }}
                    spacing="20px"
                    pr="30px"
                    pt="30px"
                  >
                    <VStack
                      w="full"
                      align="flex-start"
                      spacing="20px"
                      position="sticky"
                      top="25"
                    >
                      <Text
                        fontSize="13px"
                        fontWeight="500"
                        color="primary.100"
                      >
                        YOUR PROJECT CHECKLIST
                      </Text>

                      <Box display={{ base: "initial", xl: "none" }}>
                        <BasicCard variant="dark" py="20px">
                          <StepBox
                            status="active"
                            isFirst
                            isLast
                            title="Receive Proposal"
                            description="Review the Work Layers carefully to ensure it meets your needs."
                          />
                        </BasicCard>
                      </Box>

                      <Box display={{ base: "none", xl: "initial" }}>
                        <BasicCard variant="dark" py="20px">
                          <StepBox
                            status="active"
                            isFirst
                            title="Receive Proposal"
                            description="Review the Work Layers carefully to ensure it meets your needs."
                          />
                          <StepBox
                            status="current"
                            title="Review and Sign"
                            description={`Once you're happy with the Work Layers, simply sign it.`}
                          />
                          <StepBox
                            status="inactive"
                            title="Client Deposit Payment"
                            description={`Once you're happy with the contract, simply sign it.`}
                          />
                          <StepBox
                            status="inactive"
                            title="Project Activated"
                            isLast
                            description={`Once you're happy with the contract, simply sign it.`}
                          />
                        </BasicCard>
                      </Box>

                      <VStack
                        align="flex-start"
                        w="full"
                        display={{ base: "none", xl: "flex" }}
                      >
                        <Text
                          fontSize="11px"
                          fontWeight="medium"
                          color="primary.100"
                        >
                          LEARN ABOUT THIS STEP
                        </Text>
                        <BasicCard variant="dark" py="30px" color="primary.200">
                          <Image
                            as={NextImage}
                            alt="Snow icon"
                            src={snowIcon}
                          />
                          <Text
                            textTransform="capitalize"
                            fontWeight="medium"
                            my={2}
                          >
                            Layers Tip
                          </Text>
                          <Text fontSize={14}>
                            Review the contract carefully to ensure it meets
                            your needs, make changes directly in the fields on
                            the right, and send it for review with just a few
                            clicks. By following these pro tips, you can quickly
                            approve contracts and ensure that all necessary
                            changes have been made.
                          </Text>
                        </BasicCard>
                      </VStack>
                    </VStack>
                  </VStack>

                  <VStack
                    w={{ base: "full", xl: "80%" }}
                    spacing="20px"
                    pt="5px"
                  >
                    <VStack
                      w="full"
                      align="flex-start"
                      spacing="5px"
                      position="sticky"
                      top="0"
                      bg="dark.900"
                      zIndex="1"
                      pt="25px"
                      pb="10px"
                    >
                      <Text
                        fontSize="13px"
                        fontWeight="medium"
                        color="primary.100"
                      >
                        YOUR LAYERS WORKLOAD
                      </Text>

                      <HStack
                        w="full"
                        justify="space-between"
                        align="flex-end"
                        className="overflow"
                        overflowY={{ base: "auto", xl: "initial" }}
                      >
                        <HStack color="primary.100">
                          {contract &&
                            contract?.category.map((c: ICategory) => (
                              <Button
                                key={c as string}
                                rounded={30}
                                px="20px"
                                borderWidth={1}
                                borderColor="primary.100"
                                h="30px"
                                background="transparent"
                              >
                                <Text fontSize="11px" textTransform="uppercase">
                                  {c as string}
                                </Text>
                              </Button>
                            ))}
                        </HStack>
                        {isLoggedIn && (
                          <HStack>
                            {!lockEditing && (
                              <Button
                                onClick={() => {
                                  setIsEditable(!isEditable);
                                  setStatus(!isEditable);
                                }}
                                p={3}
                                as="a"
                                fontSize="sm"
                                fontWeight={400}
                                variant="link"
                                rounded={100}
                                borderWidth={1}
                                borderColor={
                                  !isEditable ? "green.400" : "red.400"
                                }
                              >
                                <Icon
                                  color={!isEditable ? "green.400" : "red.400"}
                                  w={5}
                                  h={5}
                                  as={!isEditable ? EditIcon : LockIcon}
                                />
                              </Button>
                            )}
                            {((contract?.status === StatusType.reviewed &&
                              currentUser === "guest") ||
                              (contract?.status === StatusType.received &&
                                currentUser === "guest") ||
                              (contract?.status === StatusType.created &&
                                currentUser === "guest") ||
                              (contract?.status === StatusType.edited &&
                                currentUser === "author") ||
                              (contract?.status === StatusType.approved &&
                                currentUser === "author") ||
                              (contract?.status === StatusType.signed &&
                                currentUser === "author" &&
                                contract[currentUser]?.signature ===
                                  undefined) ||
                              (contract?.status === StatusType.signed &&
                                currentUser === "guest" &&
                                contract[currentUser]?.signature ===
                                  undefined)) && (
                              <Button
                                display={
                                  !deepEqual(values, initialValues)
                                    ? "none"
                                    : "inline-flex"
                                }
                                fontSize={14}
                                variant="brand"
                                // bg='primary.400'
                                rounded={20}
                              >
                                <Web3Button
                                  type="button"
                                  contractAbi={SignatureAbi}
                                  className="web3Btn"
                                  contractAddress="0x88b5569a3a600D76722B9d91eCA0d21Dd0Be0e9A"
                                  action={async (signatureContract) => {
                                    return signatureContract
                                      .call("getMessageHash", [
                                        user?.address,
                                        MESSAGE_TO_BE_SIGNED,
                                        timestamp,
                                      ])
                                      .then(async (sign) => {
                                        console.log(await sign);

                                        const arraySmg = ethers.utils.arrayify(
                                          await sign
                                        );
                                        return sdk?.wallet.sign(
                                          arraySmg as unknown as string
                                        );
                                      })
                                      .then((signature) => {
                                        /* Calling the signContract function with the contractId,
                                    signature, walletAddress, and timestamp. */
                                        console.log(
                                          signature,
                                          timestamp,
                                          MESSAGE_TO_BE_SIGNED
                                        );

                                        signContract({
                                          contractId:
                                            contract?.contractId as string,
                                          slug: contract?.slug as string,
                                          data: {
                                            signature: signature as string,
                                            walletAddress:
                                              user?.address as string,
                                            timestamp,
                                          },
                                        });
                                      });
                                  }}
                                >
                                  <Text color="white">Sign Contract</Text>
                                </Web3Button>
                              </Button>
                            )}
                            {contract?.guest?.signature &&
                              contract?.author.signature &&
                              currentUser === "author" && (
                                <Button
                                  fontSize={14}
                                  variant="brand"
                                  // bg='primary.400'
                                  rounded={20}
                                  isLoading={isUploading || isDeploying}
                                >
                                  <Web3Button
                                    className="web3Btn"
                                    type="button"
                                    contractAddress="0x45a3578429bc1D2C8a1A9810A522013C67Ac06A9"
                                    contractAbi={FactoryAbi}
                                    action={async (esContract) => {
                                      const { author, guest, payment } = values;

                                      const userBalance = Number(
                                        Number(balance?.displayValue).toFixed(2)
                                      );

                                      if (userBalance < 0.001) {
                                        toast({
                                          title: "Insufficient funds",
                                          description:
                                            "Please fund your wallet!",
                                          status: "info",
                                          isClosable: true,
                                          position: "top",
                                        });

                                        return;
                                      }

                                      if (contract.contractAddress) {
                                        return setTimeout(() => {
                                          router.push(
                                            `/escrow/${contract.slug}`
                                          );
                                        }, 1000);
                                      }

                                      await uploadContract({
                                        contractId:
                                          contract?.contractId as string,
                                        slug: contract?.slug as string,
                                      })
                                        .unwrap()
                                        .then(async (response) => {
                                          setIsDeploying(true);

                                          const CID = response.data.cid;

                                          return esContract.call(
                                            "createContract",
                                            // 0,
                                            // All should be in an array after thirdweb upgrade
                                            [
                                              [
                                                author?.role === "client"
                                                  ? author?.walletAddress
                                                  : guest?.walletAddress,
                                                author?.role !== "client"
                                                  ? author?.walletAddress
                                                  : guest?.walletAddress,
                                                ethers.constants.AddressZero,
                                                "0xD63Ef08a38EfF4416d7EBf9895B69A525AE593F7",
                                              ],
                                              CID,
                                              MESSAGE_TO_BE_SIGNED,
                                              [
                                                ethers.utils.parseEther(
                                                  String(payment.totalFee)
                                                ),
                                              ],
                                              [
                                                author?.role === "client"
                                                  ? author?.signature
                                                  : guest?.signature,
                                                author?.role !== "client"
                                                  ? author?.signature
                                                  : guest?.signature,
                                              ],
                                              [
                                                String(
                                                  author?.role === "client"
                                                    ? author?.timestamp
                                                    : guest?.timestamp
                                                ),
                                                String(
                                                  author?.role !== "client"
                                                    ? author?.timestamp
                                                    : guest?.timestamp
                                                ),
                                              ],
                                              // 1, // protocolFee
                                              0, // payment_type
                                              0, // timefram
                                            ]
                                          );
                                        })
                                        .then(async (v) => {
                                          const contractAddress = await v
                                            ?.receipt.logs[0]?.address;

                                          updateDeployedContract({
                                            contractId:
                                              contract?.contractId as string,
                                            slug: contract?.slug as string,
                                            data: {
                                              contractAddress,
                                            },
                                          })
                                            .unwrap()
                                            .then(() => {
                                              setIsDeploying(false);

                                              toast({
                                                title:
                                                  "Contract Deployed Successfully",
                                                description:
                                                  "Contract has Been deployed to the blockchain!",
                                                status: "success",
                                                isClosable: true,
                                                position: "top",
                                              });

                                              setTimeout(() => {
                                                router.push(
                                                  `/escrow/${contract.slug}`
                                                );
                                              }, 1000);
                                            });
                                        })
                                        .catch((err) => {
                                          setIsDeploying(false);

                                          console.log(err);

                                          toast({
                                            title: "Error deploying contract",
                                            description:
                                              err.reason || err.messaage,
                                            status: "error",
                                            isClosable: true,
                                            position: "top",
                                          });
                                        });
                                    }}
                                    overrides={{
                                      gasLimit: 340157,
                                      gasPrice: 340157,
                                    }}
                                    onError={(error) => console.log(error)}
                                  >
                                    <Text color="white">
                                      {!contract.contractAddress
                                        ? " Deploy "
                                        : "Open"}{" "}
                                      Contract
                                    </Text>
                                  </Web3Button>
                                </Button>
                              )}
                            {!deepEqual(values, initialValues) && (
                              <Button
                                display={
                                  contract?.status !== StatusType.cosigned &&
                                  contract?.status !== StatusType.deployed
                                    ? "initial"
                                    : "none"
                                }
                                type="submit"
                                rounded={30}
                                px="17px"
                                h="45px"
                                bg="primary.500"
                                _disabled={{
                                  bg: "whiteAlpha.200",
                                  cursor: "not-allowed",
                                }}
                                isDisabled={status}
                                isLoading={isUpdating}
                              >
                                <HStack
                                  w="full"
                                  spacing="5px"
                                  align="center"
                                  mt={-1}
                                >
                                  <Text fontSize="14px" color="white">
                                    {contract?.status === StatusType.edited &&
                                      currentUser === "author" &&
                                      "Review Edit"}
                                    {contract?.status === StatusType.created &&
                                      currentUser === "guest" &&
                                      "Edit"}
                                    {contract?.status === StatusType.reviewed &&
                                      currentUser === "guest" &&
                                      "Edit"}
                                  </Text>
                                  {!lockEditing ? (
                                    <ArrowUpIcon
                                      fontSize="19px"
                                      transform="rotate(45deg)"
                                    />
                                  ) : (
                                    <TimeIcon
                                      fontSize="19px"
                                      transform="rotate(45deg)"
                                    />
                                  )}
                                </HStack>
                              </Button>
                            )}

                            {((currentUser === "author" &&
                              contract?.status === StatusType.created) ||
                              (currentUser === "guest" &&
                                contract?.status === StatusType.edited) ||
                              (contract?.status === StatusType.signed &&
                                contract[currentUser]?.signature) ||
                              (contract?.status === StatusType.cosigned &&
                                currentUser === "guest") ||
                              (contract?.status === StatusType.reviewed &&
                                currentUser === "author")) && (
                              <HStack
                                rounded={30}
                                spacing="5px"
                                px="17px"
                                h="45px"
                                borderColor="white"
                                borderWidth={1}
                                bg="transparent"
                                align="center"
                              >
                                <Text fontSize="14px" color="white">
                                  {contract?.status === StatusType.created &&
                                    currentUser === "author" &&
                                    "Awaiting Edit"}
                                  {contract?.status === StatusType.edited &&
                                    currentUser === "guest" &&
                                    "Awaiting Review"}

                                  {contract?.status === StatusType.signed &&
                                    contract[currentUser]?.signature &&
                                    "Awaiting Second Signature"}

                                  {contract?.status === StatusType.reviewed &&
                                    currentUser === "author" &&
                                    "Awaiting  Signature"}

                                  {contract?.status === StatusType.cosigned &&
                                    currentUser === "guest" &&
                                    "Awaiting Deployment"}
                                </Text>
                                <TimeIcon
                                  fontSize="15px"
                                  transform="rotate(45deg)"
                                />
                              </HStack>
                            )}
                          </HStack>
                        )}
                      </HStack>
                    </VStack>

                    <Accordion allowToggle m="0px" w="full">
                      <VStack w="full" spacing="15px">
                        <VStack
                          w="full"
                          align="flex-start"
                          rounded={20}
                          bg="white"
                          px={{ base: "20px", xl: "40px" }}
                          pb={{ base: "20px", xl: "40px" }}
                          pt={{ base: "14px", xl: "24px" }}
                          color="dark.400"
                        >
                          <Text fontSize="25px" fontWeight="bold">
                            {values.title}
                          </Text>

                          <Flex
                            direction={{ base: "column", xl: "row" }}
                            gap="20px"
                            w="full"
                          >
                            <HStack fontSize="14px" minW="max-content">
                              <Image as={NextImage} src={fee} w="16px" />
                              <Text fontWeight="bold">Project Cost:</Text>
                              <Text>${values.totalCost}</Text>
                            </HStack>

                            {values.payment.upfront !== undefined &&
                              values?.payment.upfront > 0 &&
                              values.totalCost && (
                                <HStack fontSize="14px" minW="max-content">
                                  <Image as={NextImage} src={fee} w="16px" />
                                  <Text fontWeight="bold">
                                    Advance Payment:
                                  </Text>
                                  <Text>
                                    $
                                    {(values.payment.upfront / 100) *
                                      values.totalCost}{" "}
                                    ({values.payment.upfront}%)
                                  </Text>
                                </HStack>
                              )}

                            <HStack fontSize="14px" minW="max-content">
                              <Image as={NextImage} src={fee} w="16px" />
                              <Text fontWeight="bold">Created:</Text>
                              <Text>
                                {new Date(
                                  values.createdAt as string
                                ).toDateString()}
                              </Text>
                            </HStack>

                            <HStack fontSize="14px" minW="max-content">
                              <Image as={NextImage} src={fee} w="16px" />
                              <Text fontWeight="bold">Updated:</Text>
                              <Text>
                                {new Date(
                                  values.updatedAt as Date
                                ).toDateString()}
                              </Text>
                              {/* <Text>08, March, 2023</Text> */}
                            </HStack>
                          </Flex>
                        </VStack>

                        <VStack w="full" align="flex-start" spacing="15px">
                          <Text
                            fontSize="11px"
                            fontWeight="medium"
                            color="primary.100"
                            py="-10px"
                          >
                            IMPORTANT TERMS
                          </Text>
                          <Scope
                            error={
                              errors.works as unknown as FormikErrors<IWorks>[]
                            }
                            isTouched={
                              touched.works as unknown as FormikTouched<IWorks>[]
                            }
                            deletedScopes={deletedScopes}
                            isEditable={isEditable}
                            works={values.works}
                            setFieldValue={setFieldValue}
                            position={1}
                          />
                          <Payments
                            setFieldValue={setFieldValue}
                            values={values.payment}
                            selectedType={contract?.payment?.type}
                            isEditable={isEditable}
                            position={2}
                          />
                        </VStack>

                        <VStack w="full" align="flex-start" spacing="15px">
                          <Text
                            fontSize="11px"
                            fontWeight="medium"
                            color="primary.100"
                            py="-10px"
                          >
                            WORKLOAD TERMS
                          </Text>

                          {/* The remaining Fields are represented in the card component below */}
                          <Card
                            name="intellectualProperty"
                            values={contract?.intellectualProperty}
                            setFieldValue={setFieldValue}
                            isEditable={
                              touched.intellectualProperty ? true : isEditable
                            }
                            position={3}
                          />
                          <Card
                            name="confidentiality"
                            values={contract?.confidentiality}
                            setFieldValue={setFieldValue}
                            isEditable={isEditable}
                            position={4}
                          />
                          <Card
                            name="termination"
                            values={contract?.termination}
                            setFieldValue={setFieldValue}
                            isEditable={isEditable}
                            position={5}
                          />
                          <Card
                            name="liability"
                            values={contract?.liability}
                            setFieldValue={setFieldValue}
                            isEditable={isEditable}
                            position={6}
                          />
                          <Card
                            name="dispute"
                            values={contract?.dispute}
                            setFieldValue={setFieldValue}
                            isEditable={isEditable}
                            position={7}
                          />
                        </VStack>
                      </VStack>
                    </Accordion>

                    <Flex
                      w="full"
                      justify="space-between"
                      direction={{ base: "column-reverse", xl: "row" }}
                      align="flex-start"
                      gap="30px"
                      pt={{ base: "0px", xl: "10px" }}
                    >
                      <VStack
                        align="flex-start"
                        spacing="10px"
                        borderTopWidth={{ base: "2px", xl: "0px" }}
                        borderColor="grey.300"
                        pt={{ base: "40px", xl: "0px" }}
                        w="full"
                      >
                        <HStack spacing="10px">
                          <Image as={NextImage} src={checkIcon} w="16px" />

                          <Text fontWeight="bold" fontSize="14px">
                            Neue World FZ LLC, Dubai
                          </Text>
                        </HStack>

                        <HStack spacing="10px">
                          <Image as={NextImage} src={writeIcon} w="16px" />

                          <Text fontSize="12px">
                            Signed by Jayant Rao (0xdf....8fsd)
                          </Text>
                        </HStack>

                        <HStack spacing="10px">
                          <Image as={NextImage} src={dateIcon} w="16px" />

                          <Text fontSize="12px">on 27th March, 2023</Text>
                        </HStack>
                      </VStack>

                      {/* This will be rendered conditionally */}
                      {/* Conditionally render based on project status */}
                      {/* <VStack align="flex-end" spacing="5px">
                        <HStack spacing="10px">
                          <Text fontWeight="bold" fontSize="14px">
                            Oluwaseye Alexander
                          </Text>
                          <Image as={NextImage} src={checkIcon} w="16px" />
                        </HStack>

                        <HStack spacing="10px">
                          <Text fontSize="12px">Signed (0xdf....ax05yt)</Text>
                          <Image as={NextImage} src={writeIcon} w="16px" />
                        </HStack>

                        <HStack spacing="10px">
                          <Text fontSize="12px">on 27th March, 2023</Text>
                          <Image as={NextImage} src={dateIcon} w="16px" />
                        </HStack>
                      </VStack> */}
                    </Flex>
                  </VStack>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </Body>
  );
};

export default ViewContract;
