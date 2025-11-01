import { Award, BookOpen, Users, Sparkles } from "lucide-react";
import facilitatorImg from "@/assets/facilitator.jpg";

const Facilitator = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Meet Your
            <span className="gradient-hero text-gradient"> Facilitator</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Learn from an experienced AI educator passionate about empowering the next generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-64 h-64 gradient-hero rounded-full opacity-10 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 gradient-accent rounded-full opacity-10 blur-3xl" />
            
            <div className="relative">
              <img 
                src={facilitatorImg} 
                alt="Torkuma - AI Literacy Facilitator" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/10"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card backdrop-blur-md px-6 py-3 rounded-full border-2 border-primary shadow-xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="font-bold text-foreground">AI Expert & Educator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-3xl font-bold mb-2">Torkuma</h3>
              <p className="text-xl text-muted-foreground mb-4">Founder & Lead Facilitator</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A visionary educator passionate about democratizing AI education. With years of experience 
              in technology and teaching, Torkuma makes complex AI concepts accessible and practical for everyone.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Certified AI Expert</div>
                  <div className="text-sm text-muted-foreground">Industry-recognized credentials</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">500+ Students</div>
                  <div className="text-sm text-muted-foreground">Successfully trained</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Practical Approach</div>
                  <div className="text-sm text-muted-foreground">Hands-on, real-world focus</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Passionate Educator</div>
                  <div className="text-sm text-muted-foreground">Committed to your success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilitator;
