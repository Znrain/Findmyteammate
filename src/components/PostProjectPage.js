import React, { useState } from 'react';

function PostProjectPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    title: '',
    type: 'courses',
    description: '',
    skills: '',
    deadline: '',
    maxMembers: '4',
    university: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic can be added here
    console.log('Submit project:', formData);
    alert('Project published successfully!');
    onNavigate('home');
  };

  const predefinedSkills = [
    'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', 'Go', 'Docker',
    'Machine Learning', 'AI', 'Data Analysis', 'Algorithms', 'Distributed Systems', 
    'Full-stack', 'Frontend', 'Backend', 'Mobile Development', 'UI/UX Design', 
    'Product Design', 'Project Management'
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => onNavigate('home')}
            className="p-1"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Post Project</h1>
        </div>
      </header>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'courses', label: 'Course Project', icon: '📚' },
              { value: 'hackathons', label: 'Hackathon', icon: '🚀' },
              { value: 'startups', label: 'Startup', icon: '💡' }
            ].map(type => (
              <button
                key={type.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, type: type.value }))}
                className={`p-3 rounded-lg border-2 text-center transition-colors ${
                  formData.type === type.value
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-xl mb-1">{type.icon}</div>
                <div className="text-xs font-medium">{type.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Project Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Briefly describe your project"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        {/* School/Organization */}
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
            School/Organization *
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleInputChange}
            placeholder="e.g., University of Washington"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            required
          />
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            placeholder="Describe the project content, goals, and desired teammate qualities in detail"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            required
          />
        </div>

        {/* Skill Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Required Skills
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {predefinedSkills.map(skill => (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedSkills.includes(skill)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
          {selectedSkills.length > 0 && (
            <div className="mt-2">
              <span className="text-sm text-gray-600">Selected:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {selectedSkills.map(skill => (
                  <span key={skill} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Team Settings */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700 mb-2">
              Team Size
            </label>
            <select
              id="maxMembers"
              name="maxMembers"
              value={formData.maxMembers}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {[2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} members</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Post Project
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostProjectPage; 