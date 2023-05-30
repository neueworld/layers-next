import { store } from '@/redux/store';
import '@/styles/globals.css';
import Fonts from '@/theme/font';
import theme from '@/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Mumbai } from '@thirdweb-dev/chains';
import {
  // ChainId,
  ThirdwebProvider,
  metamaskWallet,
  magicLink,
  coinbaseWallet,
  walletConnect,
} from '@thirdweb-dev/react';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageLoader from '@/components/common/PageLoader';
import { ProtectedRoute } from '@/utils/ProtectedRoute';

import { AUTH_DOMAIN, AUTH_URL } from '@/utils/url';
// import { MagicConnector } from '@thirdweb-dev/react/evm/connectors/magic';

// const NewContract = lazy(() => import('@/pages/contracts/new'));
// const FromTemplate = lazy(() => import('@/pages/contracts/new'));
// const ViewContract = lazy(() => import('@/pages/contracts/viewContract'));
// const Freelancer = lazy(() => import('@/pages/dashboards/freelancer'));
// const Client = lazy(() => import('@/pages/dashboards/client'));
// const MainDashboard = lazy(() => import('@/pages/dashboards/mainDashboard'));
// const FreelancerProfile = lazy(() => import('@/pages/profiles/freelancer'));
// const ClientProfile = lazy(() => import('@/pages/profiles/client'));
// const Templates = lazy(() => import('@/pages/templates/viewAllTemplates'));
// const NewTemplate = lazy(() => import('@/pages/templates/createTemplate'));
// const SignupPage = lazy(() => import('@/pages/onboarding/welcome'));
// const ClientSignupPage = lazy(() => import('@/pages/onboarding/client'));
// const FreelancerSignupPage = lazy(
//   () => import('@/pages/onboarding/freelancer')
// );
// const ContinueSignup = lazy(() => import('@/pages/onboarding/signup'));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Fonts />
        <ThirdwebProvider
          // walletConnectors={[
          //   // magicLinkConnector,
          //   'metamask',
          //   'walletConnect',
          //   'coinbase',
          // ]}
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
            magicLink({
              apiKey: 'pk_live_8C4442FA1CF3E6A8',
            }),
          ]}
          activeChain={{
            ...Mumbai,
            rpc: [
              'https://polygon-mumbai.g.alchemy.com/v2/jBx23SN98GD4nuzB1Mw-M5Z5QK5fXSY9',
            ],
          }}
          authConfig={{
            domain: AUTH_DOMAIN as string,
            authUrl: AUTH_URL,
          }}
          autoConnect
          dAppMeta={{
            name: 'Layers',
            description: 'Layers foundation',
            // logoUrl: 'https://example.com/logo.png',
            url: 'https://layers.foundation',
            isDarkMode: true,
          }}
        >
          {/* <Router>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/welcome" element={<SignupPage />} />
                <Route path="/welcome/client" element={<ClientSignupPage />} />
                <Route
                  path="/welcome/freelancer"
                  element={<FreelancerSignupPage />}
                />
                <Route path="/welcome/signup" element={<ContinueSignup />} />
                <Route path="/" element={<MainDashboard />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/template/new" element={<NewTemplate />} />
                <Route path="/freelancer/:slug" element={<Freelancer />} />
                <Route path="/dashboard" element={<Freelancer />} />
                <Route path="/escrow/:slug" element={<Client />} />
                <Route path="/dashboard/main" element={<MainDashboard />} />
                <Route
                  path="/profile/freelancer"
                  element={<FreelancerProfile />}
                />
                <Route path="/profile/client" element={<ClientProfile />} />

                <Route
                  path="/contract/new"
                  element={
                    // <ProtectedRoute>
                    <NewContract />
                    // </ProtectedRoute>
                  }
                />

                <Route
                  path="/from-template/:slug"
                  element={
                    // <ProtectedRoute>
                    <FromTemplate />
                    // </ProtectedRoute>
                  }
                />

                <Route
                  path="/contract/:slug"
                  element={
                    // <ProtectedRoute>
                    <ViewContract />
                    // </ProtectedRoute>
                  }
                />

                <Route
                  path="/my-contracts"
                  element={
                    <ProtectedRoute>
                      <MainDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </Router> */}
          <Component {...pageProps} />
        </ThirdwebProvider>
      </Provider>
    </ChakraProvider>
  );
}
