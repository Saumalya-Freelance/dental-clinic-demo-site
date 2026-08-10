import Header from './components/layout/Header';
import MobileBottomNav from './components/layout/MobileBottomNav';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import TrustHighlights from './components/home/TrustHighlights';
import AboutSection from './components/about/AboutSection';
import TreatmentsSection from './components/treatments/TreatmentsSection';
import WhyChooseUsSection from './components/why-us/WhyChooseUsSection';
import ReviewsSection from './components/reviews/ReviewsSection';
import ContactSection from './components/contact/ContactSection';
import PageLoader from './components/layout/PageLoader';

function App() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary min-h-screen">
      <PageLoader />
      <Header />
      
      <main className="pt-16 md:pt-20 pb-24 md:pb-0">
        <HeroSection />
        <TrustHighlights />
        <AboutSection />
        <TreatmentsSection />
        <WhyChooseUsSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <MobileBottomNav />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
