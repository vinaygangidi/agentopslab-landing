'use client';

interface TeamPerformanceProps {
  stats: any;
}

export default function TeamPerformance({ stats }: TeamPerformanceProps) {
  if (!stats?.team_performance) return null;

  const teams = stats.team_performance;

  const categoryColors: Record<string, string> = {
    'Finance': 'border-pink-500',
    'Sales': 'border-blue-500',
    'HR': 'border-green-500',
    'Legal': 'border-purple-500',
    'Revenue': 'border-yellow-500',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Team Performance</h2>
      <div className="space-y-4">
        {teams.map((team: any) => (
          <div
            key={team.team_id}
            className={`bg-gray-900 rounded-lg p-4 border-l-4 ${categoryColors[team.category] || 'border-gray-500'}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-white">{team.team_name}</h3>
              <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">{team.category}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-gray-400">Executions</div>
                <div className="text-white font-semibold">{team.total_executions}</div>
              </div>
              <div>
                <div className="text-gray-400">Success Rate</div>
                <div className="text-green-400 font-semibold">
                  {Math.round((team.successful_executions / team.total_executions) * 100)}%
                </div>
              </div>
              <div>
                <div className="text-gray-400">Total Cost</div>
                <div className="text-yellow-400 font-semibold">${team.total_cost_usd.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-gray-400">Avg Time</div>
                <div className="text-blue-400 font-semibold">{(team.avg_duration_ms / 1000).toFixed(1)}s</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
