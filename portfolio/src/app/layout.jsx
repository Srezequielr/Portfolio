import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "600", "700"],
  style: "normal",
});

export const metadata = {
  title: "Julian Riera",
  description:
    "Portfolio de Julian Ezequiel Riera, desarrollador webFull Stack egresado del Bootcamp de soy Henry con mas de 400 Horas programando en tecnologias y lenguages como: HTML, CSS, JS, Next.js, React, Redux, Material UI, Express.js, Sequelize, Etc",
};

export default function RootLayout({ children }) {
  return (
    <html className="!scroll-smooth" lang="en">
      <head>
        <meta name="theme-color" content="#6667ab" />
      </head>
      <body className={[montserrat.className, " bg-white dark:bg-mainDark"]}>
        {children}
        <article className="bg-mainLight dark:bg-secondDark">
          <br />
          <p className="text-center font-bold text-lg">
            Desarrollado por Julian Riera
          </p>
          <p className="text-center">Simply, Lovely...</p>
          <br />
        </article>
      </body>
    </html>
  );
}
