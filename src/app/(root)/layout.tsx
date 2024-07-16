import Navbar from "@/ui/Navbar";
import { cn } from "@/lib/utils";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="id" data-theme="light">
      <body className={cn("bg-primary-foreground", jost.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
