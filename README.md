# 🤝 Find My Teammate

A modern, mobile-first React application for connecting students and professionals to find ideal teammates for various projects and collaborations.

## 🌟 Features

### 🏠 **Project Discovery**
- **7 Project Categories**: Course Projects, Hackathons, Startups, Competitions, Research, Internships, Study Groups
- **Smart Filtering**: Browse projects by category with horizontally scrollable tabs
- **Rich Project Cards**: View project details, required skills, deadlines, and team member count

### 📝 **Project Management**
- **Easy Project Creation**: Post new projects with detailed descriptions
- **Skill-based Matching**: Tag projects with required technical skills
- **Team Size Configuration**: Set optimal team size (2-8 members)
- **Deadline Tracking**: Keep track of project timelines

### 👥 **Team Collaboration**
- **Application System**: Apply to join teams with personalized messages
- **Team Dashboard**: Track active, pending, and completed projects
- **Progress Monitoring**: Visual progress bars for active projects
- **Meeting Scheduling**: Next meeting reminders

### 🎯 **Professional Profiles**
- **Skill Endorsements**: Social validation system for technical skills
- **Project Portfolio**: Showcase completed and ongoing projects
- **Collaboration History**: Track team reviews and achievements
- **Contact Integration**: GitHub, LinkedIn, and email connections

## 🚀 Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Hooks (useState)
- **Package Manager**: npm
- **Development**: Create React App

## 📱 Design Principles

- **Mobile-First**: Optimized for mobile devices with responsive design
- **User Experience**: Intuitive navigation with bottom tab bar
- **Modern UI**: Clean, professional interface with consistent styling
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Znrain/Findmyteammate.git
   cd Findmyteammate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Project Structure

```
src/
├── components/
│   ├── HomePage.js           # Project discovery and browsing
│   ├── PostProjectPage.js    # Create new projects
│   ├── ProjectDetailPage.js  # Detailed project view and applications
│   ├── MyTeamsPage.js        # Team management dashboard
│   └── ProfilePage.js        # User profiles and skill endorsements
├── App.js                    # Main app component with navigation
├── index.js                  # React app entry point
└── index.css                 # Global styles and Tailwind imports
```

## 🎨 Key Components

### **HomePage**
- Project category tabs (horizontally scrollable)
- Project cards with apply functionality
- Search and filter capabilities

### **ProjectDetailPage** 
- Comprehensive project information
- Team member profiles
- Application modal with custom success notifications

### **ProfilePage**
- Skill endorsement system
- Project history showcase
- View mode toggle (own vs. others' profiles)

### **MyTeamsPage**
- Project status tracking (Active, Pending, Completed)
- Progress visualization
- Team statistics dashboard

## 🌐 Deployment

### **Vercel Deployment** (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect this as a React app
3. Deploy with zero configuration needed
4. Automatic deployments on every push to main branch

### **Other Platforms**
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Znrain**
- GitHub: [@Znrain](https://github.com/Znrain)
- Repository: [Findmyteammate](https://github.com/Znrain/Findmyteammate)

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

⭐ **Star this repository if you find it helpful!** 