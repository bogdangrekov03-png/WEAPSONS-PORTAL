import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: "Збройний портал",
  description: "Інформаційний тактичний портал України",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        {children}
        <Analytics />   {/* <-- ДОДАНО */}
      </body>
    </html>
  );
}

