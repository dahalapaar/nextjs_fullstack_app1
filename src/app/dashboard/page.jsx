"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import useSWR from "swr"

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`,
  //       {
  //         caches: "no-store",
  //       }
  //     )
  //     if (!res.ok) {
  //       return notFound()
  //     }

  //     const data = res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  const session = useSession()

  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/${id} ",
    fetcher
  )

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>
  }
}

export default Dashboard
