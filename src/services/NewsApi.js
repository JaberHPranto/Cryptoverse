import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeader = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "b39424c555msh6f00f802d8e6d77p132f3djsnf24f0f931bad",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
// have to send headers as well
const createUrl = (url) => ({ url, headers: newsApiHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ category, count }) =>
        createUrl(
          `/news/search/?q=${category}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
