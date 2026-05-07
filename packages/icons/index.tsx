import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

/**
 * Enterprise Icon Registry
 */
export const iconRegistry = {
  CheckIcon: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  ChevronDownIcon: (
    <>
      <path d="m6 9 6 6 6-6" />
    </>
  ),
  ChevronUpIcon: (
    <>
      <path d="m18 15-6-6-6 6" />
    </>
  ),
  ChevronRightIcon: (
    <>
      <path d="m9 18 6-6-6-6" />
    </>
  ),
  ChevronLeftIcon: (
    <>
      <path d="m15 18-6-6 6-6" />
    </>
  ),
  FolderIcon: (
    <>
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </>
  ),
  FolderOpenIcon: (
    <>
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <path d="M2 10h20" />
    </>
  ),
  FileIcon: (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    </>
  ),
  FileTextIcon: (
    <>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </>
  ),
  EyeIcon: (
    <>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  EyeOffIcon: (
    <>
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </>
  ),
  ImageIcon: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </>
  ),
  DownloadIcon: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </>
  ),
  ArrowRightIcon: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  ArrowLeftIcon: (
    <>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </>
  ),
  SearchIcon: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  BellIcon: (
    <>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </>
  ),
  SettingsIcon: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  UserIcon: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  LogOutIcon: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </>
  ),
  MenuIcon: (
    <>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </>
  ),
  XIcon: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  HomeIcon: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  CalendarIcon: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </>
  ),
  ClockIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  LinkIcon: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  TrashIcon: (
    <>
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </>
  ),
  EditIcon: (
    <>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </>
  ),
  PlusIcon: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),
  MailIcon: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  LockIcon: (
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  UnlockIcon: (
    <>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </>
  ),
  StarIcon: (
    <>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </>
  ),
  HeartIcon: (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </>
  ),
  InfoIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </>
  ),
  AlertTriangleIcon: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" x2="12" y1="9" y2="13" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </>
  ),
  CheckCircleIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  XCircleIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </>
  ),
  AlertCircleIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </>
  ),
  LayoutIcon: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="9" y2="21" />
    </>
  ),
  CopyIcon: (
    <>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </>
  ),
  ExternalLinkIcon: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </>
  ),
  GridIcon: (
    <>
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </>
  ),
  ListIcon: (
    <>
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </>
  ),
  MaximizeIcon: (
    <>
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </>
  ),
  MinimizeIcon: (
    <>
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </>
  ),
  ShareIcon: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </>
  ),
  UploadIcon: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </>
  ),
  SendIcon: (
    <>
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </>
  ),
  MoonIcon: (
    <>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </>
  ),
  SunIcon: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </>
  ),
  ActivityIcon: (
    <>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </>
  ),
  AnchorIcon: (
    <>
      <circle cx="12" cy="5" r="3" />
      <line x1="12" x2="12" y1="22" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </>
  ),
  ArchiveIcon: (
    <>
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect width="22" height="5" x="1" y="3" rx="1" />
      <line x1="10" x2="14" y1="12" y2="12" />
    </>
  ),
  AtSignIcon: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </>
  ),
  BatteryIcon: (
    <>
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </>
  ),
  BluetoothIcon: (
    <>
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
    </>
  ),
  BookIcon: (
    <>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </>
  ),
  BookmarkIcon: (
    <>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </>
  ),
  BriefcaseIcon: (
    <>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  CameraIcon: (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  CastIcon: (
    <>
      <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <line x1="2" x2="2.01" y1="20" y2="20" />
    </>
  ),
  CloudIcon: (
    <>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </>
  ),
  CodeIcon: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  DatabaseIcon: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </>
  ),
  FilterIcon: (
    <>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </>
  ),
  GithubIcon: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.5 1-5-2.5-7-3" />
    </>
  ),
  TwitterIcon: (
    <>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </>
  ),
  FacebookIcon: (
    <>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </>
  ),
  LinkedinIcon: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  InstagramIcon: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </>
  ),
  YoutubeIcon: (
    <>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </>
  ),
  FigmaIcon: (
    <>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </>
  ),
  SlackIcon: (
    <>
      <rect width="3" height="8" x="13" y="2" rx="1.5" />
      <path d="M19 8.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 3 0z" />
      <rect width="3" height="8" x="8" y="14" rx="1.5" />
      <path d="M5 15.5v-1a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-3 0z" />
      <rect width="8" height="3" x="14" y="13" rx="1.5" />
      <path d="M15.5 19h-1a1.5 1.5 0 0 1 0-3h1a1.5 1.5 0 0 1 0 3z" />
      <rect width="8" height="3" x="2" y="8" rx="1.5" />
      <path d="M8.5 5h1a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1 0-3z" />
    </>
  ),
  ServerIcon: (
    <>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </>
  ),
  HardDriveIcon: (
    <>
      <line x1="22" x2="2" y1="12" y2="12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <line x1="6" x2="6.01" y1="16" y2="16" />
      <line x1="10" x2="10.01" y1="16" y2="16" />
    </>
  ),
  CpuIcon: (
    <>
      <rect width="16" height="16" x="4" y="4" rx="2" ry="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" ry="1" />
      <path d="M9 2v2" />
      <path d="M15 2v2" />
      <path d="M9 20v2" />
      <path d="M15 20v2" />
      <path d="M2 9h2" />
      <path d="M2 15h2" />
      <path d="M20 9h2" />
      <path d="M20 15h2" />
    </>
  ),
  MonitorIcon: (
    <>
      <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </>
  ),
  SmartphoneIcon: (
    <>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </>
  ),
  TabletIcon: (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </>
  ),
  WifiIcon: (
    <>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" x2="12.01" y1="20" y2="20" />
    </>
  ),
  CommandIcon: (
    <>
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </>
  ),
  TerminalIcon: (
    <>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </>
  ),
  GlobeIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </>
  ),
  DiscordIcon: (
    <>
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
      <path d="M7 16.5c-2.9.5-3.5-1.5-3.5-1.5-1 0-1.5-1.5-1.5-1.5.5-1 1.5-2.5 3-3 1.5-1 2.5-1.5 5.5-1.5h2c3 0 4 .5 5.5 1.5 1.5.5 2.5 2 3 3 0 0-.5 1.5-1.5 1.5 0 0-.6 2-3.5 1.5" />
      <path d="M15.5 17c0 1 1.5 3 1.5 3" />
      <path d="M8.5 17c0 1-1.5 3-1.5 3" />
    </>
  ),
  DribbbleIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </>
  ),
  TwitchIcon: (
    <>
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </>
  ),
  GitlabIcon: (
    <>
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </>
  ),
  ChromeIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </>
  ),
  AppleIcon: (
    <>
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5h-1c-1.5 0-2-1.5-2-4 .5-1 1-1.5 1-1.5Z" />
    </>
  ),
  PlayCircleIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </>
  ),
  PauseCircleIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </>
  ),
  RefreshCwIcon: (
    <>
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <polyline points="3 3 3 8 8 8" />
    </>
  ),
  PowerIcon: (
    <>
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <line x1="12" x2="12" y1="2" y2="12" />
    </>
  ),
  MapPinIcon: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  CameraOffIcon: (
    <>
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
      <path d="M9.5 4h5L17 7h2a2 2 0 0 1 2 2v7.5" />
      <path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" />
    </>
  ),
  VideoIcon: (
    <>
      <path d="M23 7l-7 5 7 5V7z" />
      <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
    </>
  ),
  MicIcon: (
    <>
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="23" />
      <line x1="8" x2="16" y1="23" y2="23" />
    </>
  ),
  MicOffIcon: (
    <>
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
      <path d="M5 10v2a7 7 0 0 0 12 5" />
      <path d="M15 9.34V4a3 3 0 0 0-5.94-.6" />
      <line x1="12" x2="12" y1="19" y2="23" />
      <line x1="8" x2="16" y1="23" y2="23" />
    </>
  ),
  MusicIcon: (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  HeadphonesIcon: (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4z" />
      <path d="M3 19a2 2 0 0 0 2 2h1v-6H3v4z" />
    </>
  ),
  ScissorsIcon: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" x2="8.12" y1="4" y2="15.88" />
      <line x1="14.47" x2="20" y1="14.48" y2="20" />
      <line x1="8.12" x2="12" y1="8.12" y2="12" />
    </>
  ),
  PaperclipIcon: (
    <>
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </>
  ),
  CalendarRangeIcon: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M17 14h-6" />
      <path d="M13 18H7" />
      <path d="M7 14h.01" />
      <path d="M17 18h.01" />
    </>
  ),
  ShieldIcon: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </>
  ),
  ShieldAlertIcon: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  ),
  ShieldCheckIcon: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  KeyIcon: (
    <>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </>
  ),
  ShoppingCartIcon: (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </>
  ),
  ShoppingBagIcon: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  TagIcon: (
    <>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </>
  ),
  CreditCardIcon: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
  CompassIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  CrosshairIcon: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="22" x2="18" y1="12" y2="12" />
      <line x1="6" x2="2" y1="12" y2="12" />
      <line x1="12" x2="12" y1="6" y2="2" />
      <line x1="12" x2="12" y1="22" y2="18" />
    </>
  ),
  FolderPlusIcon: (
    <>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      <line x1="12" x2="12" y1="11" y2="17" />
      <line x1="9" x2="15" y1="14" y2="14" />
    </>
  ),
  FolderMinusIcon: (
    <>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      <line x1="9" x2="15" y1="14" y2="14" />
    </>
  ),
  FilePlusIcon: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" x2="12" y1="18" y2="12" />
      <line x1="9" x2="15" y1="15" y2="15" />
    </>
  ),
  MessageCircleIcon: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </>
  ),
  MessageSquareIcon: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </>
  ),
  PhoneIcon: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </>
  ),
  ZapIcon: (
    <>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </>
  ),
  FlagIcon: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </>
  ),
  MinusIcon: (
    <>
      <line x1="5" x2="19" y1="12" y2="12" />
    </>
  )
};

export type IconName = keyof typeof iconRegistry;

/**
 * Universal Icon Component
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps & { name: IconName }>(
  ({ name, size = 20, strokeWidth = 1.75, className, children, ...props }, ref) => {
    const paths = iconRegistry[name as IconName];
    if (!paths) return null;
    
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths}
        {children}
      </svg>
    );
  }
);
Icon.displayName = "Icon";

/**
 * Individual Exports (for Tree Shaking & Backwards Compatibility)
 */
const createIcon = (name: IconName) => {
  const Component = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => (
    <Icon {...props} name={name} ref={ref} />
  ));
  Component.displayName = name;
  return Component;
};

export const CheckIcon = createIcon('CheckIcon');
export const ChevronDownIcon = createIcon('ChevronDownIcon');
export const ChevronUpIcon = createIcon('ChevronUpIcon');
export const ChevronRightIcon = createIcon('ChevronRightIcon');
export const ChevronLeftIcon = createIcon('ChevronLeftIcon');
export const FolderIcon = createIcon('FolderIcon');
export const FolderOpenIcon = createIcon('FolderOpenIcon');
export const FileIcon = createIcon('FileIcon');
export const FileTextIcon = createIcon('FileTextIcon');
export const EyeIcon = createIcon('EyeIcon');
export const EyeOffIcon = createIcon('EyeOffIcon');
export const ImageIcon = createIcon('ImageIcon');
export const DownloadIcon = createIcon('DownloadIcon');
export const ArrowRightIcon = createIcon('ArrowRightIcon');
export const ArrowLeftIcon = createIcon('ArrowLeftIcon');
export const SearchIcon = createIcon('SearchIcon');
export const BellIcon = createIcon('BellIcon');
export const SettingsIcon = createIcon('SettingsIcon');
export const UserIcon = createIcon('UserIcon');
export const LogOutIcon = createIcon('LogOutIcon');
export const MenuIcon = createIcon('MenuIcon');
export const XIcon = createIcon('XIcon');
export const HomeIcon = createIcon('HomeIcon');
export const CalendarIcon = createIcon('CalendarIcon');
export const ClockIcon = createIcon('ClockIcon');
export const LinkIcon = createIcon('LinkIcon');
export const TrashIcon = createIcon('TrashIcon');
export const EditIcon = createIcon('EditIcon');
export const PlusIcon = createIcon('PlusIcon');
export const MinusIcon = createIcon('MinusIcon');
export const MailIcon = createIcon('MailIcon');
export const LockIcon = createIcon('LockIcon');
export const UnlockIcon = createIcon('UnlockIcon');
export const StarIcon = createIcon('StarIcon');
export const HeartIcon = createIcon('HeartIcon');
export const InfoIcon = createIcon('InfoIcon');
export const AlertTriangleIcon = createIcon('AlertTriangleIcon');
export const CheckCircleIcon = createIcon('CheckCircleIcon');
export const XCircleIcon = createIcon('XCircleIcon');
export const AlertCircleIcon = createIcon('AlertCircleIcon');
export const LayoutIcon = createIcon('LayoutIcon');
export const CopyIcon = createIcon('CopyIcon');
export const ExternalLinkIcon = createIcon('ExternalLinkIcon');
export const GridIcon = createIcon('GridIcon');
export const ListIcon = createIcon('ListIcon');
export const MaximizeIcon = createIcon('MaximizeIcon');
export const MinimizeIcon = createIcon('MinimizeIcon');
export const ShareIcon = createIcon('ShareIcon');
export const UploadIcon = createIcon('UploadIcon');
export const SendIcon = createIcon('SendIcon');
export const MoonIcon = createIcon('MoonIcon');
export const SunIcon = createIcon('SunIcon');
export const ActivityIcon = createIcon('ActivityIcon');
export const AnchorIcon = createIcon('AnchorIcon');
export const ArchiveIcon = createIcon('ArchiveIcon');
export const AtSignIcon = createIcon('AtSignIcon');
export const BatteryIcon = createIcon('BatteryIcon');
export const BluetoothIcon = createIcon('BluetoothIcon');
export const BookIcon = createIcon('BookIcon');
export const BookmarkIcon = createIcon('BookmarkIcon');
export const BriefcaseIcon = createIcon('BriefcaseIcon');
export const CameraIcon = createIcon('CameraIcon');
export const CastIcon = createIcon('CastIcon');
export const CloudIcon = createIcon('CloudIcon');
export const CodeIcon = createIcon('CodeIcon');
export const DatabaseIcon = createIcon('DatabaseIcon');
export const FilterIcon = createIcon('FilterIcon');
export const GithubIcon = createIcon('GithubIcon');
export const TwitterIcon = createIcon('TwitterIcon');
export const FacebookIcon = createIcon('FacebookIcon');
export const LinkedinIcon = createIcon('LinkedinIcon');
export const InstagramIcon = createIcon('InstagramIcon');
export const YoutubeIcon = createIcon('YoutubeIcon');
export const FigmaIcon = createIcon('FigmaIcon');
export const SlackIcon = createIcon('SlackIcon');
export const ServerIcon = createIcon('ServerIcon');
export const HardDriveIcon = createIcon('HardDriveIcon');
export const CpuIcon = createIcon('CpuIcon');
export const MonitorIcon = createIcon('MonitorIcon');
export const SmartphoneIcon = createIcon('SmartphoneIcon');
export const TabletIcon = createIcon('TabletIcon');
export const WifiIcon = createIcon('WifiIcon');
export const CommandIcon = createIcon('CommandIcon');
export const TerminalIcon = createIcon('TerminalIcon');
export const GlobeIcon = createIcon('GlobeIcon');
export const DiscordIcon = createIcon('DiscordIcon');
export const DribbbleIcon = createIcon('DribbbleIcon');
export const TwitchIcon = createIcon('TwitchIcon');
export const GitlabIcon = createIcon('GitlabIcon');
export const ChromeIcon = createIcon('ChromeIcon');
export const AppleIcon = createIcon('AppleIcon');
export const PlayCircleIcon = createIcon('PlayCircleIcon');
export const PauseCircleIcon = createIcon('PauseCircleIcon');
export const RefreshCwIcon = createIcon('RefreshCwIcon');
export const PowerIcon = createIcon('PowerIcon');
export const MapPinIcon = createIcon('MapPinIcon');
export const CameraOffIcon = createIcon('CameraOffIcon');
export const VideoIcon = createIcon('VideoIcon');
export const MicIcon = createIcon('MicIcon');
export const MicOffIcon = createIcon('MicOffIcon');
export const MusicIcon = createIcon('MusicIcon');
export const HeadphonesIcon = createIcon('HeadphonesIcon');
export const ScissorsIcon = createIcon('ScissorsIcon');
export const PaperclipIcon = createIcon('PaperclipIcon');
export const CalendarRangeIcon = createIcon('CalendarRangeIcon');
export const ShieldIcon = createIcon('ShieldIcon');
export const ShieldAlertIcon = createIcon('ShieldAlertIcon');
export const ShieldCheckIcon = createIcon('ShieldCheckIcon');
export const KeyIcon = createIcon('KeyIcon');
export const ShoppingCartIcon = createIcon('ShoppingCartIcon');
export const ShoppingBagIcon = createIcon('ShoppingBagIcon');
export const TagIcon = createIcon('TagIcon');
export const CreditCardIcon = createIcon('CreditCardIcon');
export const CompassIcon = createIcon('CompassIcon');
export const CrosshairIcon = createIcon('CrosshairIcon');
export const FolderPlusIcon = createIcon('FolderPlusIcon');
export const FolderMinusIcon = createIcon('FolderMinusIcon');
export const FilePlusIcon = createIcon('FilePlusIcon');
export const MessageCircleIcon = createIcon('MessageCircleIcon');
export const MessageSquareIcon = createIcon('MessageSquareIcon');
export const PhoneIcon = createIcon('PhoneIcon');
export const ZapIcon = createIcon('ZapIcon');
export const FlagIcon = createIcon('FlagIcon');
