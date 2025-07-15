import React, { useState } from "react";
import { Search, Mic, X, ChevronDown, Bell, Grid3X3, Mail } from "lucide-react";
import Image from "next/image";
import { dummyData } from "../data/dummy";
import { motion } from "framer-motion";

export type TabType =
  | "ai"
  | "aboutMe"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "hobbies"
  | "contacts";

interface GoogleSubheaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const GoogleSubheader: React.FC<GoogleSubheaderProps> = ({
  activeTab,
  onTabChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  

  return (
    <div className="bg-neutral-800 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-normal text-white">
          <Image src="/google.svg" alt="Google" width={100} height={100} />
        </div>

        <div className="mr-8 ml-[-10%] max-w-4xl flex-1"> 
          <div className="relative flex items-center rounded-full bg-neutral-700 px-4 py-3 transition-colors hover:bg-neutral-600">
            <input
              type="text"
              value="rudra619kumar@gmail.com"
              className="flex-1 bg-transparent text-base text-white placeholder-neutral-400 outline-none"
              placeholder="Search"
              readOnly
            />
            <div className="ml-4 flex items-center space-x-3">
              <button className="rounded-full p-1 transition-colors hover:bg-neutral-400">
                <X className="h-5 w-5 text-gray-300" />
              </button>
              <span className="mb-1 font-bold text-gray-500">|</span>
              <button className="rounded-full p-1 transition-colors hover:bg-neutral-400">
                <Mic className="h-5 w-5 text-gray-300" />
              </button>
              <button className="rounded-full p-1 transition-colors hover:bg-neutral-400">
                <Search className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="ml-4 flex items-center space-x-4">
          <button className="rounded-full p-2 transition-colors hover:bg-gray-700">
            <Bell className="h-5 w-5 text-gray-300" />
          </button>
          <button className="rounded-full p-2 transition-colors hover:bg-gray-700">
            <Grid3X3 className="h-5 w-5 text-gray-300" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium">
            <Image
              src={dummyData.images.favicon}
              alt="Google"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-gray-700 px-[12%]">
        <div className="flex items-center space-x-8">
          <motion.button
            onClick={() => onTabChange("ai")}
            className={`py-3 text-sm ${activeTab === "ai" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            AI Mode
          </motion.button>
          <motion.button
            onClick={() => onTabChange("aboutMe")}
            className={`py-3 text-sm ${activeTab === "aboutMe" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.button>
          <motion.button
            onClick={() => onTabChange("experience")}
            className={`py-3 text-sm ${activeTab === "experience" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Experience
          </motion.button>
          <motion.button
            onClick={() => onTabChange("projects")}
            className={`py-3 text-sm ${activeTab === "projects" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={() => onTabChange("skills")}
            className={`py-3 text-sm ${activeTab === "skills" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Skills
          </motion.button>
          <motion.button
            onClick={() => onTabChange("education")}
            className={`py-3 text-sm ${activeTab === "education" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Education
          </motion.button>
          <motion.button
            onClick={() => onTabChange("hobbies")}
            className={`py-3 text-sm ${activeTab === "hobbies" ? "cursor-pointer border-b-2 border-blue-400 font-medium text-white" : "cursor-pointer text-gray-300 hover:text-white"} transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            Hobbies
          </motion.button>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex cursor-pointer items-center space-x-1 py-3 text-sm text-gray-300 transition-colors hover:text-white"
            >
              <span>More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 z-50 mt-2 w-48 rounded-lg bg-gray-700 shadow-lg"
              >
                <button
                  onClick={() => {
                    onTabChange("contacts");
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-[100%] items-center space-x-3 px-3 py-2 text-left text-sm text-gray-300 cursor-pointer "
                >
                  <Mail className="h-4 w-4" />
                  <span>Contact Me</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* <button className="py-3 text-sm text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
          <span>Tools</span>
          <ChevronDown className="w-4 h-4" />
        </button> */}
      </div>
    </div>
  );
};

export default GoogleSubheader;
