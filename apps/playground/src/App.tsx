import React, { useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Flex, Typography, Box } from '@aruviliui/react';

import Home from './pages/Home';
import DocsLayout from './pages/DocsLayout';
import { 
  ButtonDoc, 
  InputDoc, 
  BadgeDoc, 
  AvatarDoc, 
  TabsDoc, 
  SelectDoc,
  IconsDoc,
  FileTreeDoc,
  TypographyDoc,
  LayoutDoc,
  CardDoc,
  BreadcrumbsDoc,
  StepperDoc,
  PaginationDoc,
  SwitchDoc,
  CheckboxDoc
} from './pages/docs/ComponentsDocs';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Box className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-800">
      <header className="w-full border-b border-zinc-900/50 shrink-0 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <Flex className="h-14 items-center px-6 w-full max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <svg viewBox="0 0 79 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transition-transform group-hover:scale-110">
              <path fillRule="evenodd" clipRule="evenodd" d="M46.2895 23.1L36.5 31H32.7105C32.7105 31 21.9737 30.5 19.8684 20.6L19.4474 17.3V0.5H36.5L54.0789 13.3V40.3H70.9211V15.4H78.5V71.5H70.9211V47.2H54.0789V65.6H0.5V40.3H46.3947L46.2895 23.1ZM44.2895 15.4L33.9737 23.9C33.9737 23.9 27.0263 23.5 27.0263 18.6V7.5H33.9737L44.2895 15.4ZM7.65789 58.5V47.2H46.3947V58.5H7.65789Z" fill="url(#paint0_linear_1_5)"/>
              <path d="M27.0263 7.5H33.9737L44.2895 15.4L33.9737 23.9C33.9737 23.9 27.0263 23.5 27.0263 18.6M27.0263 7.5C27.0263 7.5 27.0263 13.7 27.0263 18.6M27.0263 7.5V18.6M46.2895 23.1L36.5 31H32.7105C32.7105 31 21.9737 30.5 19.8684 20.6L19.4474 17.3V0.5H36.5L54.0789 13.3V40.3H70.9211V15.4H78.5V71.5H70.9211V47.2H54.0789V65.6H0.5V40.3H46.3947L46.2895 23.1ZM7.65789 47.2V58.5H46.3947V47.2H7.65789Z" stroke="url(#paint1_linear_1_5)"/>
              <defs>
                <linearGradient id="paint0_linear_1_5" x1="39.5" y1="-6" x2="35.8679" y2="71.3294" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#04B74F"/>
                  <stop offset="1" stopColor="#02E761" stopOpacity="0.43"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_5" x1="39.5" y1="-6" x2="35.8679" y2="71.3294" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#04B74F"/>
                  <stop offset="1" stopColor="#02E761" stopOpacity="0.43"/>
                </linearGradient>
              </defs>
            </svg>
            <Typography as="span" className="font-bold text-lg tracking-tight text-white leading-none">aruvili</Typography>
          </Link>

          <div className="flex-1" />

          <Flex className="items-center gap-6 shrink-0">
            <Link to="/docs" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Components</Link>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Docs</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">GitHub</a>
          </Flex>
        </Flex>
      </header>

      <Box className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="button" replace />} />
            <Route path="button" element={<ButtonDoc />} />
            <Route path="input" element={<InputDoc />} />
            <Route path="badge" element={<BadgeDoc />} />
            <Route path="avatar" element={<AvatarDoc />} />
            <Route path="tabs" element={<TabsDoc />} />
            <Route path="select" element={<SelectDoc />} />
            <Route path="icons" element={<IconsDoc />} />
            <Route path="file-tree" element={<FileTreeDoc />} />
            <Route path="typography" element={<TypographyDoc />} />
            <Route path="layout" element={<LayoutDoc />} />
            <Route path="card" element={<CardDoc />} />
            <Route path="breadcrumbs" element={<BreadcrumbsDoc />} />
            <Route path="stepper" element={<StepperDoc />} />
            <Route path="pagination" element={<PaginationDoc />} />
            <Route path="switch" element={<SwitchDoc />} />
            <Route path="checkbox" element={<CheckboxDoc />} />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}

