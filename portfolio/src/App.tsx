import { useState } from 'react'
import './App.css'

import Sidebar from './component/Sidebar'
import Explorer from './component/explorer'
import Content from './component/Content'

function App() {
  const [activeTab, setActiveTab] = useState("Projects")

  return (
    <div className="flex bg-gray-900 h-screen text-white overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Explorer activeTab={activeTab} />
      <Content activeTab={activeTab}/>
    </div>
  )
}

export default App
