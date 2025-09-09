"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AIVideoCreationPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          AI Video Creation
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Transform your ideas into videos instantly — just type your prompt and let Flowvid AI bring it to life.
        </p>

        {/* Feature Demo Placeholder */}
        <Card className="bg-black border-gray-800 mb-10">
          <CardHeader>
            <CardTitle>Prompt to Video</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex flex-col items-center justify-center border border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-500 mb-4">[ AI Video Generator UI Coming Soon ]</p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Try Sample Prompt
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="flex justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Start Creating
          </Button>
          <Button variant="outline" className="border-gray-700">
            Back to Features
          </Button>
        </div>
      </div>
    </div>
  )
}
