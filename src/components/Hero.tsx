import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/80" />
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rotate-45" />
        <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-accent rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-secondary rotate-12" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-white font-semibold">AI Literacy Class • Limited to 150 Spots</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6 animate-fade-in">
            Master AI in 30 Days
            <span className="block mt-2 gradient-accent text-gradient">Transform Your Future</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl leading-relaxed mb-8 animate-fade-in">
            Learn practical AI skills to boost your career, productivity, and creativity.
            Join our intensive training program starting November 15th.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button variant="accent" size="xl" className="group">
              Register for the AI Literacy Class
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">150</div>
              <div className="text-sm text-white/80">Limited Spots</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">30 Days</div>
              <div className="text-sm text-white/80">Intensive Training</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">Daily</div>
              <div className="text-sm text-white/80">8:30 PM Sessions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
