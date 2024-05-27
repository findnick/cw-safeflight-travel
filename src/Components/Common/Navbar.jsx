import * as React from "react";
import { useEffect, useState } from "react";
import logo from "../../assets/img/ST-Logo.jpeg";
import nav_1 from "../../assets/img/nav-1.png";
import nav_2 from "../../assets/img/nav-2.png";
import nav_3 from "../../assets/img/nav-3.png";
import Button2 from "./Button2";
import world from "../../assets/img/tabler_world.png";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);
  const btnMeta = auth
    ? {
        href: "#",
        onClick: () => {
          localStorage.clear();
          setAuth(false);
        },
        text: "Log Out",
      }
    : {
        href: "/register",
        onClick: "",
        text: "Join Us",
      };
  const linkList = [
    {
      img: nav_1,
      title: "flight",
      url: "/flight",
    },
    {
      img: nav_2,
      title: "hotel",
      url: "/hotel",
    },
    {
      img: nav_3,
      title: "car-rental",
      url: "/car-rental",
    },
  ];
  return (
    <nav className="p-5 flex items-center justify-between break-normal">
      <ul className="bg-inherit md:bg-transparent z-[1] md:z-auto absolute md:static w-full left-0 md:w-auto md:flex md:items-center mb-4 md:mb-0 py-4 md:py-0 opacity-0 md:opacity-100 top-[-400px] transition-all ease in duration-200">
        {linkList.map((link, index) => {
          return (
            <li key={index} className="mx-4 my-1 md:my-0">
              <a href={link.url} className="text-lg duration-100">
                <img src={link.img} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex mx-auto">
        <a href="/">
          <img src={logo} alt="" className="h-10 inline" />
        </a>
        <button
          className="md:hidden nav-button flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          name="menu"
          onClick={(e) => {
            console.log(e.currentTarget.name);
            let list = document.querySelector("ul");

            e.currentTarget.name === "menu"
              ? ((e.currentTarget.name = "close"),
                list.classList.add("top-[80px]"),
                list.classList.add("opacity-100"))
              : ((e.currentTarget.name = "menu"),
                list.classList.remove("top-[80px]"),
                list.classList.remove("opacity-100"));
          }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="nav-buttons flex flex-row gap-4 items-center">
        <a href="#packages" className="font-semibold text-sm">
          Login
        </a>
        <Button2 bg="var(--primary-500)">Sign up</Button2>
        <a href="">
          <img src={world} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
