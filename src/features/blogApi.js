import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["blogApi"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blogApi"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: ["blogApi"],
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: "/blogs",
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["blogApi"],
    }),
    blogDeletion: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogApi"],
    }),
    updateBlog: builder.mutation({
      query: ({id, ...blog}) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: blog,
      }),
      invalidatesTags: ["blogApi"],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useCreateBlogMutation,
  useBlogDeletionMutation,
  useUpdateBlogMutation,
} = blogApi;
