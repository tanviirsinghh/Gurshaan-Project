import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import premiumProduct from "@/assets/premium-product.jpg";
import productGlasses from "@/assets/product-glasses-1.jpg";
import productSunglasses from "@/assets/product-sunglasses-1.jpg";

const Products = () => {
  // Generate dummy products
  const eyeglasses = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Classic Eyeglasses ${i + 1}`,
    price: 12490 + (i * 840),
    image: productGlasses,
  }));
  
  const sunglasses = Array.from({ length: 24 }, (_, i) => ({
    id: i + 25,
    name: `Premium Sunglasses ${i + 1}`,
    price: 16690 + (i * 840),
    image: productSunglasses,
  }));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Featured Premium Product */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-secondary rounded-lg overflow-hidden p-8">
            <div className="aspect-square">
              <img 
                src={premiumProduct} 
                alt="Premium Luxury Eyewear"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Luxury Gold Collection</h2>
              <p className="text-muted-foreground mb-6">
                Exquisite craftsmanship meets timeless elegance. Our signature piece 
                featuring 24k gold-plated frames and precision-cut lenses.
              </p>
              <p className="text-3xl font-bold text-accent mb-6">₹75,490</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Add to Cart
              </Button>
            </div>
          </div>
        </section>
        
        {/* Eyeglasses Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Eyeglasses</h2>
            <Link to="/all-products?category=eyeglasses">
              <Button variant="outline">See All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {eyeglasses.slice(0, 20).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
        
        {/* Sunglasses Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Sunglasses</h2>
            <Link to="/all-products?category=sunglasses">
              <Button variant="outline">See All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sunglasses.slice(0, 20).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
