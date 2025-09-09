"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AiVideoEditingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          AI Video Editing
        </h1>
        <p className="text-gray-400 mb-12">
          Smart, automated editing tools that trim, enhance, and style your content in seconds.  
          (Coming Soon 🚧)
        </p>

        {/* Coming Soon Placeholder */}
        <Card className="bg-black border-gray-800 mb-10">
          <CardHeader>
            <CardTitle>Editing Workspace</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-500 mb-4">⚡ AI Editing Tools Coming Soon</p>
              <Button disabled className="bg-purple-600 opacity-50 cursor-not-allowed">
                Try Editing (Soon)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back button */}
        <Button variant="outline" className="border-gray-700">
          Back to Features
        </Button>
      </div>
    </div>
  )
}
