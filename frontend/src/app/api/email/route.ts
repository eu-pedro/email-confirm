import { api } from "@/app/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  const { searchParams } = new URL(request.url)

  const token = searchParams.get('token')

  await api.post("/confirm", {
    token
  })
  console.log("oioioioi")
  return NextResponse.redirect("http://localhost:3000")
}