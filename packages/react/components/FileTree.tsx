'use client';
import React, { useState } from 'react';
export type { FileTreeNode, FileTreeProps } from '@aruviliui/core/types/file-tree';
import { FolderIcon, FolderOpenIcon, FileIcon, ChevronRightIcon } from '@aruviliui/icons';
import { FileTreeNode, FileTreeProps } from '@aruviliui/core/types/file-tree';

const FileTreeItem: React.FC<{
  node: FileTreeNode;
  onNodeClick?: (node: FileTreeNode) => void;
  level: number;
}> = ({ node, onNodeClick, level }) => {
  const [isOpen, setIsOpen] = useState(node.isOpen || false);
  const isFolder = node.type === 'folder';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFolder) {
      setIsOpen(!isOpen);
    }
    onNodeClick?.(node);
  };

  return (
    <div className="select-none">
      <div
        className="flex items-center py-1.5 px-2 rounded-md hover:bg-zinc-800/50 cursor-pointer transition-colors group"
        style={{ paddingLeft: `${level * 1.25 + 0.5}rem` }}
        onClick={handleClick}
      >
        <div className="w-4 h-4 flex items-center justify-center mr-1.5 text-zinc-500 group-hover:text-zinc-300 transition-colors">
          {isFolder ? (
            <ChevronRightIcon
              className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
            />
          ) : (
            <div className="w-3.5" />
          )}
        </div>
        <div className="w-4 h-4 flex items-center justify-center mr-2">
          {isFolder ? (
            isOpen ? (
              <FolderOpenIcon className="w-4 h-4 text-sky-400/80" />
            ) : (
              <FolderIcon className="w-4 h-4 text-sky-400/80" />
            )
          ) : (
            <FileIcon className="w-4 h-4 text-zinc-400" />
          )}
        </div>
        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate">
          {node.name}
        </span>
      </div>
      {isFolder && isOpen && node.children && (
        <div className="mt-0.5">
          {node.children.map((child) => (
            <FileTreeItem
              key={child.id}
              node={child}
              onNodeClick={onNodeClick}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({ data, onNodeClick, className }) => {
  return (
    <div className={`w-full overflow-hidden ${className || ''}`}>
      {data.map((node) => (
        <FileTreeItem key={node.id} node={node} onNodeClick={onNodeClick} level={0} />
      ))}
    </div>
  );
};


