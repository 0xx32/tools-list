import { Link } from "@tanstack/react-router";
import { SideBar } from "./SideBar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <div>
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  ">
      <div className="max-w-[1400px] mx-auto py-3 ">
        <Link to="/" className="text-xl font-semibold">
          My tools
        </Link>
      </div>
    </header>
    <div className="max-w-[1400px] mx-auto py-6 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <SideBar />
      <main>{children}</main>
    </div>
  </div>
);
