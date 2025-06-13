import React from 'react';
import logo from '../assets/logo.jpeg'; // replace with your actual logo path
import gradient from '../assets/header-gradient.jpg'; // replace with your actual gradient image

export default function Header() {
  return (
    <header
      className="w-full h-20 bg-cover bg-center flex items-center justify-between px-6 shadow"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <img src={logo} alt="Aama Care Logo" className="h-12" />

      <nav className="space-x-6 text-white font-medium">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Our Services</a>
        <a href="#" className="hover:underline">Sign In</a>
        <a href="#" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-blue-100">Sign Up</a>
      </nav>
    </header>
  );
}