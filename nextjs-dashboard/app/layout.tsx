import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased -> tailwind untuk menghaluskan font */}
      {/* sekarang font inter diterapkan ke seluruh aplikasi */}
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <h1 className="text-blue-500">helo</h1> */}
    </html>
  );
}
