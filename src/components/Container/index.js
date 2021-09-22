import { React } from "react";

const Container = ({ children }) => {
  return (
    <div
      className={`flex flex-row justify-center w-full min-h-screen bg-background text-foreground-accent font-mulish tracking-wide font-extrabold text-3xl`}
    >
      <div className={`w-screen max:w-1440px`}>{children}</div>
    </div>
  );
};

export default Container;
