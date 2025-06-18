"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Bell,
  ChevronDown,
  BarChart3,
  FileText,
  Utensils,
  User,
  Settings,
  LogOut,
  Menu,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data for charts
  const calorieData = [
    { name: "Mon", value: 1650 },
    { name: "Tue", value: 1720 },
    { name: "Wed", value: 1580 },
    { name: "Thu", value: 1800 },
    { name: "Fri", value: 1750 },
    { name: "Sat", value: 1680 },
    { name: "Sun", value: 1800 },
  ];

  const proteinData = [
    { name: "Mon", value: 85 },
    { name: "Tue", value: 92 },
    { name: "Wed", value: 78 },
    { name: "Thu", value: 96 },
    { name: "Fri", value: 88 },
    { name: "Sat", value: 94 },
    { name: "Sun", value: 96 },
  ];

  const carbsData = [
    { name: "Mon", value: 25 },
    { name: "Tue", value: 32 },
    { name: "Wed", value: 28 },
    { name: "Thu", value: 30 },
    { name: "Fri", value: 35 },
    { name: "Sat", value: 29 },
    { name: "Sun", value: 30 },
  ];

  const fatsData = [
    { name: "Mon", value: 18 },
    { name: "Tue", value: 22 },
    { name: "Wed", value: 15 },
    { name: "Thu", value: 20 },
    { name: "Fri", value: 25 },
    { name: "Sat", value: 19 },
    { name: "Sun", value: 20 },
  ];

  const calorieCheckInData = [
    { name: "Consumed", value: 1200, color: "#4A6CF7" },
    { name: "Remaining", value: 600, color: "#E5E7EB" },
  ];

  const bmiData = [
    { name: "Normal", value: 22.5, color: "#10B981" },
    { name: "Overweight", value: 0, color: "#F59E0B" },
    { name: "Underweight", value: 0, color: "#EF4444" },
  ];

  const recentActivities = [
    {
      title: "Meal Added",
      description:
        "You successfully logged Healthy Grilled Chicken Salad for lunch today",
      time: "1 hr 30 min ago on April 24, 2024",
      icon: "🥗",
    },
    {
      title: "Meal Added",
      description:
        "You successfully logged Healthy Grilled Chicken Salad for lunch today",
      time: "1 hr 30 min ago on April 24, 2024",
      icon: "🥗",
    },
    {
      title: "Meal Added",
      description:
        "You successfully logged Healthy Grilled Chicken Salad for lunch today",
      time: "1 hr 30 min ago on April 24, 2024",
      icon: "🥗",
    },
    {
      title: "Meal Added",
      description:
        "You successfully logged Healthy Grilled Chicken Salad for lunch today",
      time: "1 hr 30 min ago on April 24, 2024",
      icon: "🥗",
    },
  ];

  const StatCard = ({ title, value, percentage, data, color }) => (
    <div className="bg-white rounded-[12px] p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-[12px] text-gray-500 font-medium">{title}</p>
          <p className="text-[18px] font-bold text-gray-900">{value}</p>
          {percentage && (
            <p className="text-[11px] text-gray-400">{percentage}</p>
          )}
        </div>
        <div className="w-16 h-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const CircularProgress = ({
    percentage,
    size = 60,
    strokeWidth = 6,
    color = "#4A6CF7",
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${
      (percentage / 100) * circumference
    } ${circumference}`;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-semibold text-gray-700">
            {percentage}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-[#4A6CF7] transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#4A6CF7] font-bold text-sm">K</span>
          </div>
          {sidebarOpen && (
            <span className="text-white font-semibold text-sm">KALORIVA</span>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-6">
          <p className="text-white/60 text-xs font-medium mb-4 uppercase tracking-wider">
            {sidebarOpen ? "Main menu" : ""}
          </p>

          <div className="space-y-2">
            <div className="bg-white/10 rounded-lg p-3 flex items-center space-x-3">
              <BarChart3 className="w-4 h-4 text-white" />
              {sidebarOpen && (
                <span className="text-white text-sm font-medium">
                  Dashboard
                </span>
              )}
            </div>

            <div className="p-3 flex items-center space-x-3 hover:bg-white/5 rounded-lg cursor-pointer">
              <FileText className="w-4 h-4 text-white/70" />
              {sidebarOpen && (
                <span className="text-white/70 text-sm">Reports</span>
              )}
            </div>

            <div className="p-3 flex items-center space-x-3 hover:bg-white/5 rounded-lg cursor-pointer">
              <Utensils className="w-4 h-4 text-white/70" />
              {sidebarOpen && (
                <span className="text-white/70 text-sm">Meals</span>
              )}
              {sidebarOpen && (
                <ChevronDown className="w-3 h-3 text-white/70 ml-auto" />
              )}
            </div>
          </div>

          <p className="text-white/60 text-xs font-medium mb-4 mt-8 uppercase tracking-wider">
            {sidebarOpen ? "Other" : ""}
          </p>

          <div className="space-y-2">
            <div className="p-3 flex items-center space-x-3 hover:bg-white/5 rounded-lg cursor-pointer">
              <User className="w-4 h-4 text-white/70" />
              {sidebarOpen && (
                <span className="text-white/70 text-sm">Profile</span>
              )}
            </div>

            <div className="p-3 flex items-center space-x-3 hover:bg-white/5 rounded-lg cursor-pointer">
              <Bell className="w-4 h-4 text-white/70" />
              {sidebarOpen && (
                <span className="text-white/70 text-sm">Notification</span>
              )}
              {sidebarOpen && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-auto">
                  2
                </span>
              )}
            </div>

            <div className="p-3 flex items-center space-x-3 hover:bg-white/5 rounded-lg cursor-pointer">
              <Settings className="w-4 h-4 text-white/70" />
              {sidebarOpen && (
                <span className="text-white/70 text-sm">Settings</span>
              )}
            </div>

            <div className="p-3 flex items-center space-x-3 hover:bg-white/5 rounded-lg cursor-pointer">
              <LogOut className="w-4 h-4 text-white/70" />
              {sidebarOpen && (
                <span className="text-white/70 text-sm">Log out</span>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Good Morning, John!
                </h1>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Dashboard
                </h2>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#4A6CF7] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">J</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Mr. John
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Today's Stats */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500">Today</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                title="Today's Calorie"
                value="1800 kcal"
                data={calorieData}
                color="#4A6CF7"
              />
              <StatCard
                title="Today's Protein"
                value="96% - 546/1279 kcal"
                data={proteinData}
                color="#EF4444"
              />
              <StatCard
                title="Today's Carbs"
                value="30% - 546/1279 kcal"
                data={carbsData}
                color="#10B981"
              />
              <StatCard
                title="Today's Fats"
                value="20% - 546/1279 kcal"
                data={fatsData}
                color="#F59E0B"
              />
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Calorie Check-in */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Calorie Check-in
              </h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={calorieCheckInData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {calorieCheckInData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">
                      1200
                    </span>
                    <span className="text-xs text-gray-500">kcal</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#4A6CF7] rounded-full"></div>
                    <span className="text-gray-600">Calories</span>
                  </div>
                  <span className="font-medium">1200 kcal</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-600">Goal</span>
                  </div>
                  <span className="font-medium">1800 kcal</span>
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Progress Summary
              </h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <CircularProgress
                    percentage={70}
                    size={120}
                    strokeWidth={8}
                    color="#4A6CF7"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">897</span>
                    <span className="text-xs text-gray-500">kcal Left</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">🔥 48%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">🥗 3893 kcal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">⚡ 348 kcal</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Recent Activity
                </h3>
                <button className="text-xs text-[#4A6CF7] hover:text-[#3B5CF0]">
                  View all
                </button>
              </div>
              <div className="space-y-3">
                {recentActivities.slice(0, 3).map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-lg">{activity.icon}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.description}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Your BMI */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Your BMI
              </h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bmiData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                      >
                        {bmiData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-gray-900">
                      22.5
                    </span>
                    <span className="text-xs text-gray-500">Normal</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Normal</span>
                  </div>
                  <span className="font-medium">22.5</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600">Weight</span>
                  </div>
                  <span className="font-medium">75 kg</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Height</span>
                  </div>
                  <span className="font-medium">1.82 m</span>
                </div>
              </div>
            </div>

            {/* Health Progress Overview */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Health Progress Overview
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CircularProgress
                      percentage={85}
                      size={40}
                      strokeWidth={10}
                      color="#10B981"
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Water intake
                      </p>
                      <p className="text-xs text-gray-500">
                        You've achieved 85% of your fitness goal this month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CircularProgress
                      percentage={92}
                      size={40}
                      strokeWidth={4}
                      color="#4A6CF7"
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Fitness goal
                      </p>
                      <p className="text-xs text-gray-500">
                        You've achieved 92% of your fitness goal this month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CircularProgress
                      percentage={78}
                      size={40}
                      strokeWidth={4}
                      color="#F59E0B"
                    />
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Weight progress
                      </p>
                      <p className="text-xs text-gray-500">
                        You've 50% closer to your target weight
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Tips */}
            <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Smart Tips
              </h3>
              <div className="bg-[#4A6CF7] rounded-lg p-4 text-white">
                <p className="text-sm font-medium mb-2">
                  Don't forget your afternoon snack!
                </p>
                <p className="text-xs opacity-90">
                  Based on your eating pattern, we recommend having a healthy
                  snack around 3 PM to maintain your energy levels.
                </p>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">💧</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">
                      Fitness goal
                    </p>
                    <p className="text-xs text-gray-500">
                      Increase your water intake by 15% of your fitness goal
                      this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
