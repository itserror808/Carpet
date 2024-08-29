import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Homepage} from "./pages/Homepage"; // Import AOS styles
import { TapisPage } from './pages/nos-tapis/Tapis';
import Aboutpage from './pages/Aboutpage';
import Contact from "./pages/Contact";



function APropos() {
    return <h2>À propos</h2>;
}

function NosTapis() {
    return <h2>Nos Tapis</h2>;
}

function NouvelleCollection() {
    return <h2>Nouvelle Collection</h2>;
}

function EspacePros() {
    return <h2>Espace Pros</h2>;
}

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'true') {
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (

        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/a-propos" element={<Aboutpage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/nos-tapis" element={<NosTapis />} />
                    <Route path="/tapis" element={<TapisPage />} />
                    {/*<Route path="/custom" element={<TapisPersonalise />} />*/}
                    <Route path="/nouvelle-collection" element={<NouvelleCollection />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/espace-pros" element={<EspacePros />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
