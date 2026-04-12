// app/contact/page.tsx
import { Metadata } from 'next';
import ContactPage from './ContactPage'; // your client component

export const metadata: Metadata = {
  title: 'Contact Us | Your Organization Name',
  description: 'Reach out to volunteer, partner, or learn more about our mission. We’d love to hear from you.',
  openGraph: {
    title: 'Contact Us',
    description: 'Get in touch with us to make a difference.',
    // ... other OG fields
  },
};

export default function Page() {
  return <ContactPage />;
}