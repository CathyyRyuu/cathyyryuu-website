import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function TradingDashboardPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 text-ink">
      {/* Back to home */}
      <div className="w-full max-w-4xl self-start ml-6 mb-6 py-10">
        <Link
          href="/"
          className="inline-flex items-start font-display font-bold text-ink-soft hover:text-accent-deep"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>

      <h1 className="font-display text-3xl font-bold text-ink mb-6">Trading Analytics Dashboard Demo</h1>
      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-line bg-paper-soft p-2 shadow-card">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/QcY9TsnfzEg"
          title="Trading Analytics Dashboard"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>
    </main>
  );
}