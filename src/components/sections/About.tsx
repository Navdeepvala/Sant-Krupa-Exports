import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on the quality of our products, ensuring premium jaggery every time."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and supporting sustainable farming communities."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Trusted by clients worldwide for consistent quality and timely deliveries."
    }
  ];

  const features = [
    "100% Pure & Organic Jaggery",
    "No Chemical Processing",
    "Traditional Production Methods",
    "Certified Quality Standards",
    "Sustainable Sourcing",
    "Global Export Experience"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Bringing Nature's Sweetness to the World
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sant Krupa Exports is a leading name in the jaggery export industry, dedicated to
              delivering the highest quality organic jaggery products to markets across the globe.
              With over a decade of experience, we've built strong relationships with farmers and
              clients worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality, sustainability, and customer satisfaction has made us a
              trusted partner for businesses seeking premium natural sweeteners. We take pride in
              preserving traditional methods while meeting modern quality standards.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="flex items-start space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:border-primary"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
