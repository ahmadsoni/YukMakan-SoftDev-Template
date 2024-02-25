import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function custom404() {
  const router = useRouter()
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 ">
      <div className="flex flex-col flex-1">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container flex flex-col items-center px-6 mx-auto">
            <svg
              className="w-12 h-12 mt-8 text-green-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-6xl font-semibold text-gray-700"> 404 </h1>
            <p className="text-gray-700">
              {' '}
              Page not found. Check the address or
              <button
                className="text-green-600 hover:underline "
                type="button"
                onClick={() => {
                  router.back()
                }}
              >
                {' '}
                go back{' '}
              </button>
              .
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
