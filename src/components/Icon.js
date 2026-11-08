import {
  Globe, ShoppingBag, ReceiptIndianRupee, MessageCircle, MapPin, Megaphone,
  LayoutDashboard, Server, Store, UtensilsCrossed, Stethoscope, GraduationCap,
  Scissors, Building2, Factory, Briefcase, IndianRupee, Zap, Languages,
  Smartphone, ShieldCheck, Headphones,
  AppWindow, Bot, HeartHandshake, Rocket, Puzzle, CalendarCheck, KeyRound, LifeBuoy, MessagesSquare, PenTool, Code2, ClipboardCheck, TrendingUp,
} from "lucide-react";

const icons = {
  Globe, ShoppingBag, ReceiptIndianRupee, MessageCircle, MapPin, Megaphone,
  LayoutDashboard, Server, Store, UtensilsCrossed, Stethoscope, GraduationCap,
  Scissors, Building2, Factory, Briefcase, IndianRupee, Zap, Languages,
  Smartphone, ShieldCheck, Headphones,
  AppWindow, Bot, HeartHandshake, Rocket, Puzzle, CalendarCheck, KeyRound, LifeBuoy, MessagesSquare, PenTool, Code2, ClipboardCheck, TrendingUp,
};

export default function Icon({ name, ...props }) {
  const C = icons[name] ?? Globe;
  return <C aria-hidden="true" {...props} />;
}
