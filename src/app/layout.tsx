import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ly Nails | Nail Salon in Birmingham | 4.9★ Rated',
  description: 'Ly Nails - Birmingham\'s favourite nail salon. 4.9★ rating with 368+ reviews. Expert nail extensions, manicures, nail art & gel polish. Book online at 22 Augusta St, Birmingham B18 6JA.',
  keywords: 'nail salon birmingham, nail extensions birmingham, manicure birmingham, nail art birmingham, gel nails birmingham, pedicure birmingham, best nail salon birmingham',
  authors: [{ name: 'Ly Nails Birmingham' }],
  creator: 'Ly Nails Birmingham',
  metadataBase: new URL('https://ly-nails.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Ly Nails Birmingham',
    title: 'Ly Nails | Nail Salon in Birmingham | 4.9★ Rated',
    description: 'Birmingham\'s favourite nail salon. 4.9★ rating with 368+ reviews. Expert nail extensions, manicures, nail art & gel polish.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ly Nails Birmingham - Nail Salon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ly Nails | Nail Salon in Birmingham',
    description: 'Birmingham\'s favourite nail salon. 4.9★ rating with 368+ reviews.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NailSalon',
              name: 'Ly Nails',
              image: 'https://ly-nails.vercel.app/og-image.jpg',
              url: 'https://ly-nails.vercel.app',
              telephone: '+44 7429 294499',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '22 Augusta St',
                addressLocality: 'Birmingham',
                postalCode: 'B18 6JA',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.5023,
                longitude: -1.8873,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '10:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '18:00',
                },
              ],
              priceRange: '££',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '368',
              },
              sameAs: [
                'https://www.facebook.com/lynailsjewellyquater/',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream-50 text-charcoal-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
