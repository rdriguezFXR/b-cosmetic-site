import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Heart, Factory } from "lucide-react";

const CompanyShowcase = () => {
  const companies = [
    {
      name: "Like Brasil",
      description: "Marketing multinível com produtos de alta qualidade e sistema de remuneração atrativo.",
      icon: <Sparkles className="h-8 w-8" />,
      features: ["Sistema MLM", "Produtos Premium", "Remuneração Atrativa", "Suporte Completo"],
      color: "from-primary to-primary-light",
      accent: "border-primary"
    },
    {
      name: "AgoraSou",
      description: "Marca própria de cosméticos com foco em qualidade, beleza e autoestima.",
      icon: <Heart className="h-8 w-8" />,
      features: ["Marca Própria", "Cosméticos Premium", "Beleza & Autoestima", "Linha Completa"],
      color: "from-gold to-gold-light",
      accent: "border-gold"
    },
    {
      name: "Brazilian Dubai",
      description: "Terceirização e white label de produtos cosméticos com padrão internacional.",
      icon: <Factory className="h-8 w-8" />,
      features: ["White Label", "Terceirização", "Padrão Internacional", "Customização"],
      color: "from-primary-dark to-primary",
      accent: "border-primary-dark"
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nossas Empresas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Três empresas, uma visão: oferecer as melhores soluções em cosméticos, 
            oportunidades de negócio e serviços de terceirização.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {companies.map((company, index) => (
            <Card key={company.name} className={`corporate-hover ${company.accent} border-2 overflow-hidden`}>
              <CardContent className="p-8">
                {/* Company Header */}
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${company.color} text-white mb-6`}>
                  {company.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  {company.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {company.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {company.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-corporate">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
            Pronto para Fazer Parte do Grupo Caldeira?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de consultores que já transformaram suas vidas 
            com nossas oportunidades de negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="corporate" size="lg">
              Quero Ser Consultor
            </Button>
            <Button variant="outline" size="lg">
              Agendar Apresentação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyShowcase;