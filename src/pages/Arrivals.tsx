import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productGlasses from "@/assets/product-glasses-1.jpg";
import productSunglasses from "@/assets/product-sunglasses-1.jpg";

const Arrivals = () => {
  // Generate new arrival products
  const newArrivals = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? `New Eyeglasses ${i + 1}` : `New Sunglasses ${i + 1}`,
    price: 179 + (i * 12),
    image: i % 2 === 0 ? productGlasses : productSunglasses,
    isNew: true,
  }));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
          <p className="text-muted-foreground">
            Discover our latest collection of contemporary eyewear
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Arrivals;
