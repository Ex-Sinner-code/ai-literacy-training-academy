import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "100% Free - No hidden costs",
    "Live Q&A with expert facilitator",
    "Practical, hands-on learning",
    "Certificate of completion",
    "Join a community of learners",
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full text-white font-semibold mb-6">
                <Calendar className="w-4 h-4" />
                <span>Next Webinar Starting Soon</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Ready to Master AI?
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Join our next free AI Literacy Webinar and start your journey 
                to becoming AI-literate today.
              </p>
            </div>

            {/* Webinar Details */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm text-white/80">Date</div>
                <div className="font-bold text-white">Coming Soon</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm text-white/80">Duration</div>
                <div className="font-bold text-white">2 Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm text-white/80">Spots</div>
                <div className="font-bold text-white">Limited</div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="xl" 
                className="group text-lg shadow-xl"
              >
                Register for Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg"
              >
                Download Syllabus
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="text-center mt-8 text-white/80 text-sm">
              <p>✓ No credit card required • ✓ Instant access • ✓ Join 500+ learners</p>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg">
              Have questions? Email us at{" "}
              <a href="mailto:hello@ailiteracyacademy.org" className="underline font-semibold hover:text-accent transition-colors">
                hello@ailiteracyacademy.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
