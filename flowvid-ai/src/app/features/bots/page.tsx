"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function BotsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Twitter, Telegram & Discord Bots
        </h1>
        <p className="text-gray-400 mb-12">
          Generate and deploy videos directly inside your favorite platforms with a single prompt.  
          (Coming Soon 🚧)
        </p>

        {/* Coming Soon Placeholder */}
        <Card className="bg-black border-gray-800 mb-10">
          <CardHeader>
            <CardTitle>Bot Integration Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-500 mb-4">🤖 Integration features coming soon</p>
              <Button disabled className="bg-purple-600 opacity-50 cursor-not-allowed">
                Connect a Bot (Soon)
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
