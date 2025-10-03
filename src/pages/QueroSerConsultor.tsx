import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const QueroSerConsultor = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [showHoverText, setShowHoverText] = useState(false);

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

  // Escolhe o banner baseado no tema
  const bannerImage = isDark 
    ? "/src/assets/banner-quero-ser-consultor-desktop-2.png"
    : "/src/assets/banner-quero-ser-consultor-desktop-temabranco-3.png";

  return (
    <div className={`min-h-screen ${isDark ? 'bg-background' : 'bg-white'}`}>
      {/* Banner Hero Section */}
      <div className="relative h-screen flex items-center justify-center  ">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={bannerImage}
            alt="Banner Quero Ser Consultor"
            className="w-full h-full object-cover"
          />
          
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center pt-16">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center w-full">
            
            {/* Text Content */}
            <div className="text-left -w-2xl mt-[140px]">
              

              {/* Main Heading */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                Venha ser um Consultor {" "}
                <span className={isDark ? "text-purple-800" : "text-gold"}>B-</span>Cosmetic
              </h1>

              {/* Description */}
              <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-md mt-1 ${
                isDark ? 'text-white/90' : 'text-black/80'
              }`}>
              Construa sua liberdade financeira ajudando pessoas a se sentirem mais bonitas e confiantes.             
               </p>

              {/* CTA Button with Hover */}
              <div className="flex justify-start relative mt-10">
                <Button 
                  className={`px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-medium rounded-lg flex items-center gap-2 group shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative z-10 ${
                    isDark 
                      ? 'bg-purple-900 hover:bg-purple-800 text-white' 
                      : 'bg-gold hover:bg-gold-dark text-white'
                  }`}
                  onMouseEnter={() => setShowHoverText(true)}
                  onMouseLeave={() => setShowHoverText(false)}
                >
                  SEJA UM CONSULTOR
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Hover Text */}
                {showHoverText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute left-[290px] m-0 top-5 transform -translate-y-1/2 backdrop-blur-sm
                     px-4 py-2 rounded-lg shadow-xl border whitespace-nowrap font-bold text-base z-20 ${
                       isDark 
                         ? 'bg-white/95 text-purple-900 border-purple-200' 
                         : 'bg-black/80 text-white border-black/50 shadow-black/50'
                     }`}
                  >
                    VENHA FAZER PARTE DESSE TIME!
                    <div className={`absolute left-90 top-1/2 transform -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-3 border-b-3 border-r-3 border-transparent ${
                      isDark ? 'border-r-white/95' : 'border-r-black/80'
                    }`}></div>
                  </motion.div>
                )}
              </div>

              
            </div>

            {/* Right Section - Empty for balance */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/* New Beginning Section */}
      <div className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 leading-tight">
              Abra as portas para um{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-black">
                novo ciclo na B-Cosmetic
              </span>.
            </h2>
            <p className="text-lg md:text-xl text-purple-800 leading-relaxed">
              A Hinode te mostra uma realidade onde seus sonhos não têm limites, e cada dia é uma nova chance de se desenvolver, crescer e transformar a sua vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueroSerConsultor;
