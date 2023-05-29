import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

function PageLoader() {
  return (
    <Center w="100vw" h="100vh" bg="dark.900">
      <Spinner />
    </Center>
  );
}

export default PageLoader;
