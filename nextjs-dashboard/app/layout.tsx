import '@/app/ui/global.css';
import { Inter, Lusitana } from 'next/font/google';
// import { inter } from '@/app/ui/fonts';
export const inter = Inter({ subsets: ['latin'] });
 export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}