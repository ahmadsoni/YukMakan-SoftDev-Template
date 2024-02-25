import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
