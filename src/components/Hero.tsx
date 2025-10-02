import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Carousel } from "./ui/carousel";

const Hero = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/30 z-10" />

      {/* Conteúdo */}
      <motion.div
        className="relative z-20 text-left max-w-4xl flex flex-col gap-8 mt-[170px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo + Slogan */}
        <div className="flex flex-col text-left">
          <TextAnimate
            animation="blurInUp"
            by="word"
            duration={8}
            className="text-white text-4xl md:text-3xl lg:text-7xl xl:text-7xl font-bold mb-4"
          >
            B-Cosmetic
          </TextAnimate>
          
          <TextAnimate
            animation="zoomIn"
            by="word"
            duration={10}
            className="text-white/80 text-lg md:text-2xl lg:text-3xl xl:text-2xl font-light mt-[-20px] left-[4px] relative"
          >
            Beleza que transforma histórias.
          </TextAnimate>
        </div>

         <div className="bg-gradient-to-r from-[#622A73]/20 to-white/10 rounded-xl p-8 md:p-6 text-left shadow-2xl max-w-2xl m-[-10px]">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Seja distribuidor exclusivo Bellys
          </h2>
        <button className="bg-[#201224] text-white px-8 py-3 md:py-4 rounded-lg font-bold text-lg border border-[#622A73] hover:bg-[#622A73]/30 hover:scale-105 transition-all duration-300 shadow-lg">
            Quero ser distribuidor 
          </button>
         
        </div> 
        
        
      </motion.div>
      <div>

        <Carousel />
      </div>
    </section>
  );
};

export default Hero;
