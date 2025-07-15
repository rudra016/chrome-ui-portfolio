"use client";
import React from "react";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type TabType =
  | "ai"
  | "aboutMe"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contacts"
  | "hobbies";

interface BaseSearchResultItem {
  id: number;
  type: string;
  icon: string;
  title: string;
  subtitle?: string;
  url?: string;
  mainHeading?: string;
  description?: string;
  items?: string[];
  skills?: string[];
  techStack?: string[];
  contacts?: {
    type: string;
    value: string;
    icon: string;
  }[];
  location?: string;
  position?: string;
  company?: string;
  institution?: string;
  achievements?: string[];
  projects?: string[];
  platforms?: string[];
  duration?: string;
}

interface SearchResultsProps {
  results: {
    [key in TabType]?: BaseSearchResultItem[];
  };
  activeTab: TabType;
  aiSummary?: string;
  aiLoading?: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  activeTab,
  aiSummary,
  aiLoading,
}) => {
  if (activeTab === "ai") {
    return (
      <div className="max-w-4xl py-4 pr-6 pl-[12%]">
        {aiLoading ? (
          <div className="flex gap-1 items-center justify-center h-32">
            <span className="flex gap-1 animate-pulse text-lg text-blue-400"><Image src="/gemini.svg" width={20} height={20} alt="gemini icon" /> searching about you...</span>
          </div>
        ) : (
          <div className="text-lg text-gray-200 whitespace-pre-line">{aiSummary}</div>
        )}
      </div>
    );
  }

  const currentResults = results[activeTab] || [];

  const renderContent = (result: BaseSearchResultItem) => {
    switch (result.type) {
      case "category":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="mb-2 text-lg font-medium text-gray-200">
              {result.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.items?.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="rounded-full bg-gray-700 px-3 py-1 text-sm text-gray-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );

      case "contact":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="text-sm text-gray-300">{result.title}</div>
                </div>
              </div>
              <button className="rounded-full p-1 transition-colors hover:bg-gray-700">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {result.contacts && result.contacts.length > 0 && (
              <div className="mt-4 space-y-2">
                {result.contacts.map((contact, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Image
                      src={contact.icon}
                      alt={`${contact.type} icon`}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                    {contact.type === "email" ? (
                      <a
                        href={`mailto:${contact.value}`}
                        className="text-blue-400 hover:underline"
                      >
                        {contact.value}
                      </a>
                    ) : contact.type === "phone" ? (
                      <a
                        href={`tel:${contact.value}`}
                        className="text-blue-400 hover:underline"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-blue-400 hover:underline">
                        {contact.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        );

      case "activity":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-lg bg-gray-800 p-4"
          >
            <h3 className="mb-1 text-lg font-medium text-blue-400">
              {result.title}
            </h3>
            <p className="mb-2 text-gray-300">{result.description}</p>
            {result.projects && (
              <div className="mt-2">
                <h4 className="mb-1 text-sm font-medium text-gray-400">
                  Projects:
                </h4>
                <ul className="list-inside list-disc text-sm text-gray-300">
                  {result.projects.map((project, idx) => (
                    <li key={idx}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {result.icon && (
                  <img
                    src={result.icon}
                    alt={`${result.type} icon`}
                    className="h-6 w-6 rounded-sm"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjNjY2NjY2Ii8+Cjx0ZXh0IHg9IjEyIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo=";
                    }}
                  />
                )}
                <div>
                  <div className="text-sm text-gray-300">{result.title}</div>
                  {result.subtitle && (
                    <div className="text-xs text-gray-500">
                      {result.subtitle}
                    </div>
                  )}
                </div>
              </div>
              <button className="rounded-full p-1 transition-colors hover:bg-gray-700">
                <MoreVertical className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            {result.url && (
              <div className="mb-1 text-sm text-gray-400">
                <Link href={result.url}>{result.url}</Link>
              </div>
            )}

            <h3 className="mb-1 cursor-pointer text-xl text-blue-400 hover:underline">
              {result.mainHeading}
            </h3>

            {(result.location ||
              result.position ||
              result.company ||
              result.duration) && (
              <div className="mb-2 text-sm text-gray-400">
                {[
                  result.duration,
                  result.location,
                  result.position,
                  result.company,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </div>
            )}

            <p className="text-sm leading-relaxed whitespace-pre-line text-gray-300">
              {result.description}
            </p>

            {result.techStack && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-2">
                  {result.techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        );
    }
  };

  return (
    <div className="max-w-4xl py-4 pr-6 pl-[12%]">
      {currentResults.map((result, idx) => (
        <motion.div
          key={`${activeTab}-${result.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          {renderContent(result)}
        </motion.div>
      ))}
    </div>
  );
};

export default SearchResults;
