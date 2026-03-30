import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ly Nails | Nail Salon in Birmingham',
  description: 'Ly Nails - 4.9 star rated nail salon in Birmingham. Expert nail extensions, manicures, nail art & more. 22 Augusta St, Birmingham B18 6JA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream-50 text-charcoal-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
