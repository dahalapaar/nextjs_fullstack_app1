import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Posts from "@/models/Posts"

export const GET = async (request) => {
  const url = new URL(request.url)

  const userName = url.searchParams.get("username")
  try {
    await connect()

    const posts = await Posts.find(username && { username })
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse("Database error", {
      status: 500,
    })
  }
}

export const POST = async (request) => {
  const body = await request.json()

  const newPost = new Posts(body)
  try {
    await connect()

    await newPost.save()
    return new NextResponse("Post has been created", { status: 201 })
  } catch (error) {
    return new NextResponse("Database error", {
      status: 500,
    })
  }
}
