"use client";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { LuLightbulb, LuMoon } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";

type Props = {};

function DarkButton({}: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleButton = () => {
    if (resolvedTheme === "light") setTheme("dark");
    if (resolvedTheme === "dark") setTheme("light");
  };
  return (
    <div className=" ">
      <div className="flex items-center gap-2">
        <p> {resolvedTheme === "light" ? "DARK" : "LIGHT"} </p>
        <div>
          <button onClick={toggleButton} className="text-2xl flex items-center">
            {resolvedTheme === "light" ? <MdDarkMode /> : <CiLight />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DarkButton;
