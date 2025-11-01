import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, image, isNew }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-secondary">
            {isNew && (
              <div className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-bold">
                NEW
              </div>
            )}
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-2">{name}</h3>
            <p className="text-lg font-bold text-accent">₹{price.toLocaleString('en-IN')}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
