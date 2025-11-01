import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productGlasses from "@/assets/product-glasses-1.jpg";
import productSunglasses from "@/assets/product-sunglasses-1.jpg";

const AllProducts = () => {
  // Generate comprehensive product list
  const allProducts = Array.from({ length: 52 }, (_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? `Eyeglasses Model ${i + 1}` : `Sunglasses Model ${i + 1}`,
    price: 10790 + (i * 672),
    image: i % 2 === 0 ? productGlasses : productSunglasses,
  }));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete collection of premium eyewear
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProducts;
