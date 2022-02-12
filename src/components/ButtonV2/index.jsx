import { React, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Theme";

const ButtonV2 = ({ onClick, title, animate }) => {
  const { theme } = useContext(ThemeContext);
  const [ themeStyle, setThemeStyle] = useState("");
  let animation;

  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }


  useEffect(()=>{
    let darkAnimation =
      theme === "dark"
        ? "transition ease-in-out duration-150 bg-accent1 hover:bg-accent1"
        : "transition ease-in-out duration-150 bg-accent1 hover:bg-accent1";
    setThemeStyle(darkAnimation);
  },[theme])

  let textAnimation = `text-background`
  switch (animate) {
    case true:
      animation = `${textAnimation} transition ease-in-out duration-150 shadow-lg hover:shadow-md ${themeStyle} border border-foreground-25 hover:border-foreground`;
      break;
    case false:
      animation = `bg-foreground text-foreground-accent border border-foreground-25`;
      break;
    default:
      animation = `transition ease-in-out duration-150 shadow-lg hover:shadow-md ${themeStyle} border border-foreground-25 hover:border-foreground`;
      break;
  }
  return (
    <>
    <style>
      {
        `span.ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          ${theme === "dark"?`animation: ripple 600ms linear`:`animation: ripple 600ms linear`};
          ${theme === "dark"?`background-color: rgba(255, 255, 255, 0.7)`:`background-color: rgba(255, 255, 255, 0.7)`};
          z-index:10000;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }`
      }
    </style>
    <button
      className={`w-full h-full relative overflow-hidden flex flex-col justify-center align-center rounded ${animation}`}
      onClick={(e)=>{createRipple(e);onClick(e)}}
    >
      <div className={`font-mulish h-min font-extrabold text-xl m-auto`}>
        {title}
      </div>
    </button>
    </>
  );
};

export default ButtonV2;
