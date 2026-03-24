'use client';

import { mockGovernanceData } from '@/lib/mockData';

export default function ActivityFeed() {
  const activities = mockGovernanceData.recent_activity;

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Live Activity</h2>
        <span className="text-sm text-gray-400">Demo Data</span>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity: any) => (
          <div key={activity.id} className="bg-gray-900 rounded-lg p-3 border border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <span className={`text-lg ${activity.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {activity.status === 'success' ? '✓' : '✗'}
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{activity.agent_name}</h4>
                  <p className="text-sm text-gray-400">{activity.team_name}</p>
                </div>
              </div>
              <div className="text-right text-xs text-gray-500">
                <div>{new Date(activity.started_at).toLocaleTimeString()}</div>
                <div className="flex items-center gap-2 mt-1 justify-end">
                  <span>{activity.duration_ms}ms</span>
                  <span>•</span>
                  <span>${activity.cost_usd.toFixed(4)}</span>
                  <span>•</span>
                  <span className={activity.status === 'success' ? 'text-green-500' : 'text-red-500'}>
                    {activity.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
