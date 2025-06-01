import React, { useState } from 'react';
import HomePage from './components/HomePage';
import PostProjectPage from './components/PostProjectPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import MyTeamsPage from './components/MyTeamsPage';
import ProfilePage from './components/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onProjectSelect={setSelectedProject} />;
      case 'post':
        return <PostProjectPage onNavigate={setCurrentPage} />;
      case 'detail':
        return <ProjectDetailPage project={selectedProject} onNavigate={setCurrentPage} />;
      case 'teams':
        return <MyTeamsPage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onProjectSelect={setSelectedProject} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              currentPage === 'home' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          
          <button
            onClick={() => setCurrentPage('post')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              currentPage === 'post' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">Post</span>
          </button>
          
          <button
            onClick={() => setCurrentPage('teams')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              currentPage === 'teams' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            <span className="text-xs mt-1">My Teams</span>
          </button>
          
          <button
            onClick={() => setCurrentPage('profile')}
            className={`flex flex-col items-center py-1 px-2 rounded-lg ${
              currentPage === 'profile' ? 'text-primary-600' : 'text-gray-500'
            }`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App; 