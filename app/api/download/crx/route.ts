import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    )

    // Download the CRX file from Supabase storage
    const { data, error } = await supabase.storage.from("extensions").download("intuitAI.crx")

    if (error || !data) {
      console.error("[v0] Supabase download error:", error)
      return NextResponse.json({ error: "Failed to download CRX file from storage" }, { status: 500 })
    }

    // Convert blob to buffer
    const buffer = await data.arrayBuffer()

    const response = new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/x-chrome-extension",
        "Content-Disposition": 'attachment; filename="intuitAI.crx"',
        "Cache-Control": "public, max-age=3600",
      },
    })

    return response
  } catch (error) {
    console.error("[v0] CRX download error:", error)
    return NextResponse.json({ error: "Failed to download CRX file" }, { status: 500 })
  }
}
