import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingBag, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // Detecta se estamos na página inicial
  const isHomePage = location.pathname === "/";
  
  // Detecta se estamos na página Quero Ser Consultor
  const isConsultorPage = location.pathname === "/faca-parte/quero-ser-um-consultor";

  const navigation = [
    { 
      name: "Home", 
      href: isHomePage ? "#home" : "/#home",
      scrollTo: "home"
    },
    { 
      name: "Sobre a Bellys", 
      href: isHomePage ? "#sobre" : "/#sobre",
      scrollTo: "sobre"
    },
    { 
      name: "Nosso Propósito", 
      href: isHomePage ? "#solucoes" : "/#solucoes",
      scrollTo: "solucoes"
    },
    { 
      name: "Entre em Contato", 
      href: isHomePage ? "#contato" : "/#contato",
      scrollTo: "contato"
    },
  ];

  // Função para lidar com cliques nos links de navegação
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, scrollTo: string) => {
    if (isHomePage) {
      // Se estamos na página inicial, faz scroll para a seção
      e.preventDefault();
      
      if (scrollTo === 'home') {
        // Para Home, vai para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Para outras seções, faz scroll para o elemento
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    // Se não estamos na página inicial, o Link do React Router cuida da navegação
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkTheme = () => {
      if (theme === "system") {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      } else {
        setIsDark(theme === "dark");
      }
    };

    checkTheme();

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", checkTheme);
      return () => mediaQuery.removeEventListener("change", checkTheme);
    }
  }, [theme]);

  return (
    <header className="w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300">
      {/* Topbar */}
          <div className={cn(
            "text-sm py-1 px-4 flex justify-end gap-6 items-center border-b transition-colors duration-300",
            scrolled 
              ? "bg-background/90 text-foreground border-primary/90" 
              : isConsultorPage && !isDark
                ? "bg-gold/20 text-black border-black/90"
                : isDark 
                  ? "bg-transparent text-white border-primary/90"
                  : "bg-black/40 text-gold border-gold/90"
          )}>
        <ThemeToggle />
        <a href="#" className={`hover:underline transition-colors duration-200 ${
          isConsultorPage && !isDark ? 'text-black hover:text-white' : ''
        }`}>Vitrine Virtual</a>
        <a href="#" className={`hover:underline transition-colors duration-200 ${
          isConsultorPage && !isDark ? 'text-black hover:text-white' : ''
        }`}>Fale Conosco</a>
        <div className="flex items-center gap-1">
          <img src="https://flagcdn.com/br.svg" alt="BR" className="w-5 h-3" />
          <span>BR</span>
        </div>
      </div>

      {/* Navbar */}
      <div className={cn(
        scrolled 
          ? isConsultorPage && !isDark
            ? "bg-black/90"
            : isDark 
              ? "bg-primary/20" 
              : "bg-white/90"
          : isConsultorPage && !isDark
            ? "bg-black/70"
            : isDark 
              ? "bg-primary/25" 
              : "bg-white/95",
        "backdrop-blur-lg py-3 transition-colors duration-300"
      )}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img 
              src={isDark ? "/src/assets/bellys-s.png" : "/src/assets/b-dourada.png"} 
              alt="Bellys Logo" 
              className="h-16 w-auto transition-all duration-300"
            />
            <span className={cn(
              "font-bold text-3xl transition-colors duration-300", 
              scrolled 
                ? "text-foreground" 
                : isConsultorPage && !isDark
                  ? "text-white"
                  : isDark 
                    ? "text-white" 
                    : "text-black"
            )}>
            Cosmetic
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(e as any, item.scrollTo)}
                className={cn(
                  "transition-colors duration-200 font-medium text-lg",
                  scrolled 
                    ? "text-foreground hover:text-primary" 
                    : isConsultorPage && !isDark
                      ? "text-white hover:text-gold"
                      : isDark 
                        ? "text-white hover:text-primary" 
                        : "text-gold hover:text-gold-dark"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Ações */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link to="/faca-parte/quero-ser-um-consultor">
              <Button className={cn(
                "font-light border transition-colors duration-300",
                scrolled
                  ? "text-foreground border-border bg-primary/20 hover:bg-primary hover:text-primary-foreground"
                  : isConsultorPage && !isDark
                    ? "text-gold border-gold bg-gold/20 hover:bg-gold hover:text-white font-bold shadow-lg"
                    : isDark
                      ? "text-white border-white bg-primary/20 hover:bg-primary hover:text-primary-foreground"
                      : "text-white border-gold bg-gradient-to-r from-gold-dark to-gold hover:from-gold hover:to-gold-light hover:text-gold-foreground"
              )}>
                Faça Parte
              </Button>
            </Link>
            <Button className={cn(
              "font-light border transition-colors duration-300",
              scrolled
                ? "text-foreground border-border bg-primary/20 hover:bg-primary hover:text-primary-foreground"
                : isConsultorPage && !isDark
                  ? "text-white border-white bg-transparent hover:bg-white hover:text-black"
                  : isDark
                    ? "text-white border-white bg-primary/20 hover:bg-primary hover:text-primary-foreground"
                    : "text-white border-gold bg-gradient-to-r from-gold-dark to-gold hover:from-gold hover:to-gold-light hover:text-gold-foreground"
            )}>
              <User className="w-4 h-4 mr-1" />
              Fale com um Especialista
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