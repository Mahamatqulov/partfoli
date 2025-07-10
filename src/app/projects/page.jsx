import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Loyihalar() {
  const project = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "API Integration"],
      github: "#",
      live: "#",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-14 animate-slide-top deyal-600">
      {project.map((project, index) => (
        <Card
          key={index}
          className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 text-gray-900 hover:bg-white"
              >
                <GitHubLogoIcon className="h-4 w-4 mr-2" />
                Code
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 text-gray-900 hover:bg-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live
              </Button>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Loyihalar;
