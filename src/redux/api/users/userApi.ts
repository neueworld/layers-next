import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { REHYDRATE } from "redux-persist";

import { axiosBaseQuery } from "@/redux/hooks";
import type { IUser } from "@/types/user.types";
import type { ITemplate } from "@/utils/types";
import BASE_URL from "@/utils/url";

export const userApi = createApi({
  reducerPath: "userApi",
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  baseQuery: axiosBaseQuery({
    baseUrl: `${BASE_URL}/user`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  tagTypes: ["User"],
  endpoints(build) {
    return {
      getAllTemplates: build.query<ITemplate[], void>({
        query: () => ({ url: "/", method: "get" }),
      }),
      getUser: build.query<IUser, void>({
        query: () => ({ url: `/me`, method: "get" }),
        providesTags: () => [{ type: "User" }],
      }),
      getToken: build.query<string, void>({
        query: () => ({ url: `/token`, method: "get" }),
        keepUnusedDataFor: 5,
        providesTags: () => [{ type: "User" }],
      }),
      getUserByAddress: build.query<IUser, string>({
        query: (walletAddress) => ({
          url: `/address/${walletAddress}`,
          method: "get",
        }),
        providesTags: () => [{ type: "User" }],
        transformResponse: (response: { data: IUser }) => {
          return response.data;
        },
      }),

      verifyUserToken: build.mutation<IUser, { data: string }>({
        query: ({ data }) => ({
          url: `/verify-token`,
          method: "post",
          data,
        }),
        transformResponse: (response: { user: IUser }) => {
          return response.user;
        },
      }),
      verifyEmailToken: build.mutation<IUser, string>({
        query: (token) => ({
          url: `/verify-email/${token}`,
          method: "patch",
        }),
        transformResponse: (response: { user: IUser }) => {
          return response.user;
        },
      }),
      resendEmailToken: build.mutation<IUser, string>({
        query: (email) => ({
          url: `/resend-email`,
          method: "patch",
          data: { email },
        }),
        transformResponse: (response: { user: IUser }) => {
          return response.user;
        },
      }),
      RegisterUser: build.mutation<IUser, Partial<IUser>>({
        query: (data) => ({
          url: `/register`,
          method: "post",
          data,
        }),
      }),
      updateUserInfo: build.mutation<IUser, Partial<IUser>>({
        query: (data) => ({
          url: `/update-info`,
          method: "patch",
          data,
        }),
      }),
    };
  },
});

export const {
  // useCreateProductMutation,
  // useUpdateProductMutation,
  // useDeleteProductMutation,
  useGetUserByAddressQuery,
  useResendEmailTokenMutation,
  useVerifyEmailTokenMutation,
  useGetAllTemplatesQuery,
  useGetUserQuery,
  useVerifyUserTokenMutation,
  useRegisterUserMutation,
  useGetTokenQuery,
  useUpdateUserInfoMutation,

  // useGetProductQuery,
  // usePrefetch,
} = userApi;
