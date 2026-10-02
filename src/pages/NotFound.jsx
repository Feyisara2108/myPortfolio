import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound({ message = 'Page not found', backTo = '/', backLabel = 'Back to home' }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">{message}</h1>
        <Link to={backTo} className="text-accent underline underline-offset-4">
          {backLabel}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
