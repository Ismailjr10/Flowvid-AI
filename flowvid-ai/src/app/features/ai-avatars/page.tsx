"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AiAvatarsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          AI Avatars
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Bring your scripts to life with realistic AI avatars that talk, move, 
          and deliver your message in seconds.
        </p>

        {/* Demo Placeholder */}
        <Card className="bg-black border-gray-800 mb-10">
          <CardHeader>
            <CardTitle>Generate an AI Avatar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-500 mb-4">[ AI Avatar UI Coming Soon ]</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Try Avatars
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="flex justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Start Now
          </Button>
          <Button variant="outline" className="border-gray-700">
            Back to Features
          </Button>
        </div>
      </div>
    </div>
  )
}
