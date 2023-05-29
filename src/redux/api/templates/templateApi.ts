import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { REHYDRATE } from 'redux-persist';
import { ITemplate, IInitialValues } from '@/types/template.types';
import { axiosBaseQuery } from '@/redux/hooks';
import BASE_URL from '@/utils/url';

export const templatesApi = createApi({
  reducerPath: 'templatesApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  baseQuery: axiosBaseQuery({
    baseUrl: `${BASE_URL}/template`,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Templates'],
  endpoints(build) {
    return {
      createTemplate: build.mutation<ITemplate, IInitialValues>({
        query: (data) => ({
          url: `/`,
          method: 'post',
          data,
        }),
        invalidatesTags: [{ type: 'Templates', id: 'ALL' }],
      }),
      getAllTemplates: build.query<ITemplate[], void>({
        query: () => ({ url: '/', method: 'get' }),
        providesTags: (result) =>
          // is result available?
          result
            ? // successful query
              [
                ...result.map(
                  ({ templateId }) =>
                    ({ type: 'Templates', templateId } as const)
                ),
                { type: 'Templates', id: 'ALL' },
              ]
            : // an error occurred, but we still want to refetch this query when `{ type: 'Contract', id: 'LIST' }` is invalidated
              [{ type: 'Templates', id: 'ALL' }],
      }),
      getTemplate: build.query<ITemplate, string>({
        query: (slug) => ({ url: `/slug/${slug}`, method: 'get' }),
        providesTags: (result, error, arg) => [{ type: 'Templates', id: arg }],
      }),

      // getTemplate: build.query<ITemplate, string>({
      //   query: (slug) => ({ url: `/slug/${slug}`, method: 'get' })
      // }),
      updateTemplate: build.mutation<
        ITemplate,
        { templateId: string; data: ITemplate }
      >({
        query: ({ templateId, data }) => ({
          url: `/${templateId}`,
          method: 'patch',
          data,
        }),
      }),

      deleteContract: build.mutation<
        ITemplate,
        {
          contractId?: string;
          slug: string;
        }
      >({
        query: ({ contractId }) => ({
          url: `/${contractId}`,
          method: 'delete',
        }),
        invalidatesTags: (result, error, { slug }) => [
          { type: 'Templates', id: slug },
        ],
      }),
    };
  },
});

export const {
  useCreateTemplateMutation,
  useGetAllTemplatesQuery,
  useGetTemplateQuery,
  useUpdateTemplateMutation,
  // usePrefetch,
} = templatesApi;
