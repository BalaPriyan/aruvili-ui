import React from 'react';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar, 
  Badge, 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem, 
  FileTree, 
  FileTreeNode,
  Typography,
  Grid,
  Stack,
  Box,
  IconButton,
  ButtonGroup,
  Breadcrumbs,
  Stepper,
  Pagination,
  Switch,
  Checkbox
} from '@aruviliui/react';
import * as Icons from '@aruviliui/icons';

export function FileTreeDoc() {
  const treeData: FileTreeNode[] = [
    {
      id: '1',
      name: 'src',
      type: 'folder',
      isOpen: true,
      children: [
        {
          id: '2',
          name: 'components',
          type: 'folder',
          children: [
            { id: '3', name: 'Button.tsx', type: 'file' },
            { id: '4', name: 'Input.tsx', type: 'file' },
            { id: '10', name: 'FileTree.tsx', type: 'file' },
          ],
        },
        { id: '5', name: 'App.tsx', type: 'file' },
        { id: '6', name: 'index.css', type: 'file' },
      ],
    },
    {
      id: '7',
      name: 'public',
      type: 'folder',
      children: [{ id: '8', name: 'favicon.ico', type: 'file' }],
    },
    { id: '9', name: 'package.json', type: 'file' },
  ];

  const code = `
import { FileTree } from '@aruviliui/react';

const treeData = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    isOpen: true,
    children: [
      {
        id: '2',
        name: 'components',
        type: 'folder',
        children: [
          { id: '3', name: 'Button.tsx', type: 'file' },
          { id: '4', name: 'Input.tsx', type: 'file' },
        ],
      },
      { id: '5', name: 'App.tsx', type: 'file' },
    ],
  },
  { id: '9', name: 'package.json', type: 'file' },
];

export default function Example() {
  return (
    <div className="w-64 border border-zinc-800 rounded-lg p-2 bg-black">
      <FileTree data={treeData} onNodeClick={(node) => console.log(node)} />
    </div>
  );
}
  `;

  return (
    <DocSection title="File Tree" description="A recursive tree component for displaying hierarchical file structures.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Directory Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-sm border border-zinc-800/50 rounded-xl p-3 bg-zinc-950/50">
                <FileTree data={treeData} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

function DocSection({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
        <p className="text-zinc-400 text-lg">{description}</p>
      </div>
      <div className="pt-4">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative group rounded-lg overflow-hidden bg-[#0a0a0a] border border-zinc-800/50 mt-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/50 bg-[#111]">
        <span className="text-xs font-medium text-zinc-400">Usage</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-zinc-300 font-mono leading-relaxed">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

export function ButtonDoc() {
  const code = `
import { Button, IconButton, ButtonGroup } from '@aruviliui/react';
import { PlusIcon, EditIcon, TrashIcon } from '@aruviliui/icons';

export default function Example() {
  return (
    <div className="space-y-8">
      {/* Variants */}
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>

      {/* Icon Buttons */}
      <div className="flex gap-4">
        <IconButton variant="primary"><PlusIcon /></IconButton>
        <IconButton variant="secondary"><EditIcon /></IconButton>
        <IconButton variant="danger"><TrashIcon /></IconButton>
      </div>

      {/* Button Group */}
      <ButtonGroup>
        <Button variant="secondary">Years</Button>
        <Button variant="secondary">Months</Button>
        <Button variant="secondary">Days</Button>
      </ButtonGroup>
    </div>
  );
}
  `;

  return (
    <DocSection title="Button" description="Displays a button or a component that looks like a button.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Variants & Groups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="danger">Danger Button</Button>
              </div>
              
              <div className="flex flex-wrap gap-4 items-center">
                <IconButton variant="primary"><Icons.PlusIcon size={18} /></IconButton>
                <IconButton variant="secondary"><Icons.EditIcon size={18} /></IconButton>
                <IconButton variant="danger"><Icons.TrashIcon size={18} /></IconButton>
              </div>

              <ButtonGroup>
                <Button variant="secondary">Years</Button>
                <Button variant="secondary">Months</Button>
                <Button variant="secondary">Days</Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function InputDoc() {
  const code = `
import { Input } from '@aruviliui/react';

export default function Example() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
    </div>
  );
}
  `;

  return (
    <DocSection title="Input" description="Displays a form input field or a component that looks like an input field.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Example</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 max-w-sm">
              <Input type="email" placeholder="Email address" />
              <Input type="password" placeholder="Password" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function AvatarDoc() {
  const code = `
import { Avatar } from '@aruviliui/react';

export default function Example() {
  return (
    <div className="flex gap-4">
      <Avatar src="https://i.pravatar.cc/150?u=1" fallback="JD" size="md" />
      <Avatar src="" fallback="AR" size="md" />
      <Avatar src="https://i.pravatar.cc/150?u=2" fallback="UI" size="lg" />
    </div>
  );
}
  `;

  return (
    <DocSection title="Avatar" description="An image element with a fallback for representing the user.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Sizes & Fallbacks</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4 items-center">
              <Avatar src="https://i.pravatar.cc/150?u=1" fallback="JD" size="md" />
              <Avatar src="" fallback="AR" size="md" />
              <Avatar src="https://i.pravatar.cc/150?u=2" fallback="UI" size="lg" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function BadgeDoc() {
  const code = `
import { Badge } from '@aruviliui/react';

export default function Example() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">New</Badge>
      <Badge variant="secondary">Alpha</Badge>
      <Badge variant="outline">Enterprise</Badge>
    </div>
  );
}
  `;

  return (
    <DocSection title="Badge" description="Displays a badge or a component that looks like a badge.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Badge variant="default">New</Badge>
              <Badge variant="secondary">Alpha</Badge>
              <Badge variant="outline">Enterprise</Badge>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function TabsDoc() {
  const code = `
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@aruviliui/react';

export default function Example() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
  `;

  return (
    <DocSection title="Tabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Example</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="pt-4 text-zinc-400">Account settings here.</TabsContent>
                <TabsContent value="password" className="pt-4 text-zinc-400">Change your password here.</TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function SelectDoc() {
  const code = `
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@aruviliui/react';

export default function Example() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  );
}
  `;

  return (
    <DocSection title="Select" description="Displays a collapsible list of options for the user to pick from.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-xs">
                <Select defaultValue="apple">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function IconsDoc() {
  const code = `
// 1. Static Tree-shaken Import
import { CheckIcon, ServerIcon } from '@aruviliui/icons';

export function StaticExample() {
  return <ServerIcon className="h-5 w-5 text-blue-500" />;
}

// 2. Dynamic Registry Rendering (Data-driven)
import { Icon, IconName } from '@aruviliui/icons';

export function DynamicExample({ iconName }: { iconName: IconName }) {
  // Renders the icon dynamically strictly from the central registry
  return <Icon name={iconName} className="h-5 w-5 text-emerald-500" />;
}
  `;

  return (
    <DocSection title="Icons" description="A highly optimized custom SVG icon suite powered by a dynamic centralized registry.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Grid Overview</TabsTrigger>
          <TabsTrigger value="code">Usage & Dynamic Rendering</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(Icons).map(([name, IconExport]) => {
              if (name === 'IconProps' || name === 'iconRegistry' || name === 'Icon') return null; 
              const Component = IconExport as React.ElementType;
              return (
                <Card key={name} className="flex flex-col items-center justify-center p-4 gap-3 bg-zinc-900/20 hover:bg-zinc-800/50 transition-colors border-zinc-800/50">
                  <Component className="h-6 w-6 text-zinc-300" />
                  <span className="text-[10px] text-zinc-500 truncate w-full text-center">{name}</span>
                </Card>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function TypographyDoc() {
  const code = `
import { Typography } from '@aruviliui/react';

export default function Example() {
  return (
    <div className="space-y-4">
      <Typography variant="h1">The Joke Tax Chronicles</Typography>
      <Typography variant="h2">The King's Plan</Typography>
      <Typography variant="p">
        Once upon a time, in a far-away land, there was a very lazy king who spent all day lounging on his throne.
      </Typography>
      <Typography variant="code">npm install @aruviliui/ui</Typography>
    </div>
  );
}
  `;

  return (
    <DocSection title="Typography" description="Standardized typographic elements for consistent headings and body text.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Typography variant="h1">The Joke Tax Chronicles</Typography>
              <Typography variant="h2">Chapter 1: The King's Plan</Typography>
              <Typography variant="lead">A long time ago, in a galaxy far, far away...</Typography>
              <Typography variant="p">
                Once upon a time, in a far-away land, there was a very lazy king who spent all day lounging on his throne.
              </Typography>
              <Typography variant="code">npm install @aruviliui/ui</Typography>
              <Typography variant="small">Last updated: 2024</Typography>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function LayoutDoc() {
  const code = `
import { Grid, Stack, Box } from '@aruviliui/react';

export default function Example() {
  return (
    <Stack gap={8}>
      {/* Grid Layout */}
      <Grid cols={3} gap={4}>
        <Box className="h-20 bg-zinc-800 rounded-md" />
        <Box className="h-20 bg-zinc-800 rounded-md" />
        <Box className="h-20 bg-zinc-800 rounded-md" />
      </Grid>

      {/* Stack Layout */}
      <Stack gap={2}>
        <Box className="h-8 bg-zinc-800 rounded-md" />
        <Box className="h-8 bg-zinc-800 rounded-md" />
      </Stack>
    </Stack>
  );
}
  `;

  return (
    <DocSection title="Layout" description="Primitive components for controlling spacing, alignment, and grid layouts.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-6 space-y-8">
              <div className="space-y-2">
                <Typography variant="small">Grid (3 columns)</Typography>
                <Grid cols={3} gap={4}>
                  <Box className="h-20 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-500">1</Box>
                  <Box className="h-20 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-500">2</Box>
                  <Box className="h-20 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-500">3</Box>
                </Grid>
              </div>

              <div className="space-y-2">
                <Typography variant="small">Stack (Vertical, gap 4)</Typography>
                <Stack gap={4}>
                  <Box className="h-10 bg-zinc-900 border border-zinc-800 rounded-md" />
                  <Box className="h-10 bg-zinc-900 border border-zinc-800 rounded-md" />
                  <Box className="h-10 bg-zinc-900 border border-zinc-800 rounded-md" />
                </Stack>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function CardDoc() {
  const code = `
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@aruviliui/react';

export default function Example() {
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          Everything you need to build beautiful, high-performance web applications.
        </p>
      </CardContent>
    </Card>
  );
}
  `;

  return (
    <DocSection title="Card" description="Displays a card with header, content, and footer.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card className="max-w-[400px]">
            <CardHeader>
              <CardTitle>Enterprise Analytics</CardTitle>
              <CardDescription>View your monthly performance and growth metrics.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-32 bg-zinc-900/50 rounded-md border border-zinc-800 flex items-center justify-center text-zinc-500 italic">
                Chart Placeholder
              </div>
              <p className="text-sm text-zinc-400">
                You have seen a 12% increase in user retention this month. Keep up the great work!
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function BreadcrumbsDoc() {
  const code = `
import { Breadcrumbs } from '@aruviliui/react';
import { HomeIcon } from '@aruviliui/icons';

export default function Example() {
  const items = [
    { label: 'Home', href: '/', icon: <HomeIcon size={14} /> },
    { label: 'Components', href: '/docs' },
    { label: 'Breadcrumbs', active: true }
  ];

  return <Breadcrumbs items={items} />;
}
  `;

  return (
    <DocSection title="Breadcrumbs" description="Displays the path to the current resource using a hierarchy of links.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <Breadcrumbs 
                items={[
                  { label: 'Home', href: '/', icon: <Icons.HomeIcon size={14} /> },
                  { label: 'Components', href: '/docs' },
                  { label: 'Breadcrumbs', active: true }
                ]} 
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function StepperDoc() {
  const code = `
import { Stepper } from '@aruviliui/react';

export default function Example() {
  const steps = [
    { title: 'Account info', description: 'Enter your credentials' },
    { title: 'Payment method', description: 'Credit card or PayPal' },
    { title: 'Confirmation', description: 'Review your order' }
  ];

  return <Stepper steps={steps} currentStep={1} />;
}
  `;

  return (
    <DocSection title="Stepper" description="A visual representation of progress through a multi-step process.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-8 space-y-12">
              <div className="space-y-4">
                <Typography variant="small" className="text-zinc-500 font-bold uppercase tracking-tight">Horizontal Orientation</Typography>
                <Stepper 
                  steps={[
                    { title: 'Account', description: 'Done' },
                    { title: 'Payment', description: 'Processing' },
                    { title: 'Confirm', description: 'Waiting' }
                  ]} 
                  currentStep={1} 
                />
              </div>

              <div className="space-y-4">
                <Typography variant="small" className="text-zinc-500 font-bold uppercase tracking-tight">Vertical Orientation</Typography>
                <Stepper 
                  orientation="vertical"
                  steps={[
                    { title: 'Upload Files', description: '2 files selected' },
                    { title: 'Optimize Assets', description: 'Compressing...' },
                    { title: 'Finalize Deployment', description: 'Cloudfront setup' }
                  ]} 
                  currentStep={1} 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function PaginationDoc() {
  const code = `
import { Pagination } from '@aruviliui/react';
import { useState } from 'react';

export default function Example() {
  const [page, setPage] = useState(1);
  return (
    <Pagination 
      total={100} 
      current={page} 
      pageSize={10} 
      onChange={setPage} 
    />
  );
}
  `;

  return (
    <DocSection title="Pagination" description="Navigation through a long list of content divided into multiple pages.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-8 space-y-8">
              <div className="space-y-4">
                <Typography variant="small" className="text-zinc-500 font-bold uppercase tracking-tight">Standard Pagination</Typography>
                <Pagination total={100} current={1} />
              </div>

              <div className="space-y-4">
                <Typography variant="small" className="text-zinc-500 font-bold uppercase tracking-tight">Active Page in Middle (Ellipsis)</Typography>
                <Pagination total={250} current={12} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function SwitchDoc() {
  const code = `
import { Switch } from '@aruviliui/react';
import { useState } from 'react';

export default function Example() {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch 
      checked={enabled} 
      onCheckedChange={setEnabled} 
      label="Enable notifications" 
    />
  );
}
  `;

  return (
    <DocSection title="Switch" description="A control that allows the user to toggle a setting on or off.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-8 space-y-6">
              <Switch label="Sync data in background" checked={true} />
              <Switch label="Marketing emails" />
              <Switch label="Disabled switch" disabled />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

export function CheckboxDoc() {
  const code = `
import { Checkbox } from '@aruviliui/react';
import { useState } from 'react';

export default function Example() {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox 
      checked={checked} 
      onCheckedChange={setChecked} 
      label="Accept terms and conditions" 
    />
  );
}
  `;

  return (
    <DocSection title="Checkbox" description="A control that allows the user to select one or more items from a set.">
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <Card>
            <CardContent className="p-8 space-y-6">
              <Checkbox label="Agree to terms" checked={true} />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox label="Indeterminate state" checked="indeterminate" />
              <Checkbox label="Disabled checkbox" disabled />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </DocSection>
  );
}

