import React, { useState } from 'react';

// Mock team data
const mockTeams = [
  {
    id: 1,
    title: 'CSE 530 Computer Systems Design',
    type: 'courses',
    status: 'active', // active, pending, completed
    role: 'Team Member',
    progress: 65,
    deadline: '2024-12-15',
    members: [
      { name: 'John Smith', avatar: '👨‍💻', role: 'Project Lead' },
      { name: 'Me', avatar: '👤', role: 'Developer' },
      { name: 'Alex Johnson', avatar: '👨‍💼', role: 'Designer' }
    ],
    nextMeeting: '2024-11-20 14:00',
    recentActivity: 'John Smith updated project progress'
  },
  {
    id: 2,
    title: 'AI Innovation Hackathon',
    type: 'hackathons',
    status: 'pending',
    role: 'Applicant',
    progress: 0,
    deadline: '2024-11-25',
    members: [
      { name: 'Mike Wang', avatar: '🚀', role: 'Project Lead' },
      { name: 'Sarah Chen', avatar: '👩‍💻', role: 'Developer' }
    ],
    applicationStatus: 'Under Review',
    appliedAt: '2024-11-15'
  },
  {
    id: 3,
    title: 'Online Learning Platform',
    type: 'startups',
    status: 'completed',
    role: 'Tech Lead',
    progress: 100,
    deadline: 'Completed',
    members: [
      { name: 'Me', avatar: '👤', role: 'Tech Lead' },
      { name: 'David Liu', avatar: '📚', role: 'Product Manager' },
      { name: 'Emily', avatar: '🎨', role: 'UI Designer' },
      { name: 'Tom', avatar: '💼', role: 'Operations' }
    ],
    completedAt: '2024-10-30',
    achievement: 'Successfully launched MVP'
  }
];

const TeamCard = ({ team, onViewDetails }) => {
  const getStatusBadge = () => {
    switch (team.status) {
      case 'active':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>;
      case 'pending':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>;
      case 'completed':
        return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Completed</span>;
      default:
        return null;
    }
  };

  const getTypeIcon = () => {
    switch (team.type) {
      case 'courses': return '📚';
      case 'hackathons': return '🚀';
      case 'startups': return '💡';
      default: return '📋';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{getTypeIcon()}</div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{team.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs text-gray-500">{team.role}</span>
              {getStatusBadge()}
            </div>
          </div>
        </div>
        <button 
          onClick={() => onViewDetails(team)}
          className="text-gray-400 hover:text-gray-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Team Member Avatars */}
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-xs text-gray-500">Team Members:</span>
        <div className="flex -space-x-1">
          {team.members.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs"
              title={member.name}
            >
              {member.avatar}
            </div>
          ))}
          {team.members.length > 4 && (
            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
              +{team.members.length - 4}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar (only for active projects) */}
      {team.status === 'active' && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">Project Progress</span>
            <span className="text-xs text-gray-600">{team.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${team.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Bottom Information */}
      <div className="text-xs text-gray-500">
        {team.status === 'active' && (
          <div className="flex justify-between">
            <span>Deadline: {team.deadline}</span>
            {team.nextMeeting && <span>Next Meeting: {team.nextMeeting}</span>}
          </div>
        )}
        {team.status === 'pending' && (
          <div className="flex justify-between">
            <span>Applied: {team.appliedAt}</span>
            <span className="text-yellow-600">{team.applicationStatus}</span>
          </div>
        )}
        {team.status === 'completed' && (
          <div className="flex justify-between">
            <span>Completed: {team.completedAt}</span>
            <span className="text-green-600">{team.achievement}</span>
          </div>
        )}
      </div>

      {/* Recent Activity (active projects only) */}
      {team.status === 'active' && team.recentActivity && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-600">
            <span className="text-gray-500">Recent Activity:</span> {team.recentActivity}
          </p>
        </div>
      )}
    </div>
  );
};

function MyTeamsPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTeams = mockTeams.filter(team => {
    if (activeTab === 'all') return true;
    return team.status === activeTab;
  });

  const handleViewDetails = (team) => {
    // Navigate to team details page
    console.log('View team details:', team);
  };

  const getTabCount = (status) => {
    if (status === 'all') return mockTeams.length;
    return mockTeams.filter(team => team.status === status).length;
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">My Teams</h1>
          <button className="p-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Statistics Cards */}
      <div className="p-4 grid grid-cols-3 gap-3">
        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <div className="text-lg font-bold text-green-600">{getTabCount('active')}</div>
          <div className="text-xs text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <div className="text-lg font-bold text-yellow-600">{getTabCount('pending')}</div>
          <div className="text-xs text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center border border-gray-200">
          <div className="text-lg font-bold text-gray-600">{getTabCount('completed')}</div>
          <div className="text-xs text-gray-600">Completed</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 px-4">
        <div className="flex space-x-1">
          {[
            { key: 'all', label: 'All' },
            { key: 'active', label: 'Active' },
            { key: 'pending', label: 'Pending' },
            { key: 'completed', label: 'Completed' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              <span className="ml-1 text-xs">({getTabCount(tab.key)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Team List */}
      <div className="px-4 py-4">
        {filteredTeams.length > 0 ? (
          filteredTeams.map(team => (
            <TeamCard
              key={team.id}
              team={team}
              onViewDetails={handleViewDetails}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">
              {activeTab === 'pending' ? '⏳' : 
               activeTab === 'completed' ? '🎉' : '👥'}
            </div>
            <p className="text-gray-500">
              {activeTab === 'all' && 'No teams joined yet'}
              {activeTab === 'active' && 'No active projects'}
              {activeTab === 'pending' && 'No pending applications'}
              {activeTab === 'completed' && 'No completed projects'}
            </p>
            <button 
              onClick={() => onNavigate('home')}
              className="mt-4 text-primary-600 font-medium"
            >
              Find Teams
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyTeamsPage; 