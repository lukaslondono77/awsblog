# AWS Solutions Architect Learning Hub

A modern, educational blog platform dedicated to teaching AWS Solutions Architect concepts. Built with Node.js, Express, React, and Vite.

## 🚀 Features

- **Comprehensive AWS Content**: In-depth articles covering all major AWS Solutions Architect topics
- **Modern UI/UX**: Beautiful, high-contrast design optimized for readability
- **Category Filtering**: Easily browse articles by topic (Networking, Storage, Compute, Architecture, etc.)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **RESTful API**: Clean Express backend serving structured content

## 📚 Topics Covered

- Getting Started with AWS Solutions Architecture
- VPC and Networking Fundamentals
- S3 Storage Classes and Lifecycle Policies
- High Availability and Fault Tolerance
- Serverless Architecture with Lambda
- And more...

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- CORS enabled for development

**Frontend:**
- React 18
- React Router for navigation
- React Markdown for content rendering
- Vite for build tooling
- Modern CSS with CSS Variables

## 📋 Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone or Navigate to the Project

```bash
cd /Users/lukasygina/awsproject
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Run the Application

You'll need two terminal windows/tabs:

**Terminal 1 - Backend Server:**
```bash
npm run dev
```
The backend API will start on `http://localhost:8000`

**Terminal 2 - Frontend Development Server:**
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:3000`

### 5. Access the Application

- **Frontend**: http://localhost:3000
- **Backend Health Check**: http://localhost:8000/api/healthz
- **API Posts Endpoint**: http://localhost:8000/api/posts

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/healthz` | Health check endpoint |
| GET | `/api/posts` | Get all blog posts (summaries) |
| GET | `/api/posts/:id` | Get single post by ID |
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:category` | Get posts by category |

## 📁 Project Structure

```
awsproject/
├── server.js                 # Express backend server
├── package.json             # Backend dependencies
├── README.md               # This file
└── frontend/
    ├── index.html          # HTML entry point
    ├── package.json        # Frontend dependencies
    ├── vite.config.js      # Vite configuration
    └── src/
        ├── main.jsx        # React entry point
        ├── App.jsx         # Main app component
        ├── index.css       # Global styles
        ├── App.css         # App styles
        ├── components/     # Reusable components
        │   ├── Header.jsx
        │   ├── Header.css
        │   ├── BlogCard.jsx
        │   └── BlogCard.css
        └── pages/          # Page components
            ├── HomePage.jsx
            ├── HomePage.css
            ├── PostPage.jsx
            └── PostPage.css
```

## 🎨 Design Features

- **High Contrast Theme**: Dark background with vibrant AWS-inspired orange accents
- **Accessible Typography**: Clear, readable fonts with proper sizing
- **Smooth Animations**: Subtle hover effects and transitions
- **Responsive Grid**: Adapts to any screen size
- **AWS Branding**: Color scheme inspired by AWS official colors

## 🔧 Development Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon (auto-reload)
- `npm start` - Start production server

**Frontend:**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Adding New Content

To add new blog posts, edit the `blogPosts` array in `server.js`:

```javascript
{
  id: 6,
  title: "Your Article Title",
  category: "Category Name",
  readTime: "X min read",
  date: "2025-10-01",
  excerpt: "Brief description...",
  content: `
# Your Article
Full markdown content here...
  `,
  tags: ["tag1", "tag2"]
}
```

## 🌟 Best Practices Implemented

- **Separation of Concerns**: Clean separation between frontend and backend
- **Component-Based Architecture**: Reusable React components
- **RESTful API Design**: Standard HTTP methods and status codes
- **Responsive Design**: Mobile-first approach
- **Performance Optimization**: Code splitting and lazy loading ready
- **Accessibility**: Semantic HTML and high contrast colors

## 📖 Learning Path

1. Start with "Introduction to AWS Solutions Architect"
2. Learn networking fundamentals with "Understanding VPC and Networking"
3. Master storage with "S3 Deep Dive"
4. Build resilient systems with "High Availability and Fault Tolerance"
5. Explore serverless with "Serverless Architecture with Lambda"

## 🤝 Contributing

This is an educational project. Feel free to:
- Add more AWS topics and articles
- Improve the UI/UX
- Add features like search, comments, or user authentication
- Fix bugs or optimize performance

## 📄 License

MIT License - Feel free to use this project for learning and education.

## 🎯 Future Enhancements

- [ ] Search functionality
- [ ] Code syntax highlighting for examples
- [ ] Architecture diagrams
- [ ] Practice questions and quizzes
- [ ] Progress tracking
- [ ] User authentication
- [ ] Bookmarking favorite articles
- [ ] Dark/Light theme toggle

## 📞 Support

For AWS certification information, visit:
- [AWS Certified Solutions Architect - Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/)
- [AWS Documentation](https://docs.aws.amazon.com/)

---

Built with ❤️ for AWS learners everywhere


