import React from 'react'
import { FileItem } from '../../types'
import {motion} from "motion/react"
import { ChevronDown, ChevronRight } from 'lucide-react'
import FileIcon from './FileIcon'

interface FileTreeItemProps{
    item: FileItem
    level: number
    onSelect: (item: FileItem) => void;
    onToggle: (item: FileItem) => void;
    selectedFile: FileItem | null;
}

const FileTreeItem:React.FC<FileTreeItemProps> = ({item, level, onSelect, onToggle, selectedFile}) => {
  const isSelected = selectedFile?.name === item.name;
  return (
    <div>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        style={{ paddingLeft: `${level * 1.5} rem` }}
        onClick={() => 
            item.type === "folder" ? onToggle(item) : onSelect(item)
        }
        className={`flex items-center py-1 px-2 cursor-pointer hover:bg-gray-700 ${isSelected ? 'bg-gray-700': ""}`}
      >
        {
            item.type === 'folder' && (
                <span className='mr-1'>
                    {
                        item.isOpen ? (<ChevronDown size={16} className='text-gray-400' />)
                                    : (<ChevronRight size={16} className='text-gray-400' />)
                    }
                </span>
            )
        }

        <FileIcon type ={item.type} name={item.name} isOpen={item.isOpen} />
        <span className='ml-2 text-sm text-gray-300'>{item.name}</span>
      </motion.div>
      {
        item.type === "folder" && item.isOpen && item.children && (
            <div>
                {
                    item.children.map((child) => (
                        <FileTreeItem 
                        key={child.name}
                        item={child}
                        level={level + 1}
                        onToggle={onToggle}
                        onSelect={onSelect}
                        selectedFile={selectedFile}
                        />
                    ))
                }
            </div>
        )
      }
    </div>
  )
}

export default FileTreeItem
