import { TrendingUp, Users, Zap, Globe } from "lucide-react";
import aiStats from "@/assets/ai-stats.png";

const WhyAI = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "AI is Growing Fast",
      description: "85% of companies are adopting AI, creating millions of opportunities for those with AI skills.",
    },
    {
      icon: Users,
      title: "Jobs of Tomorrow",
      description: "AI literacy is becoming as essential as reading and writing for career success.",
    },
    {
      icon: Zap,
      title: "Boost Productivity",
      description: "Learn to use AI tools to automate tasks and increase your efficiency by 10x.",
    },
    {
      icon: Globe,
      title: "Stay Competitive",
      description: "Don't get left behind. Understand AI to remain relevant in a rapidly changing world.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Why AI Literacy 
            <span className="gradient-hero text-gradient"> Matters Today</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The world is changing faster than ever. AI is not the future—it's the present. 
            Are you ready?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 gradient-hero rounded-full opacity-10 blur-3xl" />
              <img 
                src={aiStats} 
                alt="AI Growth Statistics" 
                className="relative z-10 w-full max-w-lg mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right: Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAI;
