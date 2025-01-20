import React, { useEffect, useState } from 'react'
import { getFileStructure } from '../data/files'
import { FileItem } from '../types';
import FileTreeItem from './explorer/FileTreeItem';

interface ExplorerProps{
  activeTab: string;
}

const Explorer: React.FC<ExplorerProps>= ({activeTab}) => {
  const [files, setFiles] = useState<FileItem[]>(getFileStructure(activeTab));
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  useEffect(()=>{
    setFiles(getFileStructure(activeTab))
    setSelectedFile(null)
  },[activeTab])

  // toggle function
  const toggleFolder = (targetItem: FileItem) => {
    const updateFiles = (items: FileItem[]): FileItem[] => {
      return items.map((item) => {
        if (item === targetItem){
          return {...item, isOpen: !item.isOpen}
        }
        if(item.children){
          return {
            ...item,
            children: updateFiles(item.children)
          }
        }
        return item
      })
    }
    setFiles(updateFiles(files))
  }

  const handleFileSelect = (file: FileItem) => {
    setSelectedFile(file)
  }

  return (
    <div className='bg-gray-800 h-screen overflow-y-auto'>
      <div className="p-2">
        <div className="text-sm uppercase tracking-wider text-gray">Explorer</div>
        <div className='space-y-1'>
          {
            files.map((file) => (
              <FileTreeItem
                key = {file.name}
                item = {file}
                level = {0}
                onToggle = {toggleFolder}
                onSelect = {handleFileSelect}
                selectedFile ={selectedFile}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Explorer
