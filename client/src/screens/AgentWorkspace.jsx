/* eslint-disable no-unused-vars */
import React from 'react';

const AgentWorkspace = () => {
  return (
    <div className="h-screen w-full bg-slate-950 text-slate-300 flex overflow-hidden font-sans">
      
      {/* 1. Slim Sidebar (Navigation) */}
      <div className="w-16 flex flex-col border-r border-slate-800 bg-slate-900/50 py-4 items-center gap-6 z-10">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 cursor-pointer">
          <span className="text-white font-bold">D</span>
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          <button className="p-2 text-slate-500 hover:text-blue-400 transition-colors">
            {/* SVG Icon Placeholder: Chat */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </button>
          <button className="p-2 text-slate-500 hover:text-blue-400 transition-colors">
            {/* SVG Icon Placeholder: Folder */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
          </button>
        </nav>
      </div>

      {/* 2. Agent Chat & Planning Column */}
      <div className="w-96 flex flex-col border-r border-slate-800 bg-slate-900 shadow-2xl z-0">
        <div className="p-4 border-b border-slate-800">
          <h2 className="text-sm font-semibold text-slate-100 tracking-wide uppercase">Agent Chat</h2>
        </div>
        
        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">U</div>
             <div className="bg-slate-800/50 p-3 rounded-r-lg rounded-bl-lg text-sm text-slate-200">
               Build a simple express server with a health check endpoint.
             </div>
          </div>
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 text-blue-400">D</div>
             <div className="bg-blue-900/10 border border-blue-500/10 p-3 rounded-r-lg rounded-bl-lg text-sm text-slate-300">
               I'll set up the Express server now. Creating <code className="bg-slate-950 px-1 py-0.5 rounded text-blue-300">index.js</code> and installing dependencies.
             </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
          <div className="relative flex items-center">
            <textarea 
              rows="2"
              placeholder="Give Devin a task..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
            <button className="absolute right-3 top-3 p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Code & Environment Area */}
      <div className="flex-1 flex flex-col bg-[#0d1117]">
        {/* Environment Tabs */}
        <div className="flex px-2 pt-2 border-b border-slate-800 bg-slate-900">
          <button className="px-4 py-2 text-sm text-blue-400 border-b-2 border-blue-500 bg-slate-800/50 rounded-t-lg">
            index.js
          </button>
          <button className="px-4 py-2 text-sm text-slate-500 hover:text-slate-300 transition-colors">
            Terminal
          </button>
          <button className="px-4 py-2 text-sm text-slate-500 hover:text-slate-300 transition-colors">
            Browser
          </button>
        </div>

        {/* Mock Code Editor */}
        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto">
          <pre className="text-slate-400">
            <code className="text-pink-400">const</code> express <span className="text-white">=</span> <code className="text-blue-300">require</code>(<code className="text-green-300">'express'</code>);{'\n'}
            <code className="text-pink-400">const</code> app <span className="text-white">=</span> <code className="text-blue-300">express</code>();{'\n'}
            <code className="text-pink-400">const</code> port <span className="text-white">=</span> <code className="text-orange-300">3000</code>;{'\n\n'}
            app.<code className="text-blue-300">get</code>(<code className="text-green-300">'/health'</code>, (req, res) <span className="text-pink-400">{'=>'}</span> {'{'}{'\n'}
            {'  '}res.<code className="text-blue-300">json</code>({'{'} status: <code className="text-green-300">'ok'</code> {'}'});{'\n'}
            {'}'});{'\n\n'}
            app.<code className="text-blue-300">listen</code>(port, () <span className="text-pink-400">{'=>'}</span> {'{'}{'\n'}
            {'  '}console.<code className="text-blue-300">log</code>(<code className="text-green-300">`Server running on port ${'{'}port{'}'}`</code>);{'\n'}
            {'}'});
          </pre>
        </div>
      </div>

    </div>
  );
};

export default AgentWorkspace;