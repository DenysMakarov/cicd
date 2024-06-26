import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost, IUser} from "../../models/models";

export const appApi = createApi({
    reducerPath: 'appApi', // The name of the slice
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }), // The base URL for the API
    endpoints: (builder) => ({ // Define the API endpoints
        getUsers: builder.query<IUser[], void>({ // Define a single API endpoint
            query: () => ({ // Define a query object
                url: 'users',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        getPosts: builder.query<IPost, void>({
            query: () => ({
                url: 'posts',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        getPostsByLimit: builder.query<IPost[], number | void>({
            query: (limit = 10) => ({
                url: 'posts',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    _limit: limit,
                    // per_page: limit
                }
            }),
            transformResponse: (response: IPost[]) => response.slice(0, 5)
        })
    })
})

export const {useGetUsersQuery, useGetPostsQuery, useGetPostsByLimitQuery} = appApi
