import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const sidebarLinks = [
  { name: 'Button', path: '/docs/button' },
  { name: 'Input', path: '/docs/input' },
  { name: 'Badge', path: '/docs/badge' },
  { name: 'Avatar', path: '/docs/avatar' },
  { name: 'Tabs', path: '/docs/tabs' },
  { name: 'Select', path: '/docs/select' },
  { name: 'Icons', path: '/docs/icons' },
];

export default function DocsLayout() {
  return (
    <div className="flex max-w-7xl mx-auto w-full">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-900/50 min-h-[calc(100vh-3.5rem)] p-6 hidden md:block">
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Components</h4>
          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-white font-medium'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 min-h-[calc(100vh-3.5rem)] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Outlet />
      </main>
    </div>
  );
}
