import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 36,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 33,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Web3 App Design",
    projects: 2,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "As a developer, I offer my expertise in programming and design to bring your digital vision to life. With several years of experience under my belt and a passion for delivering high-quality work, I am confident in my ability to exceed your expectations. As a freelancer, I have the flexibility to take on projects of all sizes, from small website updates to large-scale mobile applications. Whether you need a website that showcases your business or a mobile app that streamlines your workflow, I have the skills and experience to make it happen.",
];

export const workExp = [
  {
    place: "GoChapaa Kenya Limited",
    tenure: "April 2022 - Present",
    role: "Technical Lead",
    detail:
      "•	Resolving app defects by reviewing bug reports and tracking repeatable malfunctions within software titles and actively writting code using different architectural desings and frameworks. "      
  },
  {
    place: "Maaditech Limited",
    tenure: "March 2020 - April 2022",
    role: "Lead Mobile Developer",
    detail:
      "•	A lead android developer who is proficient in JavaScript, Android Java, Kotlin and Flutter",
  },
  {
    place: "Onfon Media Group",
    tenure: "Jan 2017 - July 2018",
    role: "Android Developer",
    detail:
      "•  An android developer who has developed Mobile Applications using JavaScript, Kotlin and dart.",
  },
];

export const comments = [
  {
    name: "Frida Uchi Malo",
    post: "Marketing Executive and Creative Manager",
    comment:
      "As a marketing executive, I am thoroughly impressed with the products produced by this developer, showcasing exceptional skills in both web design and mobile development. Their attention to detail and ability to bring our visions to life has been a significant asset to our team, and we are thrilled to have them on board.",
    img: "./frida.jpg",
  },
  {
    name: "Lisa Wanjiru",
    post: "Human Resource Manager and Administrator",
    comment:
      "The software developer is a highly skilled and talented individual with a strong background in web design and mobile development, consistently delivering exceptional results.",
    img: "./lisa.png",
  },
  {
    name: "Sally Ndonga",
    post: "Customer Experience: Mawingu Airtime",
    comment:
      "His constant zeal to try out new things, is something to be adored. He is full of energy and attracts other energetic professionals as he is striving to achieve his objectives and smart goals.",
    img: "./sally.jpeg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
