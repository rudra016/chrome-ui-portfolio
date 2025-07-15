"use client";
import { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import GoogleSubheader, { TabType } from "@/components/GoogleSubheader";
import SearchResults from "@/components/SearchResults";
import { dummyData } from "../data/dummy";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('aboutMe');
  const [aiSummary, setAiSummary] = useState<string>("");
  const [aiLoading, setAiLoading] = useState(false);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab === "ai") {
      setAiLoading(true);
      setAiSummary("");
      fetch("/api/ai-summary", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setAiSummary(data.summary))
        .catch(() => setAiSummary("Error generating AI summary."))
        .finally(() => setAiLoading(false));
    }
  }, [activeTab]);

  return (
    <main className="min-h-screen text-black">
      <Header />
      <GoogleSubheader activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="bg-neutral-800 min-h-screen">
        <SearchResults
          results={dummyData}
          activeTab={activeTab}
          aiSummary={activeTab === "ai" ? aiSummary : undefined}
          aiLoading={activeTab === "ai" ? aiLoading : undefined}
        />
      </div>
    </main>
  );
}
