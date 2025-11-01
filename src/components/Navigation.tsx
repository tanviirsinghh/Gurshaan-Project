import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight">
            VISIONARY
          </Link>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/products') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/arrivals" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/arrivals') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Arrivals
            </Link>
            <Link 
              to="/collection" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/collection') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/about') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              About Us
            </Link>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
