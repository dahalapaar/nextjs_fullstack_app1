import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export const POST = async (request) => {
  const { name, email, password } = await request.json()

  await connect()

  const hashPassword = await bcrypt.hash(password, 5)

  const newUser = new User({
    name,
    email,
    password: hashPassword,
  })

  try {
    await newUser.save()
    return new NextResponse("User has been created successfully", {
      status: 201,
    })
  } catch (err) {
    return NextResponse(err.message, {
      status: 500,
    })
  }
}
