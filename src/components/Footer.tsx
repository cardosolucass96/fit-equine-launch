
import { Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col items-start">
              <img
                src="https://integralmix.com.br/wp-content/themes/integral/assets/images/logo.svg"
                alt="Integral Mix"
                className="h-8"
              />
              <p className="text-gray-400 text-sm mt-2">alimentando o futuro</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-4 w-4 text-turquoise flex-shrink-0" />
                <span className="text-sm">
                  R. Alfa, 601 - Lagoa Redonda, Fortaleza - CE, 60831-745, Brasil
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-4 w-4 text-turquoise flex-shrink-0" />
                <span className="text-sm">(85) 99162-7588</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-4 w-4 text-turquoise flex-shrink-0" />
                <span className="text-sm">sac@integralmix.com.br</span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-turquoise transition-colors text-sm"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-turquoise transition-colors text-sm"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5585991627588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-turquoise transition-colors text-sm"
                >
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-turquoise transition-colors text-sm"
                >
                  Distribuidores
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Siga-nos</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/integralmix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-turquoise transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@integralmix</span>
              </a>
              <a
                href="https://www.youtube.com/@integralmix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-turquoise transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="text-sm">Integral MIX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Integral MIX. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Performance FIT - Desenvolvido com ciência para cavalos excepcionais
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
