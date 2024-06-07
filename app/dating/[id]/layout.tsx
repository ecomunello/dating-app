import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import BottomBarNav from "@/components/BottomBarNav";
import TopBar from "@/components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
      <div className="relative flex flex-col h-screen">
                
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
          {children}
        </main>
       
        <BottomBarNav />
      </div>
  );
}
