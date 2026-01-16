import my_image from './my_image.jpg';
import logo from './logo.svg';
import cpp from './cpp.png';
import js from './javascript.png';
import python from './python.png';
import react from './react.png';
import tailwind from './tailwind.png';
import mysql from './mysql.png';
import mongodb from './mongodb.png';
import express from './express.png';
import quickshow from './quickShow.png';
import prescripto from './prescripto.png';
import myPortfolio from './myPortfolio.png';
const assets =  {
    logo,
    my_image
}

const techStackAssets = [
    {
        name: "C++",
        img: cpp
    },
    {
        name: "JavaScript",
        img: js
    },
    {
        name: "Python",
        img: python
    },
    {
        name: "React",
        img: react
    },
    {
        name: "Tailwind",
        img: tailwind
    },
    {
        name: "MySQL",
        img: mysql
    },
    {
        name: "MongoDB",
        img: mongodb
    },
    {
        name: "Express",
        img: express
    }
];

const projects = [
  {
    id: 1,
    title: "QuickShow",
    description: "QuickShow is a MERN-based real-time movie ticket booking system with smooth user and admin features.",
    image: quickshow,
    tags: ["React", "Express.js", "MongoDB"],
    github_link:"https://github.com/subham-oss/movie-ticket-booking",
    src:"https://movie-ticket-booking-nine.vercel.app"
  },
  {
    id: 2,
    title: "Prescripto",
    description: "Prescripto is a MERN-based doctor booking app for appointments, schedule management, and payments.",
    image: prescripto,
    tags: ["React", "Express.js", "MongoDB"],
    github_link:"https://github.com/subham-oss/doc_booking",
    src:"https://doc-booking-2.onrender.com/"
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "My personal portfolio website showcasing my projects and skills. Built with React and Tailwind CSS.",
    image: myPortfolio,
    tags: ["Tailwind", "React", "Express.js"],
    github_link:"https://github.com/subham-oss/my-portfolio",
    src:""
  }
];
export  {assets,techStackAssets,projects} ;