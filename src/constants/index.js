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
  phonepe,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Phonepe Tech Scholar",
    company_name: "Phonepe",
    icon: phonepe,
    iconBg: "#383E56",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Built the backend of XharkTank, which allowed budding entrepreneurs to pitch ideas for a business or product",
      "Develop a business idea by providing a name, title, idea, and investment amount.",
      "Evaluate the business plan and financial projections, and decide on the percentage of equity to be given to the potential investors.",
      "Built an site using Nodejs, Express, Mongod b, RestFul API.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but she proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like she does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After she optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Xharktank",
    description:
      "Built the backend of XharkTank, which allowed budding entrepreneurs to pitch ideas for a business or product Develop a business idea by providing a name, title, idea, and investment amount evaluate the business plan and financial projections, and decide on the percentage of equity to be given to the potential investors. Built an site using Nodejs, Express, Mongod b, RestFul API",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tyagipriyanshi79/Xharktank",
  },
  {
    name: "Crypto Tracker",
    description:
      "Created a Crypto-Tracker website for users to track crypto-curren cies on daiIy basis Created a Crypto Tracker using ReactJS with the help of JavaScript, API, CSS, and HTML to track the current market price of the user’s favorit cryptocurrencies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tyagipriyanshi79/Crypto-tracker-",
  },
  {
    name: "Booking-Site",
    description:
      "A comprehensive  online platform that allows you to book places to stay. While most famous for providing vacation homes, you can also book private rooms, shared rooms and even hotel rooms using ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/tyagipriyanshi79/Booking-site",
  },
];

export { services, technologies, experiences, testimonials, projects };
