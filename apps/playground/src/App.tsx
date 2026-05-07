import React, { useState, useEffect } from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, Avatar, Badge, Tabs, TabsList, TabsTrigger, TabsContent } from '@aruvili/react';

export default function App() {
  // Force dark mode for this specific Aruvili UI look
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-800">
      
      {/* Top Navbar */}
      <header className="flex h-14 items-center justify-between px-6 max-w-7xl mx-auto border-b border-zinc-900/50">
        <div className="flex items-center gap-2 font-semibold text-white">
          <svg viewBox="0 0 79 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.2895 23.1L36.5 31H32.7105C32.7105 31 21.9737 30.5 19.8684 20.6L19.4474 17.3V0.5H36.5L54.0789 13.3V40.3H70.9211V15.4H78.5V71.5H70.9211V47.2H54.0789V65.6H0.5V40.3H46.3947L46.2895 23.1ZM44.2895 15.4L33.9737 23.9C33.9737 23.9 27.0263 23.5 27.0263 18.6V7.5H33.9737L44.2895 15.4ZM7.65789 58.5V47.2H46.3947V58.5H7.65789Z" fill="url(#paint0_linear_1_5)"/>
            <path d="M27.0263 7.5H33.9737L44.2895 15.4L33.9737 23.9C33.9737 23.9 27.0263 23.5 27.0263 18.6M27.0263 7.5C27.0263 7.5 27.0263 13.7 27.0263 18.6M27.0263 7.5V18.6M46.2895 23.1L36.5 31H32.7105C32.7105 31 21.9737 30.5 19.8684 20.6L19.4474 17.3V0.5H36.5L54.0789 13.3V40.3H70.9211V15.4H78.5V71.5H70.9211V47.2H54.0789V65.6H0.5V40.3H46.3947L46.2895 23.1ZM7.65789 47.2V58.5H46.3947V47.2H7.65789Z" stroke="url(#paint1_linear_1_5)"/>
            <defs>
              <linearGradient id="paint0_linear_1_5" x1="39.5" y1="-6" x2="35.8679" y2="71.3294" gradientUnits="userSpaceOnUse">
                <stop stopColor="#04B74F"/>
                <stop offset="1" stopColor="#16542F"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1_5" x1="39.5" y1="0.5" x2="39.5" y2="71.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06AE4C"/>
                <stop offset="1" stopColor="#16542F"/>
              </linearGradient>
            </defs>
          </svg>
          <span>Aruvili UI</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900 text-zinc-400 text-xs border border-zinc-800">
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            Search ⌘K
          </div>
          <a href="#" className="hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center space-y-6 mb-24">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-tight">
            Build Beautiful Interfaces Fast
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Beautifully crafted components built for real world applications. Better defaults helping you ship faster.
          </p>
          <div className="pt-4">
            <Button variant="primary" className="rounded-full px-6 font-semibold">
              Get Started <span className="ml-2">→</span>
            </Button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <BillingCard />
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <ProfileCard />
            <EventCard />
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <FileTreeCard />
            <PasswordCard />
          </div>

        </div>
      </main>
    </div>
  );
}

// --- Extracted Components ---

function BillingCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing name</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-5">
        <Input placeholder="Enter your name" />
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-xs font-medium text-white mb-2">Country</h3>
            <Input 
              placeholder="Select option" 
              readOnly 
              className="cursor-pointer"
              iconRight={<svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>} 
            />
          </div>
          <div>
            <h3 className="text-xs font-medium text-white mb-2">City</h3>
            <Input 
              placeholder="Select option" 
              readOnly 
              className="cursor-pointer"
              iconRight={<svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>} 
            />
          </div>
        </div>
        <div>
          <h3 className="text-xs font-medium text-white mb-2">Address</h3>
          <Input placeholder="Enter your address" />
        </div>
        <Button variant="primary" className="w-full mt-2">Next →</Button>
      </CardContent>
    </Card>
  );
}
          
function ProfileCard() {
  return (
    <Card>
      <Tabs defaultValue="profile">
        <CardHeader className="pb-0 border-b-0">
          <TabsList className="mb-0 border-b-0 w-full">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </CardHeader>
        
        <TabsContent value="profile" className="mt-0">
          <CardContent className="pt-5 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <Avatar fallback="A" size="md" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">Aruvili</h3>
                <p className="text-xs text-zinc-500">hello@aruvili.com</p>
              </div>
              <Button variant="primary" size="sm">Follow</Button>
            </div>
            <p className="text-xs text-zinc-400 mb-4">We build world class open-source software products.</p>
            <div className="flex gap-4 text-xs font-medium">
              <span><strong className="text-white">4</strong> Following</span>
              <span><strong className="text-white">97.1K</strong> Followers</span>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="settings" className="mt-0">
          <CardContent className="pt-5 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs text-zinc-400">Settings panel configuration.</p>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

function EventCard() {
  return (
    <Card>
      <CardHeader className="pb-3 border-b-0">
        <CardTitle>Schedule an event</CardTitle>
        <CardDescription>Discussion of new marketing strategies and pricing for the new project</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <Avatar fallback="A" size="sm" className="bg-red-500 border-[#111]" />
            <Avatar fallback="B" size="sm" className="bg-blue-500 border-[#111]" />
          </div>
          <span className="text-xs text-zinc-500">1 awaiting</span>
          <Button variant="secondary" size="sm" className="ml-auto text-xs">Send Invite</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FileTreeCard() {
  return (
    <Card className="bg-[#111]">
      <CardContent className="p-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> 
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> guest
          </div>
          <div className="pl-6 flex flex-col gap-2 text-sm text-zinc-400">
            <div className="flex items-center gap-2"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> downloads</div>
            <div className="pl-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-zinc-300"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Images</div>
              <div className="pl-6 flex items-center gap-2"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> image.png</div>
            </div>
            <div className="flex items-center gap-2"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> documents</div>
            <div className="pl-6 flex flex-col gap-2">
              <div className="flex items-center gap-2"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> somefile.txt</div>
              <div className="flex items-center gap-2"> <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> somefile.pdf</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PasswordCard() {
  return (
    <Card>
      <CardHeader className="pb-3 border-b-0">
        <CardTitle>Create Password</CardTitle>
        <CardDescription>To ensure the safety and security of your account, it's essential to create a strong password.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          type="password" 
          value="12345678" 
          readOnly
          iconRight={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-500"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>}
        />
        <div className="flex justify-between text-xs items-center">
          <span className="text-zinc-300 font-medium">Password Strength</span>
          <Badge variant="danger">Weak</Badge>
        </div>
        <Button variant="primary" className="w-full mt-2">Create password</Button>
      </CardContent>
    </Card>
  );
}
