import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Package, Droplet, Grid3x3, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Leaf,
      title: "Organic Jaggery",
      description: "100% pure organic jaggery made from naturally grown sugarcane, rich in minerals and nutrients.",
      features: ["Chemical-free", "Rich in iron", "Natural sweetener"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Package,
      title: "Ghee",
      description: "Finely ground jaggery powder perfect for cooking, baking, and beverage preparation.",
      features: ["Easy to dissolve", "Versatile use", "Long shelf life"],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: Grid3x3,
      title: "Sesame Seed (Til)",
      description: "Convenient cube-shaped jaggery for portion control and easy storage.",
      features: ["Uniform size", "Portion control", "Premium quality"],
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: Droplet,
      title: "Peanuts",
      description: "Ready-to-use liquid jaggery syrup ideal for food processing and manufacturing.",
      features: ["Ready to use", "Industrial grade", "Consistent quality"],
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
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
            Our Products
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Premium organic agricultural products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of high-quality products, each crafted with care to
            meet international standards.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 group hover:shadow-xl">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Products Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-primary to-accent text-white rounded-3xl p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Looking for Custom Solutions?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            We offer customized packaging and bulk orders tailored to your specific requirements.
            Contact us to discuss your needs.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Request Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
