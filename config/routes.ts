export interface Route {
  label: string;
  href: string;
  desc: string;
  imageUrl: string;
}

export const routes: Route[] = [
  {
    label: "Spotify Clone",
    href: "https://github.com/jjfye/Sbotify",
    desc: `This is the first version of my website. Used: HTML, CSS, Javascript and Bootstrap5.
    I have researched online for learning materials to build this website and to 
    showcase the projects that I have worked on in the past.`,
    imageUrl: "/images/spotify.jpeg", 
  },
  {
    label: "Strava Bot",
    href: "https://github.com/jjfye/runBot",
    desc: `My Strava bot for Discord uses Strava's API and Python to automatically update a 
    chat with notifications of new user posts. By integrating the bot with Discord using the platform's public key, 
    you enabled real-time sharing of running achievements within your community, showcasing your skills in API 
    integration, Python programming, and bot development for social platforms.`,
    imageUrl: "https://example.com/strava-bot-image-url.jpg", 
  },    {
    label: "Tournament Generator",
    href: "https://github.com/jjfye/Tournment_Game_Generator",
    desc: `This project highlights Python coding, user input validation for robust data handling, 
    algorithm development for logical operations, and data structure management for organizing 
    and processing information efficiently.`,
    imageUrl: "https://example.com/strava-bot-image-url.jpg", 
  },
  {
    label: "Rubik's Cube Solver",
    href: "https://github.com/jjfye/Rubik-s-Cube-Solver",
    desc: `Python-based Rubik's Cube solver using a webcam to detect the cube's state and 
    the Kociemba library for solving it. This project highlights my proficiency in image 
    processing and implementing complex algorithms in Python.`,
    imageUrl: "https://example.com/strava-bot-image-url.jpg",
  },    {
    label: "Mobile Chat",
    href: "https://github.com/jjfye/Mobile-Chat-App",
    desc: ` Used JavaScript and an API to build a chat app, 
    focusing on connecting to backend services for real-time messaging and user engagement, 
    showcasing your skills in app development and API integration.`,
    imageUrl: "https://example.com/strava-bot-image-url.jpg", 
  },
  {
    label: "Discord Bot",
    href: "https://github.com/jjfye/Discord-Bot",
    desc: `I created a Tournament Game Generator as one of my personal project using Python, 
    and I further developed this by implementing it on to Discord by 
    creating my very own Discord Bot!`,
    imageUrl: "/images/discordBot.jpg", 
  },
  {
    label: "2D Collecting Game",
    href: "https://github.com/jjfye/Programming",
    desc: `This module required me to create a fully functional game 
    using Processing3 which is coded using Java.`,
    imageUrl: "/images/collectingGame.jpg", 
  },
  {
    label: "Book World",
    href: "https://github.com/jjfye/Web-Design-Development",
    desc: `I have created a website for a book store that asks the user to purchase a 
    book and enter in their card details using HTML, CSS, Javascript, PHP and mySQL.`,
    imageUrl: "/images/bookWorld.png", 
  },    {
    label: "Rhythm Game",
    href: "https://github.com/jjfye/Rhythm-Game",
    desc: `I have created a rhythm game using Unity and C#. This project included 
    many steps and designs before the final product was finished.`,
    imageUrl: "/images/rhythmGame.jpg", 
  },
  {
    label: "Flappy Bird Unity",
    href: "https://github.com/jjfye/Flappy-Birdo",
    desc: `I have created a replica of Flappy Bird using Unity and online resources to 
    become more familiar with the software and language during my free time.`,
    imageUrl: "/images/flappybirdo.jpg",
  },  {
    label: "Portfolio Website V1",
    href: "https://github.com/jjfye/portfolio",
    desc: `This is the first version of my website. Used: HTML, CSS, Javascript and Bootstrap5.
    I have researched online for learning materials to build this website and to 
    showcase the projects that I have worked on in the past.`,
    imageUrl: "/images/website.jpg",
  },
];

export interface TabRoutes {
  label: string;
  href: string;
}

export const tabs: TabRoutes[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  }
];