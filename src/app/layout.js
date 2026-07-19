import "./globals.css";
import Header from "../../components/Header.jsx";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const basePath = "";

export const metadata = {
  title: "Brightpath AI",
  description: "Production-ready AI systems",
  icons: {
    icon: `${basePath}/logu.png`,     
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}


// export const metadata = {
//   title: "Brightpath AI ",
//   icons: {
//     icon: "/logu.png",     
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
