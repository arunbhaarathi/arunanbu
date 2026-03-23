import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Navigation />
      <div className="snap-start min-h-screen"><Hero /></div>
      <div className="snap-start min-h-screen"><About /></div>
      <div className="snap-start min-h-screen"><Projects /></div>
      <div className="snap-start min-h-screen"><Contact /></div>
      <div className="snap-start"><Footer /></div>
    </div>
  );
};

export default Index;
