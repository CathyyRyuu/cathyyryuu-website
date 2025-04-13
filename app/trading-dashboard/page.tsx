import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function TradingDashboardPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center px-4">
      {/* Back to home */}
      <div className="w-full max-w-4xl self-start ml-6 mb-6 py-10">
        <Link
          href="/"
          className="inline-flex items-start font-medium text-gray-300 hover:text-white"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mb-6">Trading Analytics Dashboard Demo</h1>
      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/QcY9TsnfzEg"
          title="Trading Analytics Dashboard"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>
    </main>
  );
}