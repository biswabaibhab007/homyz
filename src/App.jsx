import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/footer/Footer";


import './App.css'

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
    </div>
  );
}

export default App;
