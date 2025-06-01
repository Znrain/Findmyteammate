import React, { useState } from 'react';

// Mock user data
const mockUserProfile = {
  name: 'Alex Johnson',
  avatar: '👤',
  university: 'University of Washington',
  major: 'Computer Science',
  year: 'Graduate Student - Year 1',
  bio: 'Passionate about technology, love challenges, and have extensive full-stack development experience. Good at teamwork, focus on code quality and user experience.',
  email: 'alex@uw.edu',
  github: 'alex-johnson',
  linkedin: 'alex-johnson',
  skills: [
    { name: 'React', level: 'expert', category: 'frontend', likes: 24, isLiked: false },
    { name: 'Node.js', level: 'advanced', category: 'backend', likes: 18, isLiked: true },
    { name: 'Python', level: 'expert', category: 'backend', likes: 32, isLiked: false },
    { name: 'TypeScript', level: 'advanced', category: 'frontend', likes: 15, isLiked: false },
    { name: 'Docker', level: 'intermediate', category: 'devops', likes: 12, isLiked: true },
    { name: 'AWS', level: 'intermediate', category: 'devops', likes: 9, isLiked: false },
    { name: 'UI/UX Design', level: 'beginner', category: 'design', likes: 5, isLiked: false },
    { name: 'Machine Learning', level: 'intermediate', category: 'ai', likes: 21, isLiked: false }
  ],
  collaborationTags: [
    { tag: 'Reliable', count: 12 },
    { tag: 'Great Communication', count: 8 },
    { tag: 'Strong Technical Skills', count: 15 },
    { tag: 'On-time Delivery', count: 10 },
    { tag: 'Innovative Thinking', count: 6 },
    { tag: 'Team Leadership', count: 4 }
  ],
  projectHistory: [
    {
      id: 1,
      title: 'Online Learning Platform',
      type: 'startups',
      role: 'Full-stack Developer',
      status: 'completed',
      duration: '6 months',
      technologies: ['React', 'Node.js', 'MongoDB'],
      achievement: 'Successfully launched with 500+ users'
    },
    {
      id: 2,
      title: 'CSE 530 Distributed Systems Project',
      type: 'courses',
      role: 'Backend Developer',
      status: 'active',
      duration: '3 months',
      technologies: ['Go', 'Docker', 'Kubernetes'],
      achievement: 'In progress'
    },
    {
      id: 3,
      title: 'AI Medical Diagnosis System',
      type: 'hackathons',
      role: 'AI Engineer',
      status: 'completed',
      duration: '48 hours',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      achievement: 'Won Best Technical Award'
    }
  ],
  stats: {
    completedProjects: 8,
    activeProjects: 2,
    totalCollaborators: 24,
    avgRating: 4.8
  }
};

const SkillBadge = ({ skill, isOwnProfile, onLike }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'expert': return 'bg-green-100 text-green-800';
      case 'advanced': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'beginner': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case 'expert': return 'Expert';
      case 'advanced': return 'Advanced';
      case 'intermediate': return 'Intermediate';
      case 'beginner': return 'Beginner';
      default: return level;
    }
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-900">{skill.name}</span>
          <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(skill.level)}`}>
            {getLevelText(skill.level)}
          </span>
        </div>
        
        {/* Like Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm text-gray-600">{skill.likes} endorsements</span>
          </div>
          
          {/* Show like button only when viewing others' profiles */}
          {!isOwnProfile && (
            <button
              onClick={() => onLike(skill.name)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                skill.isLiked 
                  ? 'bg-red-100 text-red-700 border border-red-200' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              <svg className={`w-4 h-4 ${skill.isLiked ? 'text-red-600' : 'text-gray-500'}`} fill={skill.isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{skill.isLiked ? 'Endorsed' : 'Endorse'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const getTypeIcon = () => {
    switch (project.type) {
      case 'courses': return '📚';
      case 'hackathons': return '🚀';
      case 'startups': return '💡';
      default: return '📋';
    }
  };

  const getStatusBadge = () => {
    return project.status === 'completed' 
      ? <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
      : <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Active</span>;
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-xl">{getTypeIcon()}</div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">{project.title}</h4>
            <p className="text-xs text-gray-500">{project.role} • {project.duration}</p>
          </div>
        </div>
        {getStatusBadge()}
      </div>
      
      <div className="flex flex-wrap gap-1 mb-2">
        {project.technologies.map(tech => (
          <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <p className="text-xs text-gray-600">{project.achievement}</p>
    </div>
  );
};

function ProfilePage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(true); // Simulate whether it's own profile
  const [userSkills, setUserSkills] = useState(mockUserProfile.skills);

  // Toggle view mode demo feature (own/others)
  const toggleProfileMode = () => {
    setIsOwnProfile(!isOwnProfile);
  };

  // Handle skill likes
  const handleSkillLike = (skillName) => {
    setUserSkills(prevSkills => 
      prevSkills.map(skill => {
        if (skill.name === skillName) {
          return {
            ...skill,
            isLiked: !skill.isLiked,
            likes: skill.isLiked ? skill.likes - 1 : skill.likes + 1
          };
        }
        return skill;
      })
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Statistics Overview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-primary-600">{mockUserProfile.stats.completedProjects}</div>
                <div className="text-xs text-gray-600">Completed Projects</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-green-600">{mockUserProfile.stats.totalCollaborators}</div>
                <div className="text-xs text-gray-600">Collaborators</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">{mockUserProfile.stats.activeProjects}</div>
                <div className="text-xs text-gray-600">Active Projects</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-yellow-600">{mockUserProfile.stats.avgRating}</div>
                <div className="text-xs text-gray-600">Average Rating</div>
              </div>
            </div>

            {/* Collaboration Tags */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Team Reviews</h3>
              <div className="flex flex-wrap gap-2">
                {mockUserProfile.collaborationTags.map(tag => (
                  <div key={tag.tag} className="flex items-center space-x-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
                    <span className="text-sm">{tag.tag}</span>
                    <span className="text-xs bg-primary-100 px-1.5 py-0.5 rounded-full">{tag.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Recent Projects</h3>
              <div className="space-y-3">
                {mockUserProfile.projectHistory.slice(0, 2).map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <button 
                onClick={() => setActiveTab('projects')}
                className="w-full mt-3 text-primary-600 text-sm font-medium"
              >
                View All Projects →
              </button>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-4">
            {/* Skills Statistics */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Skills Overview</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                  <span>Total Endorsements: {userSkills.reduce((sum, skill) => sum + skill.likes, 0)}</span>
                </div>
              </div>
            </div>

            {['frontend', 'backend', 'devops', 'design', 'ai'].map(category => {
              const categorySkills = userSkills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              const categoryNames = {
                frontend: 'Frontend Development',
                backend: 'Backend Development',
                devops: 'DevOps & Deployment',
                design: 'Design',
                ai: 'Artificial Intelligence'
              };

              return (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-gray-900">{categoryNames[category]}</h3>
                  <div className="space-y-2">
                    {categorySkills.map(skill => (
                      <SkillBadge 
                        key={skill.name} 
                        skill={skill} 
                        isOwnProfile={isOwnProfile}
                        onLike={handleSkillLike}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-4">
            {mockUserProfile.projectHistory.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900">
            {isOwnProfile ? 'My Profile' : 'User Profile'}
          </h1>
          <div className="flex items-center space-x-2">
            {/* Demo toggle button */}
            <button 
              onClick={toggleProfileMode}
              className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              {isOwnProfile ? 'View as Others' : 'View as Own'}
            </button>
            {isOwnProfile && (
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="p-2"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Personal Information Card */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
              {mockUserProfile.avatar}
            </div>
            <div>
              <h2 className="text-xl font-bold">{mockUserProfile.name}</h2>
              <p className="text-primary-100">{mockUserProfile.major}</p>
              <p className="text-primary-100 text-sm">{mockUserProfile.university} • {mockUserProfile.year}</p>
            </div>
          </div>
          <p className="text-sm text-primary-100 leading-relaxed">{mockUserProfile.bio}</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="text-sm text-gray-700">{mockUserProfile.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm text-gray-700">github.com/{mockUserProfile.github}</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm text-gray-700">linkedin.com/in/{mockUserProfile.linkedin}</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'skills', label: 'Skills' },
              { key: 'projects', label: 'Projects' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-primary-600 text-primary-600 bg-primary-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage; 