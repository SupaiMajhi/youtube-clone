import React from "react";
import Navbar from "./pages/navbar/Navbar";
import "./index.css";
import LeftSection from "./pages/leftSection/LeftSection";
import MainContent from "./pages/mainContent/MainContent";

export default function App() {
    return (
        <>
        <Navbar/>
        <div className="hero-section flex flex-row p-3">
        <LeftSection/>
        <MainContent/>
        </div>
        </>
    );
}