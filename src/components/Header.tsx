import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Star,
  MoreVertical,
  X,
  Plus,
  Info,
  Grid3X3,
  User,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { dummyData } from "../data/dummy";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-gray-800 text-white">
      <div className="flex items-center border-b border-gray-700 bg-gray-800">
        <div className="flex items-center space-x-2 px-4 py-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <div className="flex flex-1 items-end pl-2">
          <div className="relative flex max-w-xs min-w-0 items-center space-x-2 rounded-tl-lg rounded-tr-lg border-t border-r border-l border-gray-800 bg-gray-700 px-4 py-2">
            <div className="absolute top-0 left-0 -ml-2 h-2 w-2 overflow-hidden">
              <div className="h-4 w-4 rounded-br-full bg-gray-800"></div>
            </div>
            <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
              <Image
                src={dummyData.images.favicon}
                alt="Portfolio"
                width={12}
                height={12}
                className="h-3 w-3"
              />
            </div>
            <span className="flex-1 truncate text-sm text-gray-300">
              My Portfolio
            </span>
            <button className="ml-2 flex-shrink-0 rounded-full p-1 hover:bg-gray-600">
              <X size={12} className="text-gray-300" />
            </button>
            <div className="absolute top-0 right-0 -mr-2 h-2 w-2 overflow-hidden">
              <div className="h-4 w-4 rounded-bl-full bg-gray-800"></div>
            </div>
          </div>
          <button className="cursor-pointer px-3 py-2 text-gray-300">
            <Plus size={16} />
          </button>
        </div>

        <div className="px-2">
          <button className="rounded-md bg-gray-700 p-1">
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3 bg-gray-800 px-2 py-2">
        <div className="flex items-center space-x-1">
          <button className="rounded-full p-2 hover:bg-gray-700">
            <ArrowLeft size={16} className="cursor-pointer text-gray-400" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-700">
            <ArrowRight size={16} className="cursor-pointer text-gray-400" />
          </button>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full p-2 hover:bg-gray-700"
          >
            <RotateCw size={16} className="cursor-pointer text-gray-400" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-between rounded-full bg-gray-700 px-4 py-2">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-gray-400" />
            <span className="text-sm text-gray-300">
              <span className="font-bold">localhost:</span>3000
            </span>
          </div>
          <IoStarOutline
            onClick={() => window.open("https://github.com/rudra016", "_blank")}
            size={16}
            className="cursor-pointer text-gray-400"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button className="rounded-full p-2 hover:bg-gray-700">
            <Image
              src={dummyData.images.extension}
              alt="YouTube"
              width={18}
              height={18}
            />
          </button>
          <span className="mb-1 font-bold text-gray-500">|</span>
          <button className="rounded-full p-2 hover:bg-gray-700">
            <User size={16} className="text-gray-400" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-700">
            <MoreVertical size={16} className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-1 border-gray-700 bg-gray-800 px-4 py-1">
        <button className="flex items-center space-x-2 rounded-2xl px-3 py-1 text-sm hover:bg-gray-700">
          <Grid3X3 size={14} className="text-gray-400" />
          <span className="text-gray-300">Apps</span>
        </button>
        <span className="mb-1 font-bold text-gray-500">|</span>

        <a
          href="https://github.com/rudra016"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center space-x-1 rounded-2xl px-2 py-1 text-sm hover:bg-gray-700"
        >
          <Image src="/github.svg" alt="Github" width={18} height={18} />
          <span className="text-gray-300">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/rudra-kumar-897264227/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center space-x-1 rounded-2xl px-2 py-1 text-sm hover:bg-gray-700"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="Linkedin"
            width={18}
            height={18}
          />
          <span className="text-gray-300">Linkedin</span>
        </a>

        <a
          href="mailto:rudra619kumar@gmail.com"
          className="flex cursor-pointer items-center space-x-1 rounded-2xl px-2 py-1 text-sm hover:bg-gray-700"
        >
          <Image src="/gmail.svg" alt="Gmail" width={18} height={18} />
          <span className="text-gray-300">Gmail</span>
        </a>

        <a
          href="https://leetcode.com/whateverrudra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center space-x-1 rounded-2xl px-2 py-1 text-sm hover:bg-gray-700"
        >
          <Image
            src="https://assets.leetcode.com/static_assets/public/icons/favicon.ico"
            alt="Leetcode"
            width={18}
            height={18}
          />
          <span className="text-gray-300">Leetcode</span>
        </a>
      </div>
    </div>
  );
};
