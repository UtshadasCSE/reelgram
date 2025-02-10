import { NextRequest, NextResponse } from "next/server";
import { connectionToDatabase } from "@/lib/db";
import User from "@/models/User";
import { log } from "console";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }
    // conntect database
    await connectionToDatabase();
    // check if the user is already in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }
    // create user in the database
    await User.create({ email, password });
    return NextResponse.json(
      { message: "User is registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    log(error);
    return NextResponse.json(
      { error: "Failed to registered user!" },
      { status: 201 }
    );
  }
}
