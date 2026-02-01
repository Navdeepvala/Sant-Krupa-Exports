import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Truck, Users, Leaf, ShieldCheck } from "lucide-react";

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified organic jaggery that meets international quality standards and safety regulations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 15+ countries with established logistics and distribution networks worldwide."
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Efficient supply chain management ensuring your orders reach on time, every time."
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team ready to assist you with all your queries and requirements."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Eco-friendly production methods supporting local farmers and environmental conservation."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks at every stage to ensure product excellence."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Your Trusted Agricultural products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with a dedicated team committed to excellence
            in every aspect of agricultural products production and export.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary h-full">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-secondary to-secondary/90 rounded-3xl p-8 sm:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Countries Served" },
              { value: "500+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
              { value: "100%", label: "Quality Assured" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
