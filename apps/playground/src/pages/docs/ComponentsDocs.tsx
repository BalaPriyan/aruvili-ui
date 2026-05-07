import React from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, Avatar, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@aruvili/react';
import * as Icons from '@aruvili/icons';

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

export function ButtonDoc() {
  return (
    <DocSection title="Button" description="Displays a button or a component that looks like a button.">
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>Primary, secondary, and danger styles.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
        </CardContent>
      </Card>
    </DocSection>
  );
}

export function InputDoc() {
  return (
    <DocSection title="Input" description="Displays a form input field or a component that looks like an input field.">
      <Card>
        <CardHeader>
          <CardTitle>Default Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Input placeholder="Enter email address" />
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-white">With Icon</h4>
            <Input placeholder="Enter password" type="password" iconRight={<Icons.EyeIcon className="h-4 w-4 text-zinc-500 cursor-pointer" />} />
          </div>
        </CardContent>
      </Card>
    </DocSection>
  );
}

export function BadgeDoc() {
  return (
    <DocSection title="Badge" description="Displays a badge or a component that looks like a badge.">
      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 items-center">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="danger">Danger</Badge>
        </CardContent>
      </Card>
    </DocSection>
  );
}

export function AvatarDoc() {
  return (
    <DocSection title="Avatar" description="An image element with a fallback for representing the user.">
      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 items-center">
          <Avatar fallback="SM" size="sm" />
          <Avatar fallback="MD" size="md" />
          <Avatar fallback="LG" size="lg" />
        </CardContent>
      </Card>
    </DocSection>
  );
}

export function TabsDoc() {
  return (
    <DocSection title="Tabs" description="A set of layered sections of content—known as tab panels—that are displayed one at a time.">
      <Card>
        <CardHeader>
          <CardTitle>Example</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="pt-4 text-sm text-zinc-400">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password" className="pt-4 text-sm text-zinc-400">
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </DocSection>
  );
}

export function SelectDoc() {
  return (
    <DocSection title="Select" description="Displays a list of options for the user to pick from—triggered by a button.">
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
    </DocSection>
  );
}

export function IconsDoc() {
  return (
    <DocSection title="Icons" description="A highly optimized custom SVG icon suite with a distinctive 1.75px stroke width.">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Object.entries(Icons).map(([name, IconComponent]) => {
          if (name === 'IconProps') return null; 
          return (
            <Card key={name} className="flex flex-col items-center justify-center p-4 gap-3 bg-zinc-900/20 hover:bg-zinc-800/50 transition-colors border-zinc-800/50">
              <IconComponent className="h-6 w-6 text-zinc-300" />
              <span className="text-[10px] text-zinc-500 truncate w-full text-center">{name}</span>
            </Card>
          );
        })}
      </div>
    </DocSection>
  );
}
