import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, image, isNew }: ProductCardProps) => {
  return (
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
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-accent">${price}</p>
            <Button size="sm" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
