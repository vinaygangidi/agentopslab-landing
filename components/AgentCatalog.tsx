'use client';

import { mockGovernanceData } from '@/lib/mockData';

export default function AgentCatalog() {
  const agents = mockGovernanceData.top_agents;

  const categoryColors: Record<string, string> = {
    'Sales Ops': 'bg-blue-500',
    'HR Ops': 'bg-green-500',
    'Legal Ops': 'bg-purple-500',
    'Revenue Ops': 'bg-yellow-500',
    'Finance Ops': 'bg-pink-500',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Top Agents</h2>
        <span className="text-sm text-gray-400">{agents.length} active</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {agents.map((agent: any) => (
          <div key={agent.agent_id} className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-white truncate">{agent.agent_name}</h3>
            </div>
            <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${categoryColors[agent.category] || 'bg-gray-500'} text-white mb-3`}>
              {agent.category}
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">{agent.total_executions}</span>
                <span className="text-gray-500">executions</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate</span>
                <span className="text-green-400">{Math.round((agent.successful_executions / agent.total_executions) * 100)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cost</span>
                <span className="text-yellow-400">${agent.total_cost_usd.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tokens</span>
                <span className="text-blue-400">{agent.total_tokens.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
