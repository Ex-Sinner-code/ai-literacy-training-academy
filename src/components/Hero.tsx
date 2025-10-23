import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import facilitator from "@/assets/facilitator.jpg";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">100% Free AI Education</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Master Practical
              <span className="block gradient-accent text-gradient">AI Skills</span>
              That Matter
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Join our free AI Literacy Webinar and learn how to use Generative AI, 
              ChatGPT, and AI automation tools to thrive in the AI era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="accent" size="xl" className="group">
                Join the Webinar
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Students Empowered</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Free Learning</div>
              </div>
              <div className="w-px h-12 bg-white/30" />
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm text-white/80">Student Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Facilitator Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 gradient-accent rounded-full opacity-20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 gradient-secondary rounded-full opacity-20 blur-3xl" />
              
              {/* Image */}
              <div className="relative z-10">
                <img 
                  src={facilitator} 
                  alt="Torkuma - AI Literacy Facilitator" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto border-4 border-white/20"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-xl">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Your Facilitator</div>
                    <div className="text-lg font-bold text-foreground">Torkuma</div>
                  </div>
                </div>
              </div>
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
