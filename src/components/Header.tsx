import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "/assets/Images/PLPB.png";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent animate-fade-in">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* <div
            className="text-2xl font-bold text-white animate-fade-in-left"
            onClick={() => navigate("/")}
          >
          </div> */}
          <img src={Logo} alt="PLBP image" onClick={() => navigate("/")} />

          <NavigationMenu className="animate-fade-in-right">
            <NavigationMenuList className="flex space-x-8">
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("/")}
                >
                  HOME
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("aboutus")}
                >
                  ABOUT GROUP
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  PROJECTS
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                  onClick={() => navigate("newsMedia")}
                >
                  NEWSROOM
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  BLOGS
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  CONTACT US
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="ghost"
                  className="text-white hover:text-black transition-all duration-300 hover:scale-105"
                >
                  INVESTMENT
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
