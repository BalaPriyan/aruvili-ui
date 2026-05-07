import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Flex, Box, Typography, Stack } from '@aruviliui/react';

const navigationLinks = [
  { name: 'Breadcrumbs', path: '/docs/breadcrumbs' },
  { name: 'Pagination', path: '/docs/pagination' },
  { name: 'Stepper', path: '/docs/stepper' },
];

const generalLinks = [
  { name: 'Button', path: '/docs/button' },
  { name: 'Typography', path: '/docs/typography' },
  { name: 'Layout', path: '/docs/layout' },
];

const dataDisplayLinks = [
  { name: 'Avatar', path: '/docs/avatar' },
  { name: 'Badge', path: '/docs/badge' },
  { name: 'Card', path: '/docs/card' },
  { name: 'File Tree', path: '/docs/file-tree' },
  { name: 'Icons', path: '/docs/icons' },
];

const dataEntryLinks = [
  { name: 'Checkbox', path: '/docs/checkbox' },
  { name: 'Input', path: '/docs/input' },
  { name: 'Select', path: '/docs/select' },
  { name: 'Switch', path: '/docs/switch' },
  { name: 'Tabs', path: '/docs/tabs' },
];

function SidebarSection({ title, links }: { title: string; links: { name: string; path: string }[] }) {
  return (
    <div>
      <Typography variant="small" className="uppercase tracking-wider text-zinc-500 font-bold mb-3 block px-3">
        {title}
      </Typography>
      <Stack gap={1}>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-zinc-800 text-white font-medium shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </Stack>
    </div>
  );
}

export default function DocsLayout() {
  return (
    <Flex className="max-w-7xl mx-auto w-full">
      {/* Sidebar Navigation */}
      <Box as="aside" className="w-64 border-r border-zinc-900/50 min-h-[calc(100vh-3.5rem)] p-6 hidden md:block sticky top-14 overflow-y-auto">
        <Stack gap={8}>
          <SidebarSection title="General" links={generalLinks} />
          <SidebarSection title="Navigation" links={navigationLinks} />
          <SidebarSection title="Data Entry" links={dataEntryLinks} />
          <SidebarSection title="Data Display" links={dataDisplayLinks} />
        </Stack>
      </Box>

      {/* Main Content Area */}
      <Box as="main" className="flex-1 p-8 min-h-[calc(100vh-3.5rem)] overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Outlet />
      </Box>
    </Flex>
  );
}

