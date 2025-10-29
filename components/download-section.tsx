"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, FileArchive, Loader2 } from "lucide-react"

export function DownloadSection() {
  const [loading, setLoading] = useState<"crx" | "zip" | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async (type: "crx" | "zip") => {
    setLoading(type)
    setError(null)
    try {
      const response = await fetch(`/api/download/${type}`)
      if (!response.ok) {
        throw new Error(`Download failed with status ${response.status}`)
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = type === "crx" ? "intuitAI.crx" : "intuitAI.zip"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      console.error("[v0] Download error:", err)
      setError(`Failed to download ${type.toUpperCase()} file. Please try again.`)
    } finally {
      setLoading(null)
    }
  }

  return (
    <section className="mb-8 p-6 bg-card/40 backdrop-blur-sm border border-border/20 rounded-lg hover:border-primary/40 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6">Download intuitAI</h2>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* CRX Download */}
        <div className="flex flex-col gap-3 p-4 rounded-lg bg-background/50 border border-border/20 hover:border-primary/40 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">CRX File</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Direct installation file for Chrome. Recommended for most users.
          </p>
          <Button
            onClick={() => handleDownload("crx")}
            disabled={loading !== null}
            className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
          >
            {loading === "crx" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download CRX
              </>
            )}
          </Button>
        </div>

        {/* ZIP Download */}
        <div className="flex flex-col gap-3 p-4 rounded-lg bg-background/50 border border-border/20 hover:border-accent/40 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <FileArchive className="w-5 h-5 text-accent" />
            <h3 className="font-semibold">ZIP File</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Source code archive. Useful for developers and customization.
          </p>
          <Button
            onClick={() => handleDownload("zip")}
            disabled={loading !== null}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
          >
            {loading === "zip" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <FileArchive className="w-4 h-4" />
                Download ZIP
              </>
            )}
          </Button>
        </div>

        {/* GitHub Link */}
        <div className="flex flex-col gap-3 p-4 rounded-lg bg-background/50 border border-border/20 hover:border-muted-foreground/40 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Github className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold">View Source</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Open source project. Contribute and view the code on GitHub.
          </p>
          <Button asChild className="w-full bg-muted hover:bg-muted/80 text-muted-foreground gap-2">
            <a href="https://github.com/Adarsh-codesOP/IntuitAI.git" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
