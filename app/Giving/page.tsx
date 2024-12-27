import Navbar from '../components/Navbar';

export default function About() {
    return (
      <div>
      <Navbar />
        <main className="min-h-screen bg-gray-50 p-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              This is our About page using the Next.js App Router. We style with Tailwind.
              Feel free to add as much content as you want here.
            </p>
          </div>
        </main>
      </div>
    );
  }