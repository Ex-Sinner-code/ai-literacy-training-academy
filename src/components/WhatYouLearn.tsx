import { Brain, MessageSquare, Workflow, Sparkles, Code, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhatYouLearn = () => {
  const skills = [
    {
      icon: Brain,
      title: "Generative AI Fundamentals",
      description: "Understand how AI generates text, images, code, and more. Learn the basics that power modern AI tools.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Master ChatGPT & Prompting",
      description: "Learn effective prompting techniques to get better results from ChatGPT and other AI assistants.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Workflow,
      title: "AI Automation & Workflows",
      description: "Discover how to automate repetitive tasks and build efficient workflows using AI tools.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Sparkles,
      title: "AI Tools for Productivity",
      description: "Explore the best AI tools for writing, design, research, and productivity enhancement.",
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: Code,
      title: "AI for Developers",
      description: "Use AI coding assistants like GitHub Copilot to write better code faster and debug efficiently.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Practical AI Applications",
      description: "Real-world case studies and hands-on projects to apply AI in your work and daily life.",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            What You'll
            <span className="gradient-accent text-gradient"> Learn</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive, practical AI skills designed to empower you in the modern world.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground mb-4">
            And much more! Our curriculum evolves with the latest AI developments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
