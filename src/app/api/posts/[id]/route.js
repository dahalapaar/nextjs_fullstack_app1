import Posts from "@/models/Posts"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
  const id = params
  try {
    connect()

    const post = await Posts.findById(id)
    return NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return NextResponse("Connection Failed", { status: 500 })
  }
}

export const DELETE = async (req, { params }) => {
  const id = params
  try {
    connect()

    await Posts.findByIdAndDelete(id)
    return NextResponse("Post deleted successfully", { status: 200 })
  } catch (error) {
    return NextResponse("Connection Failed", { status: 500 })
  }
}
