import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@aruvili/react';
import { BillingCard, ProfileCard, EventCard, FileTreeCard, PasswordCard } from '../components/BentoCards';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Enterprise UI, <br/> Perfected.
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
            Beautifully crafted, highly performant React components. Ready for your next dark-mode SaaS product.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/docs">
              <Button variant="primary" className="h-10 px-6 font-medium tracking-wide">Get Started</Button>
            </Link>
            <Button variant="secondary" className="h-10 px-6 font-medium tracking-wide">View Source</Button>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div className="space-y-6">
          <BillingCard />
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <ProfileCard />
          <EventCard />
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <FileTreeCard />
          <PasswordCard />
        </div>

      </div>
    </main>
  );
}
