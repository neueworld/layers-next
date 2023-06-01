import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Accordion,
  Button,
  Box,
  Flex,
  HStack,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';
// import type { FormikErrors, FormikValues } from 'formik';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { useUser } from '@thirdweb-dev/react';
import type { IInitialValues } from '../../types/template.types';
import BasicCard from '@/components/cards/BasicCard';
import Body from '@/components/common/Body';
import Card from '@/components/contract/Card';
// import Category from '@/components/contract/Category';
import StepBox from '@/components/contract/StepBox';
import Title from '@/components/contract/Title';
import { useCreateTemplateMutation } from '@/redux/api/templates/templateApi';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Create() {
  const address = useAddress();

  const InitialValues: IInitialValues = {
    title: '',
    walletAddress: address,
    intellectualProperty: {
      title: 'Intellectual Property',
      text: '',
      heading: `Lörem ipsum posedut togände euroläväskap: därför att vid. Teratos fjärrnyckel fastän nonade. Plasotödat nin men dudat jag espegt. Supralärade duska. Prese äsade bess susk. Tresm duguvis, deck antiv autogt. Pos presm för doliga.`,
    },
    confidentiality: {
      title: 'Confidentiality',
      text: '',
      heading:
        'Lörem ipsum posedut togände euroläväskap: därför att vid. Teratos fjärrnyckel fastän nonade. Plasotödat nin men dudat jag espegt. Supralärade duska. Prese äsade bess susk. Tresm duguvis, deck antiv autogt. Pos presm för doliga.',
    },
    termination: {
      title: 'Termination',
      text: '',
      heading:
        'Lörem ipsum posedut togände euroläväskap: därför att vid. Teratos fjärrnyckel fastän nonade. Plasotödat nin men dudat jag espegt.',
    },
    liability: {
      title: 'Limitation of Liability',
      text: '',
      heading:
        'Lörem ipsum posedut togände euroläväskap: därför att vid. Teratos fjärrnyckel fastän nonade. Plasotödat nin men dudat jag espegt. Supralärade duska. Prese äsade bess susk. Tresm duguvis, deck antiv autogt. Pos presm för doliga.',
    },
    dispute: {
      title: 'Dispute Resolution',
      text: '',
      heading:
        'Lörem ipsum posedut togände euroläväskap: därför att vid. Teratos fjärrnyckel fastän nonade. Plasotödat nin men dudat jag espegt.',
    },
  };

  const templateSchema = object().shape({
    title: string().required('Enter a title for the template'),
    intellectualProperty: object().shape({
      text: string().required('Intellectual Property is required'),
    }),
    confidentiality: object().shape({
      text: string().required('Confidentiality term is required'),
    }),
    termination: object().shape({
      text: string().required('Termination term is required'),
    }),
    liability: object().shape({
      text: string().required('Liabilty term is required'),
    }),
    dispute: object().shape({
      text: string().required('Dispute term is required'),
    }),
  });

  const { user } = useUser();

  const [
    createTemplate,
    { isLoading: isCreating, isSuccess: isCreateSuccess },
  ] = useCreateTemplateMutation();
  // const navigate = useNavigate();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (isCreateSuccess) {
      router.push('/templates');
      toast({
        title: 'Template Created Successfully',
        description: 'Template has Been Created',
        status: 'success',
        isClosable: true,
        position: 'top',
      });
    }
  }, [isCreateSuccess, router, toast]);

  return (
    <Body>
      <Box pb="50px" w="full">
        <Formik
          initialValues={InitialValues}
          validationSchema={templateSchema}
          onSubmit={(values) => {
            const editedValues = JSON.parse(JSON.stringify(values));
            editedValues.walletAddress = user?.address;
            console.log(address);
            createTemplate(editedValues).unwrap();
          }}
        >
          {({ errors, touched, values, setFieldValue, isValid }) => (
            <Form>
              <VStack align="flex-start" w="full" pt="30px">
                <Text
                  fontSize="14px"
                  fontWeight="medium"
                  color="primary.100"
                  display={{ base: 'initial', md: 'none' }}
                >
                  YOUR PROJECT CHECKLIST
                </Text>

                <Box display={{ md: 'none' }} pb="30px" w="full">
                  <BasicCard variant="dark" h="full" w="full" py="15px">
                    <StepBox
                      status={
                        touched.intellectualProperty &&
                        values.intellectualProperty.text !== ''
                          ? 'active'
                          : values.intellectualProperty.text !== ''
                          ? 'current'
                          : 'inactive'
                      }
                      isFirst
                      title={values.intellectualProperty.title as string}
                    />
                  </BasicCard>
                </Box>

                <Flex
                  direction={{ base: 'column', xl: 'row' }}
                  pb="25px"
                  w="full"
                  // justify="space-between"
                  gap={{ base: '10px', xl: '15px' }}
                >
                  <HStack w={{ base: 'full', xl: '20%' }}>
                    <Link href="/templates" className="buttonLink">
                      <HStack
                        w="full"
                        spacing="2px"
                        _hover={{
                          color: 'primary.100',
                          transition: '0.2s ease-in-out',
                        }}
                      >
                        <ArrowBackIcon fontSize="15px" />
                        <Text fontSize="14px">Back to Contract Templates</Text>
                      </HStack>
                    </Link>
                  </HStack>

                  <Flex
                    align={{ base: 'flex-start', xl: 'center' }}
                    gap={{ base: '20px', xl: 'initial' }}
                    direction={{ base: 'column', xl: 'row' }}
                    w={{ base: 'full', xl: '80%' }}
                    justify="space-between"
                  >
                    <Text fontWeight="bold" fontSize="20px">
                      Edit your template as you want
                    </Text>

                    <Button
                      type="submit"
                      w={{ base: 'full', xl: 'initial' }}
                      rounded={30}
                      px="17px"
                      h="45px"
                      isLoading={isCreating}
                      isDisabled={!isValid}
                      variant={isValid ? 'primary' : ''}
                      _disabled={{
                        bg: 'whiteAlpha.200',
                      }}
                    >
                      <HStack
                        w="full"
                        justify="center"
                        spacing="5px"
                        color={isValid ? 'white' : 'gray'}
                      >
                        <Text
                        // color="gray"
                        >
                          Create Template
                        </Text>
                      </HStack>
                    </Button>
                  </Flex>
                </Flex>

                <Flex
                  w="full"
                  gap="15px"
                  direction={{ base: 'column', md: 'row' }}
                >
                  <VStack
                    align="flex-start"
                    spacing="10px"
                    display={{ base: 'none', md: 'block' }}
                    h="full"
                    w="20%"
                  >
                    <Text
                      fontSize="12px"
                      fontWeight="medium"
                      color="primary.100"
                      display={{ base: 'none', md: 'block' }}
                    >
                      YOUR PROJECT CHECKLIST
                    </Text>
                    <BasicCard variant="dark" h="full" w="full" py="30px">
                      <StepBox
                        status={
                          touched.intellectualProperty &&
                          values.intellectualProperty.text !== ''
                            ? 'active'
                            : values.intellectualProperty.text !== ''
                            ? 'current'
                            : 'inactive'
                        }
                        isFirst
                        title={values.intellectualProperty.title as string}
                      />
                      <StepBox
                        status={
                          touched.confidentiality &&
                          values.confidentiality.text !== ''
                            ? 'active'
                            : values.confidentiality.text !== ''
                            ? 'current'
                            : 'inactive'
                        }
                        title={values.confidentiality.title as string}
                      />
                      <StepBox
                        status={
                          touched.termination && values.termination.text !== ''
                            ? 'active'
                            : values.termination.text !== ''
                            ? 'current'
                            : 'inactive'
                        }
                        title={values.termination.title as string}
                      />
                      <StepBox
                        status={
                          touched.liability && values.liability.text !== ''
                            ? 'active'
                            : values.liability.text !== ''
                            ? 'current'
                            : 'inactive'
                        }
                        title={values.liability.title as string}
                      />
                      <StepBox
                        status={
                          touched.dispute && values.dispute.text !== ''
                            ? 'active'
                            : values.dispute.text !== ''
                            ? 'current'
                            : 'inactive'
                        }
                        isLast
                        title={values.dispute.title as string}
                      />
                    </BasicCard>
                  </VStack>

                  <Box w={{ md: '80%', base: 'full' }}>
                    <Accordion allowToggle m="0px">
                      <Title
                        isEditable
                        error={errors.title}
                        isTouched={touched.title}
                      />

                      <Card
                        error={errors.intellectualProperty}
                        isTouched={touched.intellectualProperty}
                        name="intellectualProperty"
                        isEditable
                        setFieldValue={setFieldValue}
                        block={values.intellectualProperty}
                      />
                      <Card
                        error={errors.confidentiality}
                        isTouched={touched.confidentiality}
                        name="confidentiality"
                        isEditable
                        setFieldValue={setFieldValue}
                        block={values.confidentiality}
                      />
                      <Card
                        error={errors.termination}
                        isTouched={touched.termination}
                        isEditable
                        name="termination"
                        setFieldValue={setFieldValue}
                        block={values.termination}
                      />
                      <Card
                        error={errors.liability}
                        isTouched={touched.liability}
                        isEditable
                        name="liability"
                        setFieldValue={setFieldValue}
                        block={values.liability}
                      />
                      <Card
                        error={errors.dispute}
                        isTouched={touched.dispute}
                        name="dispute"
                        isEditable
                        setFieldValue={setFieldValue}
                        block={values.dispute}
                      />
                    </Accordion>
                  </Box>
                </Flex>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Body>
  );
}

export default Create;
