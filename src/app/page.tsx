import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Solutions from '@/components/Solutions';
import Pricings from '@/components/Pricings';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
export default function Home(){
  return(
    <>
    <Header />
    <Hero />
    <Features />
    <Solutions />
    <Pricings />
    <Faq />
    <Cta />
    <Footer />
    </>
  );
};