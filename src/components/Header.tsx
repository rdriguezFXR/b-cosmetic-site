import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingBag, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "Sobre a Bellys", href: "#sobre" },
    { name: "Nosso Propósito", href: "#solucoes" },
    { name: "Entre em Contato", href: "#contato" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300">
      {/* Topbar */}
      <div className={cn(
        "text-sm py-4 px-4 flex justify-end gap-6 items-center border-b border-[#622A73]/90 transition-colors duration-300",
        scrolled ? "bg-black/90 text-white" : "bg-transparent text-white"
      )}>
        <a href="#" className="hover:underline">Vitrine Virtual</a>
        <a href="#" className="hover:underline">Fale Conosco</a>
        <div className="flex items-center gap-1">
          <img src="https://flagcdn.com/br.svg" alt="BR" className="w-5 h-3" />
          <span>BR</span>
        </div>
      </div>

      {/* Navbar */}
      <div className={cn(
        scrolled ? "bg-[#622A73]/20" : "bg-[#622A73]/25",
        "backdrop-blur-lg py-3 transition-colors duration-300"
      )}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/bellys-s.png" 
              alt="Bellys Logo" 
              className="h-12 w-auto transition-all duration-300"
            />
            <span className={cn("font-bold text-2xl transition-colors duration-300", scrolled ? "text-black" : "text-white")}>
            Cosmetic
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors duration-200 font-medium",
                  scrolled ? "text-black hover:text-[#622A73]-600" : "text-white hover:text-[#622A73]-600"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Ações */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button className={cn(
              "font-light border transition-colors duration-300",
              scrolled
                ? "text-white border-white bg-[#8B4A9B]/20 hover:bg-[#622A73] hover:text-white"
                : "text-white border-white bg-[#8B4A9B]/20 hover:bg-[#622A73] hover:text-white"
            )}>
              <User className="w-4 h-4 mr-1" />
              Encontre um Especialista
            </Button>
            <Button className={cn(
              "font-light border transition-colors duration-300",
              scrolled
                ? "text-white border-white bg-[#8B4A9B]/20 hover:bg-[#622A73] hover:text-white"
                : "text-white border-white bg-[#8B4A9B]/20 hover:bg-[#622A73] hover:text-white"
            )}>
              <ShoppingBag className="w-4 h-4 mr-1" />
              Comprar Online
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;