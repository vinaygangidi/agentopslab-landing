'use client';

import Link from 'next/link';
import StatsCards from '@/components/StatsCards';
import AgentCatalog from '@/components/AgentCatalog';
import ActivityFeed from '@/components/ActivityFeed';
import TeamPerformance from '@/components/TeamPerformance';
import { mockGovernanceData } from '@/lib/mockData';

export default function GovernanceDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Back Button */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-bold">AgentOps Governance</h1>
              <p className="text-sm text-gray-400">Centralized AI Agent Management</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <StatsCards stats={mockGovernanceData} />
        <AgentCatalog />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActivityFeed />
          <TeamPerformance stats={mockGovernanceData} />
        </div>
      </div>
    </div>
  );
}
