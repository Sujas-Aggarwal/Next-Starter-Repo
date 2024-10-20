import ThemeToggler from "@/components/ThemeToggler";
import React from "react";

function App() {
  return (
    <div className="text-4xl font-bold text-center w-full h-screen flex flex-col-reverse  justify-center items-center text-[--primary-text] ">
      <p className="text-center max-w-[25ch]">
        Basic Template with Tailwind CSS and Dark Mode
      </p>
      <ThemeToggler/>
    </div>
  );
}

export default App;
