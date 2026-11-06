import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type ProductPayload = {
  id: number
  price: number
}

type CheckoutPayload = {
  products: ProductPayload[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export const apiEfood = createApi({
  reducerPath: 'apiEfood',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    purchaseEfood: builder.mutation<any, CheckoutPayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePurchaseEfoodMutation } = apiEfood
