import React from 'react';

import {
    FileCode,
    FileText,
    Folder,
    FolderOpen,
    Image,
    FileJson,
    File,
    FileType
} from 'lucide-react';


interface FileIconProps{
    type: 'file' | 'folder';
    name: string;
    isOpen?: boolean;
    // children?: FileItem[];
}

const FileIcon: React.FC<FileIconProps> = ({type, name, isOpen}) => {
    if(type === 'folder'){
        return isOpen ? (
            <FolderOpen size={16} className="text-yellow-400" />
            ) : (
            <Folder size={16} className="text-yellow-400" />
        );
    }
    const extension = name.split('.').pop()?.toLowerCase();
    switch(extension){
        case 'tsx':
        case 'jsx':
            return <FileCode size={16} className="text-blue-400" />
        case 'ts':
        case 'js':
            return <FileCode size={16} className="text-yellow-400" />
        case 'css':
            return <File size={16} className="text-blue-400" />
        case 'cpp':
            return <FileCode size={16} className="text-purple-400" />
        case 'json':
            return <FileJson size={16} className="text-yellow-400" />
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'svg':
            return <Image size={16} className="text-green-400" />
        case 'py':
            return <FileCode size={16} className="text-gray-800" />
        case 'pdf':
            return <FileText size={16} className="text-blue-800" />
        case 'sql':
            return <FileCode size={16} className="text-amber-600" />
        
        default:
            return <FileType size={16} className="text-gray-400" />
    }
}

export default FileIcon;