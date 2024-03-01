import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photoSlice = createApi({
  reducerPath: "photo",
  baseQuery: fetchBaseQuery({ baseUrl: "https://todays-blog-server.vercel.app" }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => '/blogs',
    }),
  }),
});

export const { useGetPhotosQuery } = photoSlice;

export default photoSlice;