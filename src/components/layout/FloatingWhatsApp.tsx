import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2349027856578";

export function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your Ankara collection.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-body rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </button>
  );
}
