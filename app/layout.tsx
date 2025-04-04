import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "@/public/scss/styles.scss";
import Bootstrap from "@/components/Bootstrap";
import InitAOS from "@/components/shared/Aos";

export const metadata: Metadata = {
  title: "BrokR - Broker Comparison Affiliate Template",
  description: "Broker Comparison Affiliate Template NextJS Bootstrap 5.3.3",
};
type LayoutType = {
  children: React.ReactNode;
};
const ibm = IBM_Plex_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Bootstrap>
          {children}
          <InitAOS />
        </Bootstrap>
      </body>
    </html>
  );
}
