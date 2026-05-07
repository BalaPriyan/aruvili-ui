import React from 'react';
export type FileTreeNodeType = 'file' | 'folder';

export interface FileTreeNode {
  /** Unique identifier for the node */
  id: string;
  /** Display name of the file or folder */
  name: string;
  /** Type of the node */
  type: FileTreeNodeType;
  /** Children nodes, applicable only if type is 'folder' */
  children?: FileTreeNode[];
  /** Whether the folder is initially open */
  isOpen?: boolean;
}

export interface FileTreeProps {
  /** Hierarchical data structure of files and folders */
  data: FileTreeNode[];
  /** Callback fired when a file or folder is clicked */
  onNodeClick?: (node: FileTreeNode) => void;
  /** Additional CSS classes for styling */
  className?: string;
}

