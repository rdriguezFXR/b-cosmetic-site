import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Empresas",
      links: [
        { name: "Like Brasil", href: "#" },
        { name: "AgoraSou", href: "#" },
        { name: "Brazilian Dubai", href: "#" },
      ]
    },
    {
      title: "Soluções",
      links: [
        { name: "Seja Consultor", href: "#" },
        { name: "Compre Online", href: "#" },
        { name: "Escritório Virtual", href: "#" },
        { name: "Catálogo Virtual", href: "#" },
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "#" },
        { name: "Reclame Aqui", href: "#" },
        { name: "Trabalhe Conosco", href: "#" },
        { name: "Contato", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-6">
              Grupo Caldeira
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Lideramos o mercado de cosméticos com três empresas focadas em 
              qualidade, inovação e oportunidades de crescimento para nossos consultores.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gold" />
                <span className="text-primary-foreground/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gold" />
                <span className="text-primary-foreground/80">contato@grupocaldeira.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-gold" />
                <span className="text-primary-foreground/80">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-gold hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold mb-4 text-gold">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-gold transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Grupo Caldeira. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;