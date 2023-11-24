"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Text / Code Generator",
    avatar: "J",
    title: "GPT - 4",
    description: "Uses openai's GPT-4 model to generate text/code for your projects.",
  },
  {
    name: "Photo Generator",
    avatar: "A",
    title: "DALL - E",
    description: "Uses openai's DALL-E model to generate images for your projects.",
  },
  {
    name: "Video Generator",
    avatar: "M",
    title: "zeroscope-v2-xl",
    description: "Uses replicate's zeroscope-v2-xl model to generate videos for your projects.",
  },
  {
    name: "Music Generator",
    avatar: "M",
    title: "Riffusion",
    description: "Uses replicate's riffusion model to generate music for your projects.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">AI Platforms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}