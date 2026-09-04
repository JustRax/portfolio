// src/data/portfolio.js
// Central data store — edit this file to update all content on the site
import heroImage from '../assets/hero-1.jpeg'
import htmlCert from '../assets/images/html.png'
import cssCert from '../assets/images/css.png'
import jsCert from '../assets/images/js.png'
import pythonCert from '../assets/images/Python_Essentials.jpg'
import webCert from '../assets/images/web.png'
import sqlCert from '../assets/images/sql.png'
import cppCert from '../assets/images/cpp.png'
import ciscoCert from '../assets/images/cisco.jpg'
import introCert from '../assets/images/intro_to_css.png'
import settingupCert from '../assets/images/setting_up.png'
import installingCert from '../assets/images/installing_and_configuring.png'
import NextJsCert from '../assets/images/nextjs.png'
import resume from '../assets/catibod_resume.pdf'


export const profile = {
  name: 'Marjo Catibod',
  title: 'Student · Photographer · Editor · Aspiring Cloud Engineer · Aspiring Network Engineer',
  location: 'General Trias, Cavite, Philippines',
  bio: `Dedicated and detail-oriented programmer seeking to leverage software development skills in a dynamic tech company. Passionate about building efficient, user-friendly systems and continuously improving technical expertise through hands-on projects and real-world problem solving.

Currently pursuing a Bachelor’s degree in Information Technology, I have experience working with web development, database management, and embedded systems projects such as Arduino-based projects. I enjoy turning ideas into functional solutions, whether it’s developing a cashier system, designing responsive interfaces, or integrating hardware with software.

I am eager to grow as a developer, learn from experienced professionals, and contribute to meaningful and innovative projects while continuously sharpening my skills in both frontend and backend development.`,
  avatar: heroImage,
  email: 'marjoguiba029@gmail.com',
  messenger: 'https://m.me/qtdev404',
  social: {
    linkedin: 'https://www.linkedin.com/in/marjo-catibod-a236a0393/',
    github: 'https://github.com/JustRax',
    facebook: 'https://www.facebook.com/qtdev404/',
    instagram: 'https://www.instagram.com/rax03_/',
  },
  achievements: [
    {
      label: 'Download CV',
      sublabel: 'My Resume in PDF format for easy sharing and printing.',
      url: resume,
      download: 'catibod_resume.pdf',
    }
  ],
}

export const experience = [
  { role: 'BS Information Technology', company: 'National College of Science and Technology', year: '2023 - Present', type: 'edu' },
  { role: 'Technical Vocational Livelihood - Computer System Servicing', company: 'Unida Christian Colleges', year: '2021 - 2023', type: 'milestone' },
  { role: 'Technical Vocational Livelihood - Computer Center Servicing', company: 'General Emilio Aguinaldo National Hightschool', year: '2021 - 2023', type: 'milestone' },
  { role: 'Hello World!', company: 'Wrote my first line of code', year: '2019', type: 'milestone' },
]

export const techStack = {
  Frontend: ['JavaScript', 'VueJs', 'Tailwind CSS', 'Bootstrap CSS', 'Styled Components', 'Prettier'],
  Backend: ['MySQL', 'Python', 'PHP', 'Laravel'],
  'Developer Tools': ['GitHub', 'VS Code', 'Discord', 'Figma', 'Adobe Photoshop', 'Adobe lightroom', 'Anytype', 'Arduino IDE', 'Cisco Packet Tracer'],
  'Other Language': ['C++', 'Arduino (Embedded Systems)'],
}

export const projects = [
  {
    name: 'XPense: A Budget Monitoring App',
    description: 'XPense a basic flutter/dart mobile-base for budget monitoring',
    url: 'https://xpense-flutter-web.web.app',
    domain: 'https://xpense-flutter-web.web.app',
  },
  {
    name: 'Inventory Management System',
    description: 'A Vue.js-based inventory management system that allows users to easily add, track, and manage products with CSV import and export functionality.',
    url: 'https://catibod31m3.wuaze.com/',
    domain: 'https://catibod31m3.wuaze.com/',
  },
  {
    name: 'Daily Sales Tracker',
    description: 'A simple python desktop application for tracking daily sales transactions.',
    url: 'https://github.com/JustRax/AppDev-Project-DailySalesTracker-BSIT22A2.git',
    domain: 'https://github.com/JustRax/AppDev-Project-DailySalesTracker-BSIT22A2.git',
  },
  {
    name: 'Basic HTML Projects',
    description: 'List of basic HTML projects that I have done during my time in high school. These projects include a variety of simple web pages and applications that demonstrate fundamental HTML skills and concepts.',
    url: 'https://github.com/JustRax/Basic-HTML-Projects.git',
    domain: 'https://github.com/JustRax/Basic-HTML-Projects.git',
  },
  
  {
    name: 'Basic C++ Projects',
    description: 'List of basic C++ projects that I have done during my time in high school. These projects include a variety of simple applications that demonstrate fundamental C++ skills and concepts.',
    url: 'https://github.com/JustRax/Basic-CPP-Projects.git',
    domain: 'https://github.com/JustRax/Basic-CPP-Projects.git',
  },
  {
    name: 'Basic Python Projects',
    description: 'List of basic Python projects that I have done during my time in high school. These projects include a variety of simple applications that demonstrate fundamental Python skills and concepts.',
    url: 'https://github.com/JustRax/Basic-Python-Projects.git',
    domain: 'https://github.com/JustRax/Basic-Python-Projects.git',
  },
  {
    name: 'Arduino Projects',
    description: 'List of basic Arduino projects that I have done during my time in high school. These projects include a variety of simple applications that demonstrate fundamental Arduino skills and concepts.',
    url: 'https://github.com/JustRax/Aerisense.git',
    domain: 'https://github.com/JustRax/Aerisense.git',
  },
  {
    name: 'Acme Dashboard',
    description: 'A Next.js dashboard demonstrating modern styling, optimized assets, routing, data fetching, search, pagination, authentication, form validation, and error handling.',
    url: 'https://nextjs-dashboard-3d9fd9sua-justraxs-projects.vercel.app/',
    domain: 'https://nextjs-dashboard-3d9fd9sua-justraxs-projects.vercel.app/',
  }
]

export const certifications = [
  {
    name: 'Introduction to Computer System Servicing',
    issuer: 'e-TESDA',
    image: introCert,
  },
  {
    name: 'Introduction to Setting Up Computer Networks',
    issuer: 'e-TESDA',
    image: settingupCert,
  },
  {
    name: 'Introduction to Installing and Configuring Computer Systems',
    issuer: 'e-TESDA',
    image: installingCert,
  },
  {
    name: 'Introduction to C++',
    issuer: 'Sololearn',
    image: cppCert,
  }, 
  {
    name: 'Introduction to HTML',
    issuer: 'Sololearn',
    image: htmlCert,
  },
  {
    name: 'Introduction to CSS',
    issuer: 'Sololearn',
    image: cssCert,
  },
  {
    name: 'Introduction to JavaScript',
    issuer: 'Sololearn',
    image: jsCert,
  }, 
  {
    name: 'Introduction to SQL',
    issuer: 'Sololearn',
    image: sqlCert,
  },
  {
    name: 'Web Development',
    issuer: 'Sololearn',
    image: webCert,
  }, 
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    image: pythonCert,
  },
  {
    name: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    image: ciscoCert,
  },
  {
    name: 'Next.js App Roter Fundamentals',
    issuer: 'Vercel',
    image: NextJsCert,
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    badgeUrl: 'https://images.credly.com/size/110x110/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png',
    url: 'https://www.credly.com/badges/f816ea2d-48c6-4eae-bb55-d707eeb6b5ba/public_url',
  },
  {
    name: 'Apply AI: Analyze Customer Reviews',
    issuer: 'Cisco Networking Academy',
    badgeUrl: 'https://images.credly.com/size/340x340/images/5ba48a47-11b2-452f-a641-5184ba2f6a67/blob',
    url: 'https://www.credly.com/badges/145c82b5-2c23-4faa-aa8c-3b6cdb9ad133/public_url',
  }

]


export const recommendations = [
  {
    quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Bryl is a highly skilled software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality work and is a valuable asset to any team.`,
    name: 'lorem ipsum',
    role: 'lorem ipsum at lorem ipsum',
  },
  {
    quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Bryl is a highly skilled software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality work and is a valuable asset to any team.`,
    name: 'lorem ipsum',
    role: 'lorem ipsum at lorem ipsum',
  },
  {
    quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Bryl is a highly skilled software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality work and is a valuable asset to any team.`,
    name: 'lorem ipsum',
    role: 'lorem ipsum at lorem ipsum',
  },
  {
    quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Bryl is a highly skilled software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality work and is a valuable asset to any team.`,
    name: 'lorem ipsum',
    role: 'lorem ipsum at lorem ipsum',
  },
  {
    quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Bryl is a highly skilled software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality work and is a valuable asset to any team.`,
    name: 'lorem ipsum',
    role: 'lorem ipsum at lorem ipsum',
  },
  {
    quote: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Bryl is a highly skilled software engineer with a strong work ethic and a passion for learning. He consistently delivers high-quality work and is a valuable asset to any team.`,
    name: 'lorem ipsum',
    role: 'lorem ipsum at lorem ipsum',
  },
]
