import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import User from "@/app/lib/models/users";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "Connected to database successfully" });
  } catch (error) {
    console.error("Error connecting to database:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to connect to database", details: errorMessage },
      { status: 500 },
    );
  }
}
