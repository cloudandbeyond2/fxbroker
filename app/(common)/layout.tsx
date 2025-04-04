import Footer from "@/components/home-one/Footer";
import Header from "@/components/home-two/Header";

type LayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
