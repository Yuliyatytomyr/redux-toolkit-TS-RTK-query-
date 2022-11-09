import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPosts } from '../types/IPosts';

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    tagTypes: ['POST'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPosts[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['POST']
        }),
        createPost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['POST']
        }),
        updatePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['POST']
        }),
        deletePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['POST']
        }),
    }),
})