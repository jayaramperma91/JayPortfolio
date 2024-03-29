import Head from "next/head";
import React from "react";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

import deved from "../public/dev-jayaram.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/proj2.jpg";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import ProjectItem from "./api/ProjectItem";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Home() {
  const colorHashTable = {
    a: { color: "apple", dark: true },
    b: { color: "black", dark: true },
    c: { color: "calamine", dark: false },

    d: { color: "dandelion", dark: false },
    e: { color: "EmeraldGreen", dark: false },
    f: { color: "Fawn", dark: false },
    g: { color: "grape", dark: true },
    h: { color: "heaven", dark: false },
    i: { color: "indigo", dark: true },
    j: { color: "jade", dark: true },
    k: { color: "Khaki", dark: false },
    l: { color: "Lavender", dark: true },
    m: { color: "mint", dark: false },
    n: { color: "navyblue", dark: true },
    o: { color: "orange", dark: false },
    p: { color: "purple", dark: true },
    q: { color: "quartz", dark: true },
    r: { color: "ruby", dark: true },
    s: { color: "skyblue", dark: false },
    t: { color: "Turquoise", dark: false },
    u: { color: "ube", dark: true },
    v: { color: "Violet", dark: true },
    w: { color: "white", dark: false },
    x: { color: "Xanadu", dark: true },
    y: { color: "yellow", dark: false },
    z: { color: "zomp", dark: true },
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [darkMode, setDarkMode] = useState(true);
  const [animateVertical, setanimateVertical] = useState(true);
  const [color, setColor] = useState("quartz");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;
  const [scrollY, setScrollY] = useState(0);
  const scrollToSkills = () => {
    scroller.scrollTo("skills", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollTotheTop = () => {
    scroller.scrollTo("top", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToTimeLine = () => {
    scroller.scrollTo("timeLine", {
      duration: 100,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  useEffect(() => {
    if (window.innerWidth < 600) {
      setanimateVertical(false);
    } else {
      setanimateVertical(true);
    }
  }, []);

  const [isZoomed1, setIsZoomed1] = useState(false);

  const handleZoom1 = () => {
    setIsZoomed1(true);
  };

  const handleUnzoom1 = () => {
    setIsZoomed1(false);
  };
  const [isZoomed2, setIsZoomed2] = useState(false);

  const handleZoom2 = () => {
    setIsZoomed2(true);
  };

  const handleUnzoom2 = () => {
    setIsZoomed2(false);
  };

  const [isZoomed3, setIsZoomed3] = useState(false);

  const handleZoom3 = () => {
    setIsZoomed3(true);
  };

  const handleUnzoom3 = () => {
    setIsZoomed3(false);
  };

  const [isZoomed4, setIsZoomed4] = useState(false);

  const handleZoom4 = () => {
    setIsZoomed4(true);
  };

  const handleUnzoom4 = () => {
    setIsZoomed4(false);
  };
  const handleLinkedInClick = () => {
    // Redirect to your LinkedIn profile
    window.open("https://www.linkedin.com/in/jayaram-chandrasekara-kumaran/");
  };
  const handleMailClick = () => {
    window.location.href = "mailto:jayaramperma91@gmail.com";
  };
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleKeyDown = (event) => {
    console.log("Key pressed:", event.key);
    // You can perform actions based on the pressed key here (e.g., if (event.key === 'Enter') { ... })
    if (colorHashTable[event.key]) {
      setColor(colorHashTable[event.key]["color"]);
      setDarkMode(colorHashTable[event.key]["dark"]);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className={` colorful-background ${color} ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Jay&apos;s Canvas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main name="top" className=" md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Jay&apos;s Canvas</h1>

            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-2"
                  onClick={scrollToSkills}
                  href="#"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-2"
                  onClick={scrollToProjects}
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-2"
                  onClick={scrollToTimeLine}
                  href="#"
                >
                  Timeline
                </a>
              </li>
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li> */}
            </ul>
          </nav>
          <h1 className="font-burtons text-xl dark:text-white">
            Press a letter for a color : {color}
          </h1>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Jayaram Chandrasekar
            </h2>
            <h1 className="text-4xl dark:text-white">
              {" "}
              I am a{" "}
              <span
                className="txt-rotate"
                data-rotate="[ 'Web Developer', 'Web Designer', 'UI/UX Designer' ]"
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <br></br>
            <p className="leading-8 mb-4 dark:text-white">
              <span>
                Adept in front-end frameworks like{" "}
                <a
                  className="   btn btn-angular btn-danger transition-all ease-in-out duration-300 border-red-600 "
                  href="https://angular.io/"
                >
                  Angular
                  <i className="fa-brands fa-angular ml-1"></i>
                </a>{" "}
                and{" "}
                <a
                  className="   btn btn-react btn-primary  transition-all ease-in-out duration-300 border-blue-600"
                  href="https://react.dev/"
                >
                  React
                  <i className="fa-brands fa-react"></i>
                </a>
              </span>
            </p>
            <p className="mb-4 leading-8 dark:text-white">
              <span>
                Proficient in crafting visually appealing and intuitive user
                interfaces with{" "}
                <a
                  className="   btn btn-html  transition-all ease-in-out duration-300 border-orange-600 mb-3"
                  href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                >
                  HTML
                  <i className="fa-brands fa-html5"></i>
                </a>
                ,{" "}
                <a
                  className="   btn btn-css transition-all ease-in-out duration-300 mb-3 border-blue-300"
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                >
                  CSS
                  <i className="fa-brands fa-css3"></i>
                </a>
                , and{" "}
                <a
                  href="https://www.javascript.com/"
                  className="   btn btn-javascript transition-all ease-in-out duration-300 mb-3 border-yellow-400"
                >
                  Javascript
                  <i className="fa-brands fa-js"></i>
                </a>
              </span>
            </p>
            <p className="mb-2 leading-8 dark:text-white">
              <span>
                Skilled in wireframing and crafting layouts using UX tools like{" "}
                <a
                  className="   btn btn-figma  transition-all ease-in-out duration-300 border-black"
                  href="https://www.figma.com/"
                >
                  Figma
                  <i className="fa-brands fa-figma"></i>
                </a>{" "}
                ,{" "}
                <a
                  href="https://helpx.adobe.com/xd/get-started.html"
                  className="  btn btn-adobe transition-all ease-in-out duration-300 border-purple-600  mr-2"
                >
                  Adobe XD
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path
                      fill="white"
                      d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm3.24 18.76a3.623 3.623 0 0 1-3.62 3.64H4.63c-2 0-3.63-1.63-3.63-3.63V4.93c0-2 1.63-3.63 3.63-3.63h14.73a3.63 3.63 0 0 1 3.63 3.63v14.13zm-13.5-7.81l2.8 5.38c.05.08.02.16-.06.16h-1.74c-.11 0-.16-.03-.21-.13-.64-1.32-1.29-2.64-1.96-4.06H8.3c-.6 1.34-1.26 2.75-1.9 4.07-.05.08-.1.11-.18.11H4.57c-.1 0-.11-.08-.06-.14l2.74-5.22L4.6 6.14c-.06-.08 0-.14.06-.14h1.72c.1 0 .14.02.18.11.63 1.32 1.27 2.68 1.87 4.01h.02c.58-1.32 1.22-2.69 1.84-4 .05-.08.08-.13.18-.13h1.61c.08 0 .11.06.06.14l-2.65 5.12zm3.29 1.63c0-2.33 1.55-4.15 4.01-4.15.21 0 .32 0 .52.02V6.1c0-.06.05-.1.1-.1h1.58c.08 0 .1.03.1.08v9.18c0 .27 0 .61.05.98 0 .06-.02.08-.08.11-.84.4-1.72.58-2.56.58-2.17.01-3.72-1.33-3.72-4.05zm4.53-2.56c-.14-.06-.34-.1-.58-.1-1.26 0-2.14.97-2.14 2.58 0 1.84.9 2.58 2.03 2.58.24 0 .5-.03.69-.11v-4.95z"
                    ></path>
                  </svg>
                </a>
                and{" "}
                <a
                  className="  btn btn-sketch transition-all ease-in-out duration-300 border-orange-300"
                  href="https://www.sketch.com/"
                >
                  Sketch
                  <i className="fa-brands fa-sketch"></i>
                </a>{" "}
              </span>
            </p>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div name="skills">
            <nav className="py-10 flex justify-between dark:text-white">
              <h3 className="text-3xl py-1 dark:text-white ">Skills</h3>
              <ul className="flex items-center">
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-2"
                    duration={100}
                    onClick={scrollTotheTop}
                    href="#"
                  >
                    Back to the Top
                  </a>
                </li>
              </ul>
            </nav>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a UI/UX engineer and developer, I navigate the digital
              landscape with fluency in Angular, React.js, JavaScript, and
              TypeScript.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My design arsenal includes Figma, Adobe XD, Sketch, and Visio,
              while my development toolkit encompasses HTML, CSS, SASS,
              Bootstrap, Tailwind, AG-grid, PrimeNG, Material, UI Kit, and
              D3.js.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              From legacy systems in AngularJS to progressive solutions in
              Node.js, GraphQL, and Next.js, I craft user-centric experiences
              that seamlessly blend creativity and functionality
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center  bg-white my-div shadow-lg rounded-xl my-10 dark:bg-white flex-1">
              <h4>Frameworks</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-0.5">
                  <p className="text-gray-800 py-1">
                    {" "}
                    <a
                      title="Expert"
                      className="techBadge btn btn-angular btn-danger"
                      href="https://angular.io/"
                    >
                      Angular
                      <i className="fa-brands fa-angular"></i>
                    </a>
                  </p>
                </div>
                <div class="p-0.5">
                  <p className="text-gray-800 py-1">
                    <a
                      className="   btn btn-react btn-primary  transition-all ease-in-out duration-300 border-blue-600"
                      href="https://react.dev/"
                    >
                      React
                      <i className="fa-brands fa-react"></i>
                    </a>
                  </p>
                </div>

                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-tailwind"
                    href="https://tailwindcss.com/"
                  >
                    Tailwind
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      {/* Your SVG path or other elements go here */}
                      <path
                        d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-bootstrap"
                    href="https://getbootstrap.com/"
                  >
                    Bootstrap
                    <i className="fa-brands fa-bootstrap"></i>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  <a
                    className="techBadge btn btn-nextjs"
                    href="https://nextjs.org/"
                  >
                    Next.js
                    <svg
                      fill="#000000"
                      width="20"
                      length="20"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>Next.js icon</title>
                        <path
                          fill="#ffffff"
                          d="M17.813 22.502c-.089.047-.084.066.005.021a.228.228 0 0 0 .07-.047c0-.016-.002-.014-.075.026zm.178-.094c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.071c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.117-.07c-.042.033-.042.035.009.009.028-.014.052-.03.052-.035 0-.019-.012-.014-.061.026zm.162-.105c-.082.052-.108.087-.035.047.052-.03.136-.094.122-.096a.466.466 0 0 0-.087.049zM11.214.006c-.052.005-.216.021-.364.033-3.408.307-6.601 2.146-8.623 4.973a11.876 11.876 0 0 0-2.118 5.243c-.096.659-.108.854-.108 1.748s.012 1.088.108 1.748c.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.533.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.206-.106.246-.134.218-.157a231.73 231.73 0 0 1-1.954-2.62l-1.919-2.592-2.404-3.558a332.01 332.01 0 0 0-2.421-3.556c-.009-.002-.019 1.579-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.424.424 0 0 1-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.442.442 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155a466.83 466.83 0 0 1 2.895 4.361c1.558 2.362 3.687 5.587 4.734 7.171l1.9 2.878.096-.063a12.34 12.34 0 0 0 2.465-2.163 11.94 11.94 0 0 0 2.824-6.134c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.748c-.652-4.506-3.859-8.292-8.208-9.695a12.552 12.552 0 0 0-2.498-.523c-.225-.023-1.776-.049-1.97-.03zm4.912 7.258a.471.471 0 0 1 .237.277c.019.061.023 1.365.019 4.304l-.007 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.009-3.096.023-3.15a.484.484 0 0 1 .232-.296c.096-.049.131-.054.5-.054.347 0 .408.005.486.047z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  <a
                    className="techBadge btn btn-node"
                    href="https://nodejs.org/en"
                  >
                    Node.js
                    <i class="fa-brands fa-node-js"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center my-div bg-white shadow-lg rounded-xl my-10 dark:bg-white flex-1">
              <h4>Web Tech</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-0.5">
                  <p className="text-gray-800 py-1">
                    <a
                      href="https://www.javascript.com/"
                      className="techBadge btn btn-javascript"
                    >
                      Javascript
                      <i className="fa-brands fa-js"></i>
                    </a>
                  </p>
                </div>
                <div class="p-0.5">
                  <p className="text-gray-800 py-1">
                    <a
                      href="https://www.typescriptlang.org/"
                      className="techBadge btn btn-typescript"
                    >
                      TypeScript
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="nonzero"
                            clipRule="nonzero"
                            d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
                            fill="#000000"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </p>
                </div>

                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-html"
                    href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                  >
                    HTML
                    <i className="fa-brands fa-html5"></i>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-css"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  >
                    CSS
                    <i className="fa-brands fa-css3"></i>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-sass"
                    href="https://sass-lang.com/"
                  >
                    SASS
                    <i className="fa-brands fa-sass"></i>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  <a
                    className="techBadge btn btn-graphql"
                    href="https://graphql.org/"
                  >
                    GraphQL
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="#ffffff"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#ffffff"
                          d="M2.5 5.16065C2.5 4.98122 2.59614 4.81555 2.75193 4.72653L7.75193 1.86938C7.90565 1.78155 8.09435 1.78155 8.24807 1.86938L13.2481 4.72653C13.4039 4.81555 13.5 4.98122 13.5 5.16065V10.8394C13.5 11.0188 13.4039 11.1845 13.2481 11.2735L8.24807 14.1306C8.09435 14.2185 7.90565 14.2185 7.75193 14.1306L2.75193 11.2735C2.59614 11.1845 2.5 11.0188 2.5 10.8394V5.16065ZM1 10.8394C1 11.5571 1.38457 12.2198 2.00772 12.5758L7.00772 15.433C7.62259 15.7843 8.37741 15.7843 8.99228 15.433L13.9923 12.5758C14.6154 12.2198 15 11.5571 15 10.8394V5.16065C15 4.44293 14.6154 3.78025 13.9923 3.42416L8.99228 0.567019C8.37741 0.215667 7.62259 0.215667 7.00772 0.567019L2.00772 3.42416C1.38457 3.78025 1 4.44293 1 5.16065V10.8394Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#ffffff"
                          d="M8 0.270645L1.18226 11.75H14.8177L8 0.270645ZM3.81774 10.25L8 3.20812L12.1823 10.25H3.81774Z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-aws"
                    href="https://aws.amazon.com/"
                  >
                    AWS
                    <i className="fa-brands fa-aws"></i>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  <a
                    className="techBadge btn btn-uikit"
                    href="https://getuikit.com/"
                  >
                    UIKit
                    <i className="fa-brands fa-uikit"></i>
                  </a>
                </p>
                <p className="text-gray-800 py-1">
                  <a
                    className="techBadge btn btn-material"
                    href="https://mui.com/material-ui/"
                  >
                    Material UI
                    <svg
                      width="20"
                      height="20"
                      fill="#000000"
                      viewBox="0 0 24 24"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <title>Material-UI icon</title>
                      <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center my-div shadow-lg bg-white rounded-xl my-10 dark:bg-white  flex-1">
              <h4>UX Tools</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-0.5">
                  <p className="text-gray-800 py-1">
                    {" "}
                    <a
                      className="techBadge btn btn-figma"
                      href="https://www.figma.com/"
                    >
                      Figma
                      <i className="fa-brands fa-figma"></i>
                    </a>
                  </p>
                </div>
                <div class="p-0.5">
                  <p className="text-gray-800 py-1">
                    {" "}
                    <a
                      className="techBadge btn btn-sketch"
                      href="https://www.sketch.com/"
                    >
                      Sketch
                      <i className="fa-brands fa-sketch"></i>
                    </a>
                  </p>
                </div>

                <p className="text-gray-800 py-1">
                  {" "}
                  <a
                    className="techBadge btn btn-adobe"
                    href="https://helpx.adobe.com/xd/get-started.html"
                  >
                    Adobe XD
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <path
                        fill="#ffffff"
                        d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm3.24 18.76a3.623 3.623 0 0 1-3.62 3.64H4.63c-2 0-3.63-1.63-3.63-3.63V4.93c0-2 1.63-3.63 3.63-3.63h14.73a3.63 3.63 0 0 1 3.63 3.63v14.13zm-13.5-7.81l2.8 5.38c.05.08.02.16-.06.16h-1.74c-.11 0-.16-.03-.21-.13-.64-1.32-1.29-2.64-1.96-4.06H8.3c-.6 1.34-1.26 2.75-1.9 4.07-.05.08-.1.11-.18.11H4.57c-.1 0-.11-.08-.06-.14l2.74-5.22L4.6 6.14c-.06-.08 0-.14.06-.14h1.72c.1 0 .14.02.18.11.63 1.32 1.27 2.68 1.87 4.01h.02c.58-1.32 1.22-2.69 1.84-4 .05-.08.08-.13.18-.13h1.61c.08 0 .11.06.06.14l-2.65 5.12zm3.29 1.63c0-2.33 1.55-4.15 4.01-4.15.21 0 .32 0 .52.02V6.1c0-.06.05-.1.1-.1h1.58c.08 0 .1.03.1.08v9.18c0 .27 0 .61.05.98 0 .06-.02.08-.08.11-.84.4-1.72.58-2.56.58-2.17.01-3.72-1.33-3.72-4.05zm4.53-2.56c-.14-.06-.34-.1-.58-.1-1.26 0-2.14.97-2.14 2.58 0 1.84.9 2.58 2.03 2.58.24 0 .5-.03.69-.11v-4.95z"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div name="projects">
            <nav className="py-10 flex justify-between dark:text-white">
              <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
              <ul className="flex items-center">
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-2"
                    duration={100}
                    onClick={scrollTotheTop}
                    href="#"
                  >
                    Back to the Top
                  </a>
                </li>
              </ul>
            </nav>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Versatile designer and developer on a mission. From remote
              collaborations with agencies to startup consultations, I&apos;ve
              crafted digital products with talented collaborators.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Offering a spectrum of services—brand design, programming, and
              teaching—to bring innovation to both business and consumer spaces
            </p>
          </div>
          <div class="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div class="flex-1">
        <div class="flip-card mx-auto w-96 h-96 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div class="flip-card-inner">
                <div class="flip-card-front flex flex-col justify-center items-center bg-gray-200">
                <img src="web1.png" className="object-cover w-full h-full"  alt="Avatar"/>
                </div>
                <div class="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white rotate-180">
                <p className={`pl-10 pr-10 py-2 `}>
                Spearheaded a transformative company-wide development initiative
                in Angular and React. Engineered top-tier web application for
                over ten different trading and asset allocation teams,
                meticulously curating layouts, themes, and components to blend
                user-centric design with cutting-edge functionality 
              </p>
              <p className={`pl-10 pr-10 `}>
                <b>Technologies </b>
              </p>
              <p className={`pl-10 pr-10 py-1 `}>
                Angular, React, HTML5, CSS3, JavaScript/Typescript, Figma,D3.js,
                Bootstrap, SCSS (SASS), Node.js, Ag-Grid, MongoDB, Jasmine,
                Karma
              </p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-1">
        <div class="flip-card mx-auto w-96 h-96 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div class="flip-card-inner">
                <div class="flip-card-front flex flex-col justify-center items-center bg-gray-200">
                <img src="web2.png" className="object-cover w-full h-full"  alt="Avatar"/>

                </div>
                <div class="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white rotate-180">
                <p className={`pl-10 pr-10 py-2 `} >
              Led the design and development of Mellon.com&apos;s public-facing website using React, 
              implementing a responsive and dynamic user interface with a focus on performance optimization and scalability. 
              Utilized React to deliver a seamless browsing 
              experience across various devices. Successfully deployed and maintained 
              the website, continuously improving its performance and user engagement metrics
              </p>
              <p className={`pl-10 pr-10 `}>
                <b>Technologies </b>
              </p>
              <p  className={`pl-10 pr-10 py-1 `}>
                React, HTML5, CSS3, JavaScript, Figma,
                Bootstrap, SCSS (SASS),  Jasmine,
                Karma
              </p>
                </div>
            </div>
        </div>
    </div>
            <div class="flex-1">
        <div class="flip-card mx-auto w-96 h-96 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div class="flip-card-inner">
                <div class="flip-card-front flex flex-col justify-center items-center bg-gray-200">
                <img src="web3.png" className="object-cover w-full h-full"  alt="Avatar"/>

                </div>
                <div class="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white rotate-180">
                <p className={`pl-10 pr-10 py-2 `}>
               Led a
                comprehensive upgrade project, transitioning from KnockoutJS to
                Angular 3/4/5 for a multi-asset trading system orchestrating
                over 10 million monthly trades. Engineered a highly
                sophisticated portfolio management application,enhancing the
                optimization of cash flow visibility, streamlining trade
                execution, and improving overall efficiency in asset management
              </p>
              <p className={`pl-10 pr-10 `}>
                <b>Technologies </b>
              </p>
              <p className={`pl-10 pr-10 py-1 `}>
                Angular, React, HTML5, CSS3, JavaScript/Typescript, Figma,D3.js,
                Bootstrap, SCSS (SASS), Node.js, Ag-Grid, MongoDB, Jasmine,
                Karma
              </p>
                </div>
            </div>
        </div>
    </div>
    <div class="flex-1">
        <div class="flip-card mx-auto w-96 h-96 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div class="flip-card-inner">
                <div class="flip-card-front flex flex-col justify-center items-center bg-gray-200">
                <img src="web4.png" className="object-cover w-full h-full"  alt="Avatar"/>

                </div>
                <div class="flip-card-back flex flex-col justify-center items-center bg-blue-500 text-white rotate-180">
                <p className={`pl-10 pr-10 py-2 `}>
              Collaborated with an e-learning platform, contributing UI expertise to create
engaging and user-friendly interfaces for online courses 

Utilized Tailwind and SCSS (SASS) for efficient styling, ensuring a visually
appealing and cohesive design across various screens.
              </p>
              <p className={`pl-10 pr-10 `}>
                <b>Technologies </b>
              </p>
              <p className={`pl-10 pr-10 py-1 `}>
              React, HTML5, CSS3, JavaScript/Typescript, Bootstrap,
Tailwind, SCSS (SASS), Figma
              </p>
                </div>
            </div>
        </div>
    </div>
          </div>
        </section>
        <nav className="py-10 flex justify-between dark:text-white">
          <h3 className="text-3xl py-1 dark:text-white ">TimeLine</h3>
          <ul className="flex items-center">
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-2"
                duration={100}
                onClick={scrollTotheTop}
                href="#"
              >
                Back to the Top
              </a>
            </li>
          </ul>
        </nav>
        <div className="experience" name="timeLine">
          <VerticalTimeline animate={animateVertical} lineColor="#3e497a">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2020 - Present"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                Sr UI Developer - Mellon Capital Management
              </h4>
              <h3 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h3>
              <p>
                Initiated a company-wide development project in Angular and
                React, designing a unified application layout. Oversaw the
                complete development, designing layouts, themes, business
                workflows, components, controls, charts, and data grids across
                more than ten applications, enhancing the application used by
                portfolio managers for trade management and reporting.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2021"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                Freelance Developer
              </h4>
              <h3 className="vertical-timeline-element-subtitle">
                San Francisco, CA & Chennai,India
              </h3>
              <p>
                Designed and developed two websites for an AI startup in San
                Francisco and an online e-learning platform in Chennai.Engaged
                in impactful projects across diverse industry landscapes, I
                contributed my expertise to elevate user experiences and
                interface functionalities.
              </p>
              <p>
                <a href="https://www.pantechsolutions.net">Pantech Solutions</a>
                , I played a key role in refining the UI of their e-learning
                platform. Collaborating with the team, I ensured the creation of
                engaging and user-friendly interfaces for online courses.
              </p>
              <p>
                Simultaneously, in the dynamic environment of an AI startup
                based in the Bay Area, I contributed to crafting seamless user
                interfaces that showcased cutting-edge AI capabilities. This
                dual experience allowed me to navigate varied challenges,
                applying my skills to enhance digital interactions both in
                established platforms and innovative startups in the tech hub of
                the Bay Area.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2020"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                UI Developer - Mellon Capital Management
              </h4>
              <h3 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h3>
              <p>
                Led a comprehensive upgrade project, transitioning from
                KnockoutJS to Angular 3/4/5 for a multi-asset trading system
                handling over 10M in monthly trades for diverse assets like
                stocks, bonds, and commodities. Spearheaded the overhaul,
                ensuring a seamless transition and improved functionality,
                enabling portfolio managers to efficiently view cash flows, set
                targets, execute trades, and manage diverse assets
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2014 - 2016"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                NJIT , Newark , NJ
              </h4>

              <h3 className="vertical-timeline-element-subtitle">
                Masters&apos;s Degree
              </h3>

              <p>Engineering Management </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2014 - 2016"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h4 className="vertical-timeline-element-title">
                NJIT , Newark , NJ
              </h4>

              <h3 className="vertical-timeline-element-subtitle">
                Masters&apos;s Degree
              </h3>

              <p> Computer Engineering</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </main>
      <div className="footer">
        <div className="socialMedia">
          <LinkedInIcon onClick={handleLinkedInClick} />
          <EmailIcon onClick={handleMailClick} />
        </div>
      </div>
    </div>
  );
}
