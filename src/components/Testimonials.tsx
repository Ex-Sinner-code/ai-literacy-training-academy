import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adanna Okonkwo",
      role: "Marketing Professional",
      content: "This webinar completely changed how I work. I now use AI to create content 10x faster. The practical approach made all the difference!",
      rating: 5,
      avatar: "A",
    },
    {
      name: "Chidi Eze",
      role: "Software Developer",
      content: "Torkuma breaks down complex AI concepts into simple, actionable steps. I'm now using AI coding tools daily and my productivity has skyrocketed.",
      rating: 5,
      avatar: "C",
    },
    {
      name: "Fatima Hassan",
      role: "Student",
      content: "As a student, learning AI felt overwhelming. This webinar made it accessible and fun. I highly recommend it to anyone starting their AI journey!",
      rating: 5,
      avatar: "F",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            What Our
            <span className="gradient-secondary text-gradient"> Community Says</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of learners who've transformed their lives with AI literacy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
          {[
            { value: "500+", label: "Students Trained" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "Limited", label: "Slots Available" },
            { value: "30 Days", label: "Intensive Training" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.45 + index * 0.1}s` }}
            >
              <div className="text-4xl font-extrabold gradient-hero text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
