import "./globals.css";

export const metadata = {
  title: "Збройний портал",
  description: "Інформаційний тактичний портал України",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

