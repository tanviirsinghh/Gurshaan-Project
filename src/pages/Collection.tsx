import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Navigation, Footer } from "../components/SharedComponents";
import collectionMen from "../assets/collection-men.jpg";
import collectionWomen from "../assets/collection-women.jpg";

const Collection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore curated collections designed specifically for men and women, 
            each featuring unique styles that complement your personality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Men's Collection */}
          <Link to="/all-products?collection=men" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={collectionMen} 
                alt="Men's Collection"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-semibold"
                >
                  Men
                </Button>
              </div>
            </div>
          </Link>
          
          {/* Women's Collection */}
          <Link to="/all-products?collection=women" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={collectionWomen} 
                alt="Women's Collection"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 px-12 py-6 text-xl font-semibold"
                >
                  Women
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
