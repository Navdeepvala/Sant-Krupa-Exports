import { motion } from "framer-motion";
import { Leaf, Package, Droplet, Grid3x3, Star, ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProductsPage = () => {
  const products = [
    {
      icon: Leaf,
      title: "Organic Jaggery",
      description: "100% pure organic jaggery made from naturally grown sugarcane, rich in minerals and nutrients. Our jaggery is processed using traditional methods to retain its natural goodness.",
      features: ["Chemical-free", "Rich in iron", "Natural sweetener", "Traditional processing", "No preservatives"],
      color: "from-green-500/20 to-emerald-500/20",
      gradient: "from-green-500 to-emerald-600",
      image: "/jaggery.jpg",
      category: "Sweeteners"
    },
    {
      icon: Package,
      title: "Pure Desi Ghee",
      description: "Premium quality pure desi ghee made from fresh cream using traditional bilona method. Rich in vitamins A, D, E, and K with authentic aroma and taste.",
      features: ["Bilona method", "A2 cow milk", "Rich aroma", "No additives", "Lab tested"],
      color: "from-amber-500/20 to-orange-500/20",
      gradient: "from-amber-500 to-orange-600",
      image: "/ghee.jpg",
      category: "Dairy"
    },
    {
      icon: Grid3x3,
      title: "Sesame Seeds (Til)",
      description: "High-quality white and black sesame seeds, carefully cleaned and sorted. Perfect for oil extraction, cooking, and confectionery applications.",
      features: ["99% purity", "High oil content", "Premium quality", "Sorted & cleaned", "Export grade"],
      color: "from-yellow-500/20 to-amber-500/20",
      gradient: "from-yellow-500 to-amber-600",
      image: "/sesame.jpg",
      category: "Seeds & Grains"
    },
    {
      icon: Droplet,
      title: "Premium Peanuts",
      description: "Bold and Java peanuts sourced from the finest farms. Ideal for oil mills, confectionery, and direct consumption with consistent size and quality.",
      features: ["Hand-picked", "High oil content", "Uniform size", "Fresh harvest", "Vacuum packed"],
      color: "from-orange-500/20 to-red-500/20",
      gradient: "from-orange-500 to-red-600",
      image: "/peanuts.jpg",
      category: "Nuts"
    },
    {
      icon: Leaf,
      title: "Cumin Seeds (Jeera)",
      description: "Aromatic cumin seeds with strong flavor profile, perfect for culinary use and oil extraction. Known for their digestive benefits and rich taste.",
      features: ["Strong aroma", "High volatile oil", "Machine cleaned", "Premium grade", "Sorted quality"],
      color: "from-yellow-600/20 to-amber-600/20",
      gradient: "from-yellow-600 to-amber-700",
      image: "/cumin.jpg",
      category: "Spices"
    },
    {
      icon: Grid3x3,
      title: "Fennel Seeds (Saunf)",
      description: "Premium quality fennel seeds with sweet aromatic flavor. Used extensively in cooking, mouth fresheners, and traditional medicine preparations.",
      features: ["Sweet aroma", "Natural green color", "Export quality", "Clean sorted", "Fresh stock"],
      color: "from-teal-500/20 to-green-500/20",
      gradient: "from-teal-500 to-green-600",
      image: "/fennel.jpg",
      category: "Spices"
    },
    {
      icon: Package,
      title: "Groundnut Oil",
      description: "Cold-pressed groundnut oil extracted from premium peanuts. Perfect for cooking with high smoke point and rich nutty flavor.",
      features: ["Cold pressed", "No chemicals", "High smoke point", "Rich flavor", "Healthy cooking"],
      color: "from-yellow-400/20 to-orange-400/20",
      gradient: "from-yellow-400 to-orange-500",
      image: "/groundnut-oil.jpg",
      category: "Oils"
    },
    {
      icon: Droplet,
      title: "Castor Seeds",
      description: "High-quality castor seeds with excellent oil content. Widely used in industrial applications, pharmaceuticals, and cosmetic manufacturing.",
      features: ["High oil content", "Industrial grade", "Cleaned & sorted", "Bulk available", "Consistent quality"],
      color: "from-purple-500/20 to-indigo-500/20",
      gradient: "from-purple-500 to-indigo-600",
      image: "/castor.jpg",
      category: "Industrial Seeds"
    }
  ];

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px), 
                             radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Premium Quality Products
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our Complete
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Product Range
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our extensive collection of premium organic agricultural products,
              sourced directly from trusted farms and processed with care to meet international quality standards.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { number: "8+", label: "Products" },
                { number: "20+", label: "Countries Served" },
                { number: "100%", label: "Organic" },
                { number: "8+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-border/50 bg-muted/30 sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="default" size="sm" className="rounded-full">
              All Products
            </Button>
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
                className="group"
              >
                <Card className="h-full border-2 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/10">
                  {/* Product Image Placeholder with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${product.gradient} p-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                    <product.icon className="w-20 h-20 text-white relative z-10 drop-shadow-lg" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 right-4 bg-white/90 text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Features */}
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Action Button */}
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary text-white rounded-3xl p-8 sm:p-12 lg:p-16"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Need Custom Solutions?
              </h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                We offer customized packaging, bulk orders, and private labeling tailored to your specific requirements.
                Our team is ready to help you find the perfect solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  <Link to="/#contact">
                    Contact Our Team
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="tel:+919876543210">
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product we export undergoes rigorous quality checks to ensure it meets international standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌿",
                title: "100% Organic",
                description: "All products are sourced from certified organic farms"
              },
              {
                icon: "🔬",
                title: "Lab Tested",
                description: "Every batch is tested for quality and purity"
              },
              {
                icon: "📦",
                title: "Custom Packaging",
                description: "Flexible packaging options for your needs"
              },
              {
                icon: "🌍",
                title: "Global Shipping",
                description: "We ship to over 20+ countries worldwide"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
