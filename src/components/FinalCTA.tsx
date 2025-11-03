import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "Limited slots only",
    "Live Q&A with expert facilitator",
    "Practical, hands-on learning",
    "Access to exclusive AI tools",
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
                <span>Registration Open Now</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Ready to Master AI?
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                Secure your spot in our AI Literacy Class and transform your future with practical AI skills.
              </p>
            </div>

            {/* Class Details */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm text-white/80">Registration Period</div>
                <div className="font-bold text-white">Oct 31st - Nov 14th, 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm text-white/80">Training Period</div>
                <div className="font-bold text-white">30 Days • 8:30 PM Daily</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm text-white/80">Available Spots</div>
                <div className="font-bold text-white">Limited Slots Only</div>
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
                asChild
              >
                <a href="https://wa.me/2347033554845?text=Hey%20Torkuma%2C%20I%20want%20to%20register%20for%20the%20AI%20Literacy%20Masterclass" target="_blank" rel="noopener noreferrer">
                  Register Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg"
                asChild
              >
                <a href="https://drive.google.com/file/d/1LxA-tbjXqngymQn3jV4vI0e0AKeL-ZW2/view" target="_blank" rel="noopener noreferrer">
                  Download Syllabus
                </a>
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="text-center mt-8 text-white/80 text-sm">
              <p>✓ Limited spots available • ✓ Starts Nov 15th • ✓ Join 500+ learners</p>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg">
              Have questions? Email us at{" "}
              <a href="mailto:ai@exsinnermedia.com" className="underline font-semibold hover:text-accent transition-colors">
                ai@exsinnermedia.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
