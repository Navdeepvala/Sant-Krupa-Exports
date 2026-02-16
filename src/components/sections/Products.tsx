import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Package, Droplet, Grid3x3, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Product Images
import jaggeryImg from "@/assets/jaggery.jpeg";
import gheeImg from "@/assets/ghee.jpeg";
import sesameImg from "@/assets/til.jpeg";
import groundnutOilImg from "@/assets/ground_nut_oil.jpeg";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Leaf,
      title: "Organic Jaggery",
      description: "100% pure organic jaggery made from naturally grown sugarcane, rich in minerals.",
      features: ["Chemical-free", "Rich in iron", "Natural sweetener"],
      color: "from-amber-600/20 to-orange-600/20",
      image: jaggeryImg
    },
    {
      icon: Package,
      title: "Pure Desi Ghee",
      description: "Premium quality pure desi ghee made using traditional bilona method.",
      features: ["Bilona method", "A2 cow milk", "Rich aroma"],
      color: "from-yellow-500/20 to-amber-500/20",
      image: gheeImg
    },
    {
      icon: Grid3x3,
      title: "Sesame (Til)",
      description: "High-quality sesame seeds, carefully cleaned and sorted for premium grade.",
      features: ["99% purity", "High oil content", "Premium quality"],
      color: "from-gray-400/20 to-gray-600/20",
      image: sesameImg
    },
    {
      icon: Droplet,
      title: "Groundnut Oil",
      description: "Cold-pressed groundnut oil extracted from premium hand-picked peanuts.",
      features: ["Cold pressed", "No chemicals", "Rich flavor"],
      color: "from-yellow-400/20 to-orange-400/20",
      image: groundnutOilImg
    }
  ];

  return (
    <section id="products" className="py-20 bg-background scroll-mt-20">
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
              <Card className="h-full border-2 hover:border-primary transition-all duration-300 group hover:shadow-xl overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
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
