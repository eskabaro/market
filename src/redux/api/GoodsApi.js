import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const providesList = (resultsWithIds, tagType) => {
     return resultsWithIds
          ? [
               { type: tagType, id: 'LIST' },
               ...resultsWithIds.map(({ id }) => ({ type: tagType, id }))
          ] : [{ type: tagType, id: 'LIST' }]
}

const params = {
     page: 1,
     sort: ''
}

let limitPage = 8
const mediaQuery = window.matchMedia('(max-width: 767px)')

if (mediaQuery.matches) limitPage = 0

export const GoodsApi = createApi({
     reducerPath: 'GoodsApi',
     tagTypes: ['GoodsCart', 'CurrentGood'],
     baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-market.onrender.com' }),
     endpoints: (builder) => ({
          getGoods: builder.query({
               query: (body = params) => ({
                    url: `products${body.sort && `?category=${body.sort}`}`,
                    method: 'GET',
                    params: {
                         _page: body.page,
                         _limit: limitPage
                    }
               }),
               providesTags: result =>
                    result?.partialGoods
                         ? [
                              ...result.partialGoods.map(good => ({ type: 'CurrentGood', id: good.id })),
                              { type: 'CurrentGood', id: 'LIST' }
                         ]
                         : [
                              { type: 'CurrentGood', id: 'LIST' }
                         ]
          }),
          getGoodsLength: builder.query({
               query: () => `/products`
          }),
          getCartProducts: builder.query({
               query: () => `/cart`,
               providesTags: result => providesList(result, 'GoodsCart')
          }),
          getCurrentDetails: builder.query({
               query: id => `/products/${id}`,
               providesTags: (id) => [{ type: 'CurrentGood', id }]
          }),
          addToCart: builder.mutation({
               query: body => ({
                    url: `/cart`,
                    method: 'POST',
                    body
               }),
               invalidatesTags: [{ type: 'GoodsCart' }]
          }),
          deleteFromCart: builder.mutation({
               query: id => ({
                    url: `/cart/${id}`,
                    method: 'DELETE'
               }),
               invalidatesTags: [{ type: 'GoodsCart' }]
          }),
          selectSize: builder.mutation({
               query: ({ id, siz }) => ({
                    url: `/products/${id}`,
                    method: 'PATCH',
                    body: {
                         size: siz
                    }
               }),
               invalidatesTags: [{ type: 'CurrentGood' }]
          }),
          incrementQuatity: builder.mutation({
               query: ({ id, count }) => ({
                    url: `/cart/${id}`,
                    method: 'PATCH',
                    body: {
                         quantity: count
                    }
               }),
               invalidatesTags: [{ type: 'GoodsCart' }]
          }),
          decrementQuantity: builder.mutation({
               query: ({ id, count }) => ({
                    url: `/cart/${id}`,
                    method: 'PATCH',
                    body: {
                         quantity: count
                    }
               }),
               invalidatesTags: [{ type: 'GoodsCart' }]
          })
     })
})

export const { useGetGoodsQuery,
     useGetGoodsLengthQuery,
     useGetCartProductsQuery,
     useGetCurrentDetailsQuery,
     useDeleteFromCartMutation,
     useAddToCartMutation,
     useSelectSizeMutation,
     useIncrementQuatityMutation,
     useDecrementQuantityMutation,
} = GoodsApi