import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Montserrat, Questrial } from "next/font/google";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { ReduxProvider } from "@/redux/provider";

const simplon = localFont({
  src: [
    {
      path: "../components/Fonts/SimplonMono-Bold.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../components/Fonts/SimplonMono-Medium.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../components/Fonts/SimplonNorm-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const neutra = localFont({
  src: [
    {
      path: "../components/Fonts/Neutra-Text-Light-Alt.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../components/Fonts/Neutra-Text-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const inter = Inter({ subsets: ["latin"] });
const questrial = Questrial({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Facundo Aragon",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={neutra.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <div id="modal-root"></div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
