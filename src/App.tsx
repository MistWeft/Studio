import { useState } from 'react';
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Header from "@/components/Header";
import FullPageScroll from "@/components/FullPageScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Collaboration from "@/pages/Collaboration";

export default function App() {
  const [showCollaboration, setShowCollaboration] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', element: <Hero /> },
    { id: 'about', element: <About /> },
    { id: 'works', element: <Works /> },
    { id: 'projects', element: <Projects /> },
    { id: 'contact', element: <Contact /> },
  ];

  if (showCollaboration) {
    return (
      <ErrorBoundary>
        <Collaboration onBack={() => setShowCollaboration(false)} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <div className="stars-background" />
        <div className="stars-overlay" />
        <Header activeSection={activeSection} onCollaboration={() => setShowCollaboration(true)} />
        <FullPageScroll sections={sections} onSectionChange={setActiveSection} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
