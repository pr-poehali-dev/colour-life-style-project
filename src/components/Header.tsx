
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink 
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tight">Colour Life Style</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="text-white hover:text-purple-200 font-medium">Главная</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/parks" className="text-white hover:text-purple-200 font-medium">Парки развлечений</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/restaurants" className="text-white hover:text-purple-200 font-medium">Рестораны</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/hotels" className="text-white hover:text-purple-200 font-medium">Отели</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/tours" className="text-white hover:text-purple-200 font-medium">Туры</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-purple-100">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
