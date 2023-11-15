import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julian Riera",
  description:
    "Portfolio de Julian Ezequiel Riera, desarrollador webFull Stack egresado del Bootcamp de soy Henry con mas de 400 Horas programando en tecnologias y lenguages como: HTML, CSS, JS, Next.js, React, Redux, Material UI, Express.js, Sequelize, Etc",
};

export default function RootLayout({ children }) {
  return (
    <html className="!scroll-smooth" lang="en">
      <head>
        <meta name="theme-color" content="#6667ab"/>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
