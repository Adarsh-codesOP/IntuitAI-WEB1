import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    )

    const { data, error } = await supabase.storage.from("extensions").download("intuitAI.zip")

    if (error || !data) {
      console.error(" Supabase download error:", error)
      return NextResponse.json({ error: "Failed to download ZIP file from storage" }, { status: 500 })
    }

    // Convert blob to buffer
    const buffer = await data.arrayBuffer()

    const response = new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="intuitAI.zip"',
        "Cache-Control": "public, max-age=3600",
      },
    })

    return response
  } catch (error) {
    console.error("ZIP download error:", error)
    return NextResponse.json({ error: "Failed to download ZIP file" }, { status: 500 })
  }
}
