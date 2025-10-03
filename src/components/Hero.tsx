import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Carousel } from "./ui/carousel";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [showHoverText1, setShowHoverText1] = useState(false);
  const [showHoverText2, setShowHoverText2] = useState(false);
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const handleMouseEnter1 = () => {
    setShowHoverText1(true);
  };

  const handleMouseLeave1 = () => {
    setShowHoverText1(false);
  };

  const handleMouseEnter2 = () => {
    setShowHoverText2(true);
  };

  const handleMouseLeave2 = () => {
    setShowHoverText2(false);
  };

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
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden px-6 md:px-16">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/INSTITUCIONAL-CALDEIRA.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/30 z-10" />
      )}

      {/* Conteúdo */}
      <motion.div
        className="relative z-20 text-left max-w-4xl flex flex-col gap-8 mt-[170px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo + Slogan */}
        <div className="flex flex-col text-left">
          <div className={`text-4xl md:text-3xl lg:text-7xl xl:text-5xl font-bold mb-4 ${
            isDark ? 'text-foreground' : 'text-white'
          }`}>
            <TextAnimate
              animation="blurInUp"
              by="word"
              duration={8}
            >
              Elevando sua essência com
            </TextAnimate>
            <span className="text-gold"> Beleza, Autocuidado e Bem-estar</span>.
          </div>
          
          <div className={`text-lg md:text-2xl lg:text-3xl xl:text-2xl font-light mt-[-10px] left-[2px] relative ${
            isDark ? 'text-foreground/80' : 'text-white'
          }`}>
            <TextAnimate
              animation="zoomIn"
              by="word"
              duration={10}
            >
              Beleza que transforma histórias. Realce sua essência e viva cada momento com mais brilho e confiança.
            </TextAnimate>
            <br />
            
          </div>
          
        </div>

         <div className="p-8 md:p-6 text-left max-w-2xl m-[-10px]">
         
         <div className="flex flex-col sm:flex-row gap-4 -ml-3 -mt-7">
          <button 
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            className={cn(
              "px-8 py-3 md:py-4 rounded-lg font-bold text-lg border hover:scale-105 transition-all duration-300 shadow-lg",
              isDark 
                ? "bg-card text-card-foreground border-primary hover:bg-primary/30"
                : "bg-gold-light text-gold-foreground border-gold hover:bg-gold"
            )}
          >
            Conhecer a B-Cosmetic
          </button>
          <button 
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className={cn(
              "bg-transparent px-8 py-3 md:py-4 rounded-lg font-bold text-lg border hover:scale-105 transition-all duration-300 shadow-lg",
              isDark 
                ? "text-foreground border-primary hover:bg-primary/30"
                : "text-gold border-gold hover:bg-gold/30"
            )}
          >
            Quero ser consultor exclusivo
          </button>
           
          {showHoverText1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-full left-2 mt-6 text-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight z-10"
            >
              Descubra nossa linha completa de produtos de beleza e bem-estar
            </motion.div>
          )}
          {showHoverText2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-full left-2 mt-6 text-foreground text-2xl md:text-3xl lg:text-4xl font-light leading-tight z-10"
            >
              Seja um distribuidor exclusivo B-Cosmetic
            </motion.div>
          )}
        </div>
        </div> 
        
        
      </motion.div>
      <div>

        <Carousel />
      </div>
    </section>
  );
};

export default Hero;
