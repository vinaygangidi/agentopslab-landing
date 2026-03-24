export const mockGovernanceData = {
  overview: {
    total_agents: 33,
    active_agents: 33,
    total_teams: 5,
    total_executions: 138600,
    success_rate: 94.2,
    total_cost_usd: 3566.19,
    avg_duration_ms: 2879
  },
  top_agents: [
    {
      agent_id: "1",
      agent_name: "Email Intelligence",
      category: "Sales Ops",
      total_executions: 50,
      successful_executions: 49,
      failed_executions: 1,
      avg_duration_ms: 2694.96,
      total_tokens: 136507,
      total_cost_usd: 1.46,
      last_execution: "2026-03-22T20:55:29"
    },
    {
      agent_id: "2",
      agent_name: "Resume Screening",
      category: "HR Ops",
      total_executions: 50,
      successful_executions: 50,
      failed_executions: 0,
      avg_duration_ms: 2828.44,
      total_tokens: 132785,
      total_cost_usd: 1.37,
      last_execution: "2026-03-22T20:55:29"
    },
    {
      agent_id: "3",
      agent_name: "Compliance Checker",
      category: "Legal Ops",
      total_executions: 50,
      successful_executions: 47,
      failed_executions: 3,
      avg_duration_ms: 3198.8,
      total_tokens: 120782,
      total_cost_usd: 1.21,
      last_execution: "2026-03-22T20:55:29"
    },
    {
      agent_id: "4",
      agent_name: "Deal Risk Assessor",
      category: "Revenue Ops",
      total_executions: 50,
      successful_executions: 44,
      failed_executions: 6,
      avg_duration_ms: 3043.76,
      total_tokens: 116037,
      total_cost_usd: 1.15,
      last_execution: "2026-03-22T20:55:29"
    },
    {
      agent_id: "5",
      agent_name: "Pipeline Orchestrator",
      category: "Sales Ops",
      total_executions: 50,
      successful_executions: 50,
      failed_executions: 0,
      avg_duration_ms: 2840.56,
      total_tokens: 140946,
      total_cost_usd: 1.44,
      last_execution: "2026-03-22T20:55:29"
    }
  ],
  team_performance: [
    {
      team_id: "1",
      team_name: "Finance Team",
      category: "Finance",
      total_executions: 195,
      successful_executions: 182,
      total_cost_usd: 4.87,
      avg_duration_ms: 2891.28
    },
    {
      team_id: "2",
      team_name: "Sales Team",
      category: "Sales",
      total_executions: 170,
      successful_executions: 166,
      total_cost_usd: 4.67,
      avg_duration_ms: 2677.14
    },
    {
      team_id: "3",
      team_name: "HR Team",
      category: "HR",
      total_executions: 160,
      successful_executions: 150,
      total_cost_usd: 4.02,
      avg_duration_ms: 2980.91
    },
    {
      team_id: "4",
      team_name: "Legal Team",
      category: "Legal",
      total_executions: 160,
      successful_executions: 149,
      total_cost_usd: 4.12,
      avg_duration_ms: 3058.83
    },
    {
      team_id: "5",
      team_name: "Revenue Team",
      category: "Revenue",
      total_executions: 155,
      successful_executions: 144,
      total_cost_usd: 3.93,
      avg_duration_ms: 2797.03
    }
  ],
  recent_activity: [
    {
      id: "1",
      status: "success",
      started_at: "2026-03-23T00:55:29",
      duration_ms: 964,
      cost_usd: 0.0144,
      agent_name: "Pipeline Orchestrator",
      agent_category: "Sales Ops",
      team_name: "Sales Team"
    },
    {
      id: "2",
      status: "success",
      started_at: "2026-03-23T00:55:29",
      duration_ms: 4816,
      cost_usd: 0.0449,
      agent_name: "Pipeline Orchestrator",
      agent_category: "Sales Ops",
      team_name: "Sales Team"
    },
    {
      id: "3",
      status: "success",
      started_at: "2026-03-23T00:55:29",
      duration_ms: 2607,
      cost_usd: 0.0357,
      agent_name: "Pipeline Orchestrator",
      agent_category: "Sales Ops",
      team_name: "Sales Team"
    },
    {
      id: "4",
      status: "success",
      started_at: "2026-03-23T00:55:29",
      duration_ms: 3462,
      cost_usd: 0.0291,
      agent_name: "Pipeline Orchestrator",
      agent_category: "Sales Ops",
      team_name: "Sales Team"
    },
    {
      id: "5",
      status: "success",
      started_at: "2026-03-23T00:55:29",
      duration_ms: 2155,
      cost_usd: 0.0161,
      agent_name: "Pipeline Orchestrator",
      agent_category: "Sales Ops",
      team_name: "Sales Team"
    }
  ]
};
