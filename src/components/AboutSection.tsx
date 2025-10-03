import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users2 } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Missão",
      description: "Oferecer produtos de alta qualidade e oportunidades de crescimento através de um modelo de negócio sustentável e inovador."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Visão",
      description: "Ser referência no mercado de cosméticos, reconhecidos pela excelência, inovação e pelo impacto positivo na vida dos nossos consultores."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada produto, processo e relacionamento, sempre buscando superar expectativas."
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Pessoas",
      description: "Acreditamos no potencial humano e investimos no crescimento pessoal e profissional de toda nossa comunidade."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Sobre a <span className="text-[#622A73]">Bellys</span><br />
              
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de 15 anos de experiência no mercado de cosméticos, o Grupo Caldeira 
              se consolidou como uma das principais empresas do setor, unindo três marcas 
              distintas sob uma única visão de excelência.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa jornada começou com o desejo de democratizar o acesso a produtos de 
              qualidade e criar oportunidades reais de crescimento profissional e financeiro 
              para milhares de brasileiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Saiba Mais
              </Button>
              <Button variant="outline" size="lg">
                Fale Conosco
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-corporate rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Nossos Números
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-heading font-bold text-gold mb-2">+15</div>
                  <div className="text-primary-foreground/80">Anos de Mercado</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-gold mb-2">10K+</div>
                  <div className="text-primary-foreground/80">Consultores</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-gold mb-2">3</div>
                  <div className="text-primary-foreground/80">Empresas</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-gold mb-2">100+</div>
                  <div className="text-primary-foreground/80">Produtos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Nossos Valores
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossas ações e definem nossa cultura corporativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="corporate-hover border-0 shadow-corporate">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-corporate text-primary-foreground mb-6">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-foreground mb-4">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;