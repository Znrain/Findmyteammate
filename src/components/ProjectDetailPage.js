import React, { useState } from 'react';

function ProjectDetailPage({ project, onNavigate }) {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState('');

  if (!project) {
    return (
      <div className="pb-20 p-4">
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-gray-500">Project not found</p>
          <button 
            onClick={() => onNavigate('home')}
            className="mt-4 text-primary-600 font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    console.log('Apply to project:', project.id, 'Application message:', applicationMessage);
    setShowApplicationModal(false);
    setApplicationMessage('');
    setShowSuccessModal(true);
  };

  const handleSuccessConfirm = () => {
    setShowSuccessModal(false);
    // Can choose to return to home or stay on current page
    // onNavigate('home');
  };

  // Mock team member data
  const teamMembers = [
    {
      id: 1,
      name: project.owner,
      avatar: project.avatar,
      role: 'Project Lead',
      skills: project.skills.slice(0, 2)
    },
    {
      id: 2,
      name: 'Alex Johnson',
      avatar: '👨‍💼',
      role: 'Team Member',
      skills: ['React', 'Node.js']
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => onNavigate('home')}
              className="p-1"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-gray-900">Project Details</h1>
          </div>
          <button className="p-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Project Basic Information */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-start space-x-3 mb-4">
            <div className="text-3xl">{project.avatar}</div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{project.owner} • {project.university}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>👥 {project.members}</span>
                <span>📅 {project.deadline}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              project.type === 'courses' ? 'bg-blue-100 text-blue-800' :
              project.type === 'hackathons' ? 'bg-green-100 text-green-800' :
              project.type === 'startups' ? 'bg-purple-100 text-purple-800' :
              project.type === 'competitions' ? 'bg-yellow-100 text-yellow-800' :
              project.type === 'research' ? 'bg-indigo-100 text-indigo-800' :
              project.type === 'internships' ? 'bg-pink-100 text-pink-800' :
              project.type === 'study' ? 'bg-teal-100 text-teal-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {project.type === 'courses' ? '📚 Course Project' :
               project.type === 'hackathons' ? '🚀 Hackathon' :
               project.type === 'startups' ? '💡 Startup' :
               project.type === 'competitions' ? '🏆 Competition' :
               project.type === 'research' ? '🔬 Research' :
               project.type === 'internships' ? '💼 Internship' :
               project.type === 'study' ? '📖 Study Group' :
               '📋 Other'}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </div>

        {/* Required Skills */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-md font-semibold text-gray-900 mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-md font-semibold text-gray-900 mb-3">Current Team Members</h3>
          <div className="space-y-3">
            {teamMembers.map(member => (
              <div key={member.id} className="flex items-center space-x-3">
                <div className="text-xl">{member.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{member.name}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {member.skills.map(skill => (
                      <span key={skill} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Requirements */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-md font-semibold text-gray-900 mb-3">Requirements</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Strong teamwork spirit</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Ability to meet deadlines</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Proactive and good communication skills</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Relevant project experience preferred</span>
            </li>
          </ul>
        </div>

        {/* Apply Button */}
        <div className="pt-4">
          <button
            onClick={() => setShowApplicationModal(true)}
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Apply to Join Team
          </button>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-sm mx-4 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Apply to Join</h3>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Personal Introduction and Application Reason
              </label>
              <textarea
                value={applicationMessage}
                onChange={(e) => setApplicationMessage(e.target.value)}
                placeholder="Briefly introduce your skills and background, and explain why you want to join this project..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm"
                rows={4}
              />
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                className="flex-1 py-2.5 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Send Application
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-sm mx-4 p-6 space-y-4 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Sent!</h3>
              <p className="text-sm text-gray-600 mb-4">
                The project leader will reply to you soon. You can check your application status in the "My Teams" page.
              </p>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleSuccessConfirm}
                className="w-full py-2.5 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                OK
              </button>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  onNavigate('teams');
                }}
                className="w-full py-2.5 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                View My Teams
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetailPage; 