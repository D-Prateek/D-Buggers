import Header from './components/Header';
import Footer from './components/Footer';
import bgImage from './assets/background.jpeg'; // replace with your actual background

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="flex-grow bg-cover bg-center px-8 py-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-2xl ml-10 bg-white bg-opacity-70 p-6 rounded shadow">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Aama Care</h1>
          <p className="text-gray-700">
            We provide compassionate and professional care services to meet the needs of your loved ones.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}