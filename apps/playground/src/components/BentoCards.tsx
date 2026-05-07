import React from 'react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, Avatar, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@aruvili/react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setCity, RootState } from '@aruvili/state-redux';
import { FolderIcon, FolderOpenIcon, FileIcon, FileTextIcon, EyeIcon, ImageIcon, DownloadIcon } from '@aruvili/icons';

export function BillingCard() {
  const dispatch = useDispatch();
  const country = useSelector((state: RootState) => state.billing.country);
  const city = useSelector((state: RootState) => state.billing.city);

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
            <Select value={country} onValueChange={(val) => dispatch(setCountry(val))}>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-xs font-medium text-white mb-2">City</h3>
            <Select value={city} onValueChange={(val) => dispatch(setCity(val))}>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sf">San Francisco</SelectItem>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ldn">London</SelectItem>
                <SelectItem value="syd">Sydney</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-medium text-white mb-2">Email address</h3>
          <Input placeholder="Enter your email" />
        </div>
        <Button variant="primary" className="w-full">
          Save changes
        </Button>
      </CardContent>
    </Card>
  );
}
          
export function ProfileCard() {
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

export function EventCard() {
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

export function FileTreeCard() {
  return (
    <Card className="bg-[#111]">
      <CardContent className="p-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <FolderOpenIcon className="h-4 w-4 text-zinc-500" /> guest
          </div>
          <div className="pl-6 flex flex-col gap-2 text-sm text-zinc-400">
            <div className="flex items-center gap-2"> <DownloadIcon className="h-4 w-4 text-zinc-500" /> downloads</div>
            <div className="pl-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-zinc-300"> <FolderOpenIcon className="h-4 w-4 text-zinc-500" /> Images</div>
              <div className="pl-6 flex items-center gap-2"> <ImageIcon className="h-4 w-4 text-zinc-500" /> image.png</div>
            </div>
            <div className="flex items-center gap-2"> <FolderIcon className="h-4 w-4 text-zinc-500" /> documents</div>
            <div className="pl-6 flex flex-col gap-2">
              <div className="flex items-center gap-2"> <FileTextIcon className="h-4 w-4 text-zinc-500" /> somefile.txt</div>
              <div className="flex items-center gap-2"> <FileIcon className="h-4 w-4 text-zinc-500" /> somefile.pdf</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PasswordCard() {
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
          iconRight={<EyeIcon className="h-4 w-4 text-zinc-500 cursor-pointer" />}
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
