import Posts from "@/models/Posts"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

const GET = async (req, { params }) => {
  const id = params
  try {
    connect()

    const post = Posts.findById(id)
    return NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return NextResponse("Connection Failed", { status: 500 })
  }
}
