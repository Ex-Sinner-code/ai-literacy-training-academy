import Hero from "@/components/Hero";
import WhyAI from "@/components/WhyAI";
import WhatYouLearn from "@/components/WhatYouLearn";
import Testimonials from "@/components/Testimonials";
import Facilitator from "@/components/Facilitator";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyAI />
      <WhatYouLearn />
      <Testimonials />
      <Facilitator />
      <FinalCTA />
    </div>
  );
};

export default Index;
