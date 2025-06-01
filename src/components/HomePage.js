import React, { useState } from 'react';

// Mock project data
const mockProjects = {
  courses: [
    {
      id: 1,
      title: 'CSE 530 Computer Systems Design',
      description: 'Looking for teammates to complete the final project, mainly involving distributed systems design.',
      owner: 'John Smith',
      avatar: '👨‍💻',
      skills: ['Distributed Systems', 'Go', 'Docker'],
      deadline: '2024-12-15',
      members: '2/4',
      university: 'University of Washington'
    },
    {
      id: 2,
      title: 'CS 161 Algorithm Design',
      description: 'Seeking teammates with strong algorithm fundamentals to tackle complex algorithmic problems.',
      owner: 'Lisa Chen',
      avatar: '👩‍💻',
      skills: ['Algorithms', 'Python', 'Data Structures'],
      deadline: '2024-11-30',
      members: '1/3',
      university: 'Stanford University'
    }
  ],
  hackathons: [
    {
      id: 3,
      title: 'AI Innovation Hackathon',
      description: '48-hour AI product development challenge, seeking frontend and AI experts.',
      owner: 'Mike Wang',
      avatar: '🚀',
      skills: ['React', 'Python', 'Machine Learning'],
      deadline: '2024-11-25',
      members: '2/5',
      university: 'UC Berkeley'
    },
    {
      id: 4,
      title: 'Sustainability Hackathon',
      description: 'Develop applications to solve environmental problems, need full-stack developers.',
      owner: 'Sarah Green',
      avatar: '🌱',
      skills: ['Full-stack', 'Node.js', 'React'],
      deadline: '2024-12-01',
      members: '3/6',
      university: 'MIT'
    }
  ],
  startups: [
    {
      id: 5,
      title: 'EdTech Startup',
      description: 'Building an online learning platform, seeking technical co-founder.',
      owner: 'David Liu',
      avatar: '📚',
      skills: ['Tech Leadership', 'Product Design', 'Vue.js'],
      deadline: 'Long-term',
      members: '2/4',
      university: 'Tsinghua University'
    }
  ],
  competitions: [
    {
      id: 6,
      title: 'ACM Programming Contest',
      description: 'Looking for algorithm experts to form a team for regionals, aiming for world finals.',
      owner: 'Algorithm Master',
      avatar: '🏆',
      skills: ['Algorithms', 'C++', 'Data Structures'],
      deadline: '2024-12-10',
      members: '2/3',
      university: 'Peking University'
    },
    {
      id: 7,
      title: 'Mathematical Modeling Contest',
      description: 'MCM/ICM competition, need teammates with strong math and programming skills.',
      owner: 'Math Expert',
      avatar: '📊',
      skills: ['Mathematical Modeling', 'MATLAB', 'Python'],
      deadline: '2024-11-28',
      members: '1/3',
      university: 'MIT'
    }
  ],
  research: [
    {
      id: 8,
      title: 'AI Ethics Research Project',
      description: 'Exploring ethical issues of AI in society, seeking research partners interested in AI and philosophy.',
      owner: 'Dr. Johnson',
      avatar: '🔬',
      skills: ['Artificial Intelligence', 'Philosophy', 'Academic Writing'],
      deadline: '2025-06-30',
      members: '3/5',
      university: 'Stanford University'
    },
    {
      id: 9,
      title: 'Sustainable Energy Technology Research',
      description: 'Solar cell efficiency optimization research, need students with materials science and engineering background.',
      owner: 'Green Tech Lab',
      avatar: '⚡',
      skills: ['Materials Science', 'Engineering', 'Data Analysis'],
      deadline: '2025-03-15',
      members: '2/4',
      university: 'Caltech'
    }
  ],
  internships: [
    {
      id: 10,
      title: 'Tech Company Internship Team',
      description: 'Apply to FAANG company internships together, practice interviews and share project experiences.',
      owner: 'Career Hunter',
      avatar: '💼',
      skills: ['Algorithms', 'System Design', 'Interview Skills'],
      deadline: '2024-12-20',
      members: '4/6',
      university: 'Carnegie Mellon University'
    }
  ],
  study: [
    {
      id: 11,
      title: 'LeetCode Study Group',
      description: 'Daily coding practice, solve algorithm problems together, mutual supervision for tech interviews.',
      owner: 'Code Master',
      avatar: '💻',
      skills: ['Algorithms', 'Python', 'Java'],
      deadline: 'Ongoing',
      members: '8/10',
      university: 'University of Washington'
    },
    {
      id: 12,
      title: 'Machine Learning Reading Club',
      description: 'Study classic ML textbooks together, weekly discussions on each chapter.',
      owner: 'ML Enthusiast',
      avatar: '📖',
      skills: ['Machine Learning', 'Mathematics', 'Python'],
      deadline: '2025-02-28',
      members: '5/8',
      university: 'UC Berkeley'
    }
  ]
};

const ProjectCard = ({ project, onSelect }) => (
  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{project.avatar}</div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">{project.title}</h3>
          <p className="text-xs text-gray-500">{project.owner} • {project.university}</p>
        </div>
      </div>
      <div className="text-xs text-gray-500">{project.members}</div>
    </div>
    
    <p className="text-sm text-gray-700 mb-3 line-clamp-2">{project.description}</p>
    
    <div className="flex flex-wrap gap-1 mb-3">
      {project.skills.map((skill, index) => (
        <span
          key={index}
          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
    
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500">Deadline: {project.deadline}</span>
      <button
        onClick={() => onSelect(project)}
        className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
      >
        Apply to Join
      </button>
    </div>
  </div>
);

function HomePage({ onNavigate, onProjectSelect }) {
  const [activeTab, setActiveTab] = useState('courses');

  const handleProjectSelect = (project) => {
    onProjectSelect(project);
    onNavigate('detail');
  };

  // All tab configurations
  const tabs = [
    { key: 'courses', label: 'Course Projects', icon: '📚' },
    { key: 'hackathons', label: 'Hackathons', icon: '🚀' },
    { key: 'startups', label: 'Startups', icon: '💡' },
    { key: 'competitions', label: 'Competitions', icon: '🏆' },
    { key: 'research', label: 'Research', icon: '🔬' },
    { key: 'internships', label: 'Internships', icon: '💼' },
    { key: 'study', label: 'Study Groups', icon: '📖' }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">Find My Teammate</h1>
          <button className="p-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Tab Navigation - Horizontally Scrollable */}
      <div className="bg-white border-b border-gray-200 px-2">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center space-x-1 py-3 px-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Project List */}
      <div className="px-4 py-4">
        {mockProjects[activeTab]?.length > 0 ? (
          mockProjects[activeTab].map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleProjectSelect}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📋</div>
            <p className="text-gray-500">No {tabs.find(t => t.key === activeTab)?.label.toLowerCase()} available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage; 