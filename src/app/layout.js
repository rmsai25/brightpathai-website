import "./globals.css";
import Header from "../../components/Header.jsx";

export const metadata = {
  title: "Brightpath AI",
  description: "Production-ready AI systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
