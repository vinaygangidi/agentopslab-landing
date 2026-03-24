'use client';

interface StatsCardsProps {
  stats: any;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  if (!stats?.overview) return null;

  const overview = stats.overview;

  const cards = [
    {
      label: 'Active Agents',
      value: `${overview.active_agents}/ ${overview.total_agents}`,
      color: 'blue',
    },
    {
      label: 'Total Executions',
      value: overview.total_executions.toLocaleString(),
      color: 'purple',
    },
    {
      label: 'Success Rate',
      value: `${overview.success_rate}%`,
      color: 'green',
    },
    {
      label: 'Total Cost',
      value: `$${overview.total_cost_usd.toFixed(2)}`,
      color: 'yellow',
    },
    {
      label: 'Avg Duration',
      value: `${(overview.avg_duration_ms / 1000).toFixed(1)}s`,
      color: 'indigo',
    },
    {
      label: 'Teams',
      value: overview.total_teams,
      color: 'pink',
    },
  ];

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    indigo: 'from-indigo-500 to-indigo-600',
    pink: 'from-pink-500 to-pink-600',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all"
        >
          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${colorClasses[card.color]} text-white text-xs font-semibold mb-2`}>
            {card.label}
          </div>
          <div className="text-2xl font-bold text-white">{card.value}</div>
        </div>
      ))}
    </div>
  );
}
