import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:YOUR_NUMBER_HERE"   // ← Replace with your number
      className="
        fixed
        bottom-20    /* moved up so it doesn't overlap Voiceflow bubble */
        right-6
        bg-teal-600 
        hover:bg-teal-700 
        text-white 
        w-14 h-14 
        rounded-full 
        shadow-xl 
        flex 
        items-center 
        justify-center 
        transition 
        duration-300 
        z-[9999]      /* stays above everything */
      "
      aria-label="Call Support"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
