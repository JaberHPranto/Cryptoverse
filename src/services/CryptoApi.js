import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "b39424c555msh6f00f802d8e6d77p132f3djsnf24f0f931bad",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
// have to send headers as well
const createUrl = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createUrl(`/coins/?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createUrl(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createUrl(`/coin/${coinId}/history/${timePeriod}`),
    }),
    getCryptoExchanges: builder.query({
      query: () => createUrl(`/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoExchangesQuery,
} = cryptoApi;
