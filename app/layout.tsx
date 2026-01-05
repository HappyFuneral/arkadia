import "./globals.css";

export const metadata = {
  title: "Árkádia Hangszerbolt",
  description: "Használt gitárok és gitárszerviz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}