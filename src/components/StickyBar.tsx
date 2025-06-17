
import { useState } from "react";
import { QrCode, X } from "lucide-react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-black text-white py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <QrCode className="h-5 w-5 text-turquoise" />
          <span className="text-sm font-montserrat font-semibold">
            Está no estande? ESCANEIE o QR CODE para acesso exclusivo
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-turquoise transition-colors"
          aria-label="Fechar barra"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBar;
