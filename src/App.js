import React from "react";
import Navbar from "./pages/navbar/Navbar";
import "./index.css";
import LeftSection from "./pages/leftSection/LeftSection";
import MainContent from "./pages/mainContent/MainContent";

export default function App() {
    return (
        <div className="bg-white">
        <Navbar/>
        <div className="hero-section flex">
            <LeftSection/>
            <MainContent/>
        </div>
        </div>
    );
}