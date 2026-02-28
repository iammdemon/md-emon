import React, { useState } from 'react';
import {
    LayoutDashboard,
    BarChart2,
    ShoppingCart,
    Users,
    Settings,
    Search,
    Bell,
    ArrowUpRight,
    ArrowDownRight,
    MoreHorizontal
} from 'lucide-react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const sidebarItems = [
        { id: 'Dashboard', icon: LayoutDashboard },
        { id: 'Analytics', icon: BarChart2 },
        { id: 'Orders', icon: ShoppingCart },
        { id: 'Users', icon: Users },
        { id: 'Settings', icon: Settings }
    ];

    const stats = [
        { title: 'Total Revenue', value: '$48,294', change: '+12.5%', isPositive: true },
        { title: 'Active Users', value: '12,490', change: '+5.2%', isPositive: true },
        { title: 'Total Orders', value: '3,842', change: '-2.4%', isPositive: false },
        { title: 'Weekly Growth', value: '24.8%', change: '+18.2%', isPositive: true }
    ];

    const recentActivity = [
        { id: 'ORD-001', user: 'Michael Chen', action: 'Purchased Pro Plan', date: '2 mins ago', amount: '$299.00', status: 'Completed' },
        { id: 'ORD-002', user: 'Sarah Jenkins', action: 'Refunded Basic Plan', date: '15 mins ago', amount: '-$29.00', status: 'Refunded' },
        { id: 'ORD-003', user: 'Alex Thompson', action: 'Purchased Enterprise', date: '1 hour ago', amount: '$999.00', status: 'Completed' },
        { id: 'ORD-004', user: 'David Kim', action: 'Renewed Subscription', date: '2 hours ago', amount: '$99.00', status: 'Completed' },
    ];

    return (
        <div className="min-h-screen bg-[#FDFDFD] text-[#111111] font-sans flex">
            {/* Sidebar */}
            <aside className="w-[240px] bg-[#FDFDFD] border-r border-[#EAEAEA] flex flex-col flex-shrink-0 h-screen sticky top-0 z-10">
                <div className="h-[72px] flex items-center px-6 border-b border-[#EAEAEA]">
                    <div className="w-7 h-7 bg-[#111111] rounded-md flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-white rounded-sm" />
                    </div>
                    <span className="font-semibold text-[15px] tracking-tight">Acme Stack</span>
                </div>

                <nav className="flex-1 py-6 px-4 space-y-1">
                    {sidebarItems.map(item => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 ease-in-out text-[14px] font-medium
                                    ${isActive ? 'bg-[#111111] text-white shadow-sm' : 'text-[#666666] hover:bg-[#F5F5F5] hover:text-[#111111]'}`}
                            >
                                <Icon size={18} className={isActive ? 'text-white' : 'text-[#999999]'} strokeWidth={isActive ? 2.5 : 2} />
                                {item.id}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-[#EAEAEA]">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F5F5F5] cursor-pointer transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#EAEAEA] overflow-hidden flex-shrink-0">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e6e6e6" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col text-left flex-1 min-w-0">
                            <span className="text-[13px] font-medium text-[#111111] truncate">Admin User</span>
                            <span className="text-[11px] text-[#666666] truncate">admin@acme.com</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                {/* Header */}
                <header className="h-[72px] bg-[#FDFDFD] border-b border-[#EAEAEA] flex items-center justify-between px-8 flex-shrink-0 sticky top-0 z-10">
                    <div className="font-medium text-[16px]">
                        Overview
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block w-[280px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]" size={16} />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="w-full bg-[#F5F5F5] border border-transparent rounded-lg pl-9 pr-4 py-2 text-[14px] focus:outline-none focus:bg-white focus:border-[#EAEAEA] focus:ring-2 focus:ring-[#111111]/5 transition-all outline-none"
                            />
                        </div>
                        <button className="relative text-[#666666] hover:text-[#111111] transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-[#111111] rounded-full border border-white translate-x-1/2 -translate-y-1/2"></span>
                        </button>
                    </div>
                </header>

                {/* Dashboard Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-8 bg-[#FAFAFA]">
                    <div className="max-w-[1300px] mx-auto space-y-6">

                        {/* Summary Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white border border-[#EAEAEA] rounded-[12px] p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <div className="text-[13px] font-medium text-[#666666] mb-3">{stat.title}</div>
                                    <div className="flex items-end justify-between">
                                        <div className="text-[28px] font-semibold tracking-tight leading-none">{stat.value}</div>
                                        <div className={`flex items-center text-[13px] font-medium ${stat.isPositive ? 'text-[#111111]' : 'text-[#666666]'}`}>
                                            {stat.isPositive ? <ArrowUpRight size={16} className="mr-0.5" /> : <ArrowDownRight size={16} className="mr-0.5 text-[#666666]" />}
                                            {stat.change}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Charts Area */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[340px]">
                            {/* Main Line Chart */}
                            <div className="lg:col-span-2 bg-white border border-[#EAEAEA] rounded-[12px] shadow-sm p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-semibold text-[15px]">Revenue Performance</h3>
                                    <select className="bg-[#F5F5F5] border-none text-[13px] font-medium rounded-md px-3 py-1.5 focus:outline-none cursor-pointer">
                                        <option>Last 30 Days</option>
                                        <option>This Year</option>
                                    </select>
                                </div>

                                {/* SVG Line Chart Mock */}
                                <div className="flex-1 w-full relative flex items-end">
                                    {/* Grid lines */}
                                    <div className="absolute inset-x-0 bottom-0 h-full flex flex-col justify-between pointer-events-none pb-[20px]">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-full border-b border-[#F5F5F5] h-[0px]"></div>
                                        ))}
                                    </div>
                                    <svg className="w-full h-[80%] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#111111" stopOpacity="0.1" />
                                                <stop offset="100%" stopColor="#111111" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,80 C10,70 20,90 30,60 C40,30 50,60 60,40 C70,20 80,40 100,10 L100,100 L0,100 Z" fill="url(#gradient)" />
                                        <path d="M0,80 C10,70 20,90 30,60 C40,30 50,60 60,40 C70,20 80,40 100,10" fill="none" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="100" cy="10" r="3" fill="#111111" className="animate-pulse" />
                                    </svg>
                                </div>
                                <div className="flex justify-between text-[#999999] text-[12px] font-medium mt-3">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                </div>
                            </div>

                            {/* Small Bar Chart */}
                            <div className="bg-white border border-[#EAEAEA] rounded-[12px] shadow-sm p-6 flex flex-col">
                                <h3 className="font-semibold text-[15px] mb-8">Traffic Sources</h3>
                                <div className="flex-1 flex items-end justify-between gap-2">
                                    {[40, 70, 45, 90, 65, 30].map((h, i) => (
                                        <div key={i} className="w-full bg-[#F5F5F5] rounded-t-sm relative group h-full flex items-end">
                                            <div
                                                className="w-full bg-[#111111] rounded-t-sm transition-all duration-300 group-hover:bg-[#333333]"
                                                style={{ height: `${h}%` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-[#999999] text-[12px] font-medium mt-3">
                                    <span>Direct</span>
                                    <span>Search</span>
                                    <span>Social</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity Table */}
                        <div className="bg-white border border-[#EAEAEA] rounded-[12px] shadow-sm overflow-hidden">
                            <div className="px-6 py-5 border-b border-[#EAEAEA] flex items-center justify-between">
                                <h3 className="font-semibold text-[15px]">Recent Activity</h3>
                                <button className="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors">
                                    View all
                                </button>
                            </div>
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-nowrap">
                                    <thead>
                                        <tr className="bg-[#FAFAFA] text-left text-[12px] font-medium text-[#666666] uppercase tracking-wider">
                                            <th className="px-6 py-4">Transaction / ID</th>
                                            <th className="px-6 py-4">Customer</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4 text-right">Amount</th>
                                            <th className="px-6 py-4 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#EAEAEA]">
                                        {recentActivity.map((activity, idx) => (
                                            <tr key={idx} className="hover:bg-[#FAFAFA] transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-[14px] text-[#111111]">{activity.action}</div>
                                                    <div className="text-[12px] text-[#999999] mt-0.5">{activity.id}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[10px] font-bold text-[#111111]">
                                                            {activity.user.charAt(0)}
                                                        </div>
                                                        <span className="text-[14px] text-[#666666]">{activity.user}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-[14px] text-[#666666]">
                                                    {activity.date}
                                                </td>
                                                <td className="px-6 py-4 text-[14px] font-medium text-[#111111] text-right">
                                                    {activity.amount}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-[12px] font-medium
                                                        ${activity.status === 'Completed' ? 'bg-[#F5F5F5] text-[#111111]' : 'bg-red-50 text-red-600'}`}>
                                                        {activity.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;

