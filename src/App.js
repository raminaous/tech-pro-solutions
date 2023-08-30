import "./App.css";
import ContactButton from "./Components/ContactButton";
import ContactSection from "./Components/ContactSection";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ContactSection
        title="Get In Touch"
        description="🌟 Unleash Digital Excellence! Contact Us for Website and Mobile App Services. 📱🌐

🚀 Elevate your business with our expert development and design.

"
        phone="+961 78 803 034 or +961 70 949 823"
        email="techprosolutions2023@outlook.com"
        location="Beirut, Lebanon 🇱🇧"
      />
      <ContactButton />
    </>
  );
}

export default App;
