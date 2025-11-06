import ProjectCarousel from '@/components/ProjectCarousel'
import React from 'react'

const page = () => {
  return (
    <ProjectCarousel projects={projectsData} />
  )
}

export default page
const projectsData = [
  {
    id: "1",
    title: "Magical Draw",
    category: "Real-Time Collaborative Drawing App",
    description: "Drawing Tool For Real Time Collaborative",
    image: "/assets/Home1.png",
    link: "https://youtu.be/jBVRcHgPkFg",
    github: "https://github.com/Sridatthu/MagicBoard",
    tags: ["Turborepo","NodeJs","WebSocket","Prisma ORM","Nextjs","Postgres", "Tailwindcss",],
  },
  {
    id: "2",
    title: "Master Quiz",
    category: "Quiz Competition Platform ",
    description: "Quiz Competiton Platform",
    image: "/assets/master-quiz.png",
    link: "https://masterquiz16.netlify.app/",
    github: "https://github.com/Sridatthu/MasterQuiz",
    tags: ["Java","SpringBoot","MySql","ReactJs","Tailwindcss","Framer-Motion"],
  },
  {
    id: "3",
    title: "Portfolio",
    category: "portfolio Template",
    description: "portfolio Template",
    image: "/assets/portfolio1.png",
    link: "https://portfolio-beryl-theta-66.vercel.app/",
    github: "https://github.com/Sridatthu/portfolio",
    tags: ["NextJs","Tailwindcss","Shadcn","MagicUi","Framer-Motion"],
  },
   {
    id: "4",
    title: "Dev Tinder",
    category: "Developers Social Media Website",
    description: "Developers Social Media App",
    image: "/assets/devtinder.png",
    link: "https://devtinder18.netlify.app/",
    github: "https://github.com/Sridatthu/DevTinderApp",
    tags: ["Java","SpringBoot","MongoDb","ReactJs","Tailwindcss"],
  },
  {
    id: "5",
    title: "E-Commerce",
    category: "A E-commerce app ",
    description: "A E-commerce app ",
    image: "/assets/ecommerce.png",
    link: "https://ecommerse18.netlify.app/",
    github: "https://github.com/Sridatthu/E-commerce",
    tags: ["Java","SpringBoot","MySql","ReactJs","Tailwindcss"],
  },
  {
    id: "6",
    title: "CineScope",
    category: "A movie discovery app ",
    description: "A movie discovery app ",
    image: "/assets/Cinescope.png",
    link: "https://mycinescope.netlify.app/",
    github: "https://github.com/Sridatthu/CineScope",
    tags: ["ReactJs","Tailwindcss","OMDB API"],
  },
];