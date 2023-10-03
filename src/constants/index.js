import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    meta,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Digital Marketing",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Sense Techno Solutions",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - Present",
      points: [
        "Create user-friendly interfaces for automation systems that enhance user experience.",
        "Optimize code and databases to maximize performance and efficiency.",
        "Implement stringent security measures to protect sensitive control data.",
        "Stay updated with emerging technologies to drive innovation in automation solutions.",
      ],
    },
    {
      title: "Mobile Developer",
      company_name: "ARTBOXAAYU",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Feb 2021",
      points: [
        "Develop and maintain mobile applications to showcase and sell Artboxaayu's extensive line of trendy handicraft products.",
        "Enhance user experience through intuitive navigation and responsive design.",
        "Implement secure payment gateways and seamless checkout processes for customer convenience.",
        "Continuously update and optimize mobile apps to reflect the latest trends in the handicraft industry.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Customized and developed multiple e-commerce websites on the Shopify platform, ensuring seamless online shopping experiences for clients and their customers.",
        "Implemented responsive design and user-friendly interfaces to enhance the websites' accessibility across various devices.",
        "Integrated third-party apps and plugins to add features like payment gateways, inventory management, and customer analytics.",
        "Provided ongoing maintenance and support to ensure the websites functioned smoothly and efficiently.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Prashant proved me wrong.",
      name: "Chris Brown",
      designation: "CoO",
      company: "Pixelbay",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Prashant does.",
      name: "Rishab Bajpai",
      designation: "COO",
      company: "Artboxaayu",
      image: meta
    },
    {
      testimonial:
        "After Prashant optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Client",
      company: "E-commerce",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ARTBOXAAYU",
      description:
        "India's one-stop online shopping app for Handicraft.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pixelbay.oy",
      description:
        "Web application that enables CS:GO players to trade, buy skins.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-Commerce",
      description:
        "Desigend multiple e-commerce website using shopify.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };