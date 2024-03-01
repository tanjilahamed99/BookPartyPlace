import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photoSlice = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({ baseUrl: "https://luxe-next-server.vercel.app" }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => "/rooms",
    }),
  }),
});

export const { useGetPhotosQuery } = photoSlice;

export default photoSlice;
