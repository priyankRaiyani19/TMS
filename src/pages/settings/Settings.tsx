"use client";
import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import GeneralSettings, { GeneralFormData } from "./components/GeneralSettings.tsx";
import {
    NotificationFormData,
  NotificationSettings
} from './components/NotificationSettings .tsx';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState<"general" | "notification">(
      "general"
    );

    // Form Handlers
    const onGeneralSubmit = (data: GeneralFormData) =>
      console.log("General Settings:", data);

    const onNotificationSubmit = (data: NotificationFormData) =>
      console.log("Notification Settings:", data);

    return (
      <div className={`max-h-[100vh] overflow-y-auto`}>
          <Navbar name={"Settings"} isActive={false} />
          <div className={`md:p-[2rem] max-h-[90vh]`}>
              <div className="w-full p-[2rem] mx-auto bg-white">
                  {/* Tabs */}
                  <div className={`w-full border-b-[1px] border-b-secondary-300`}>
                      <div className="flex w-[13.5rem]">
                          <button
                            className={`flex-1 py-2 text-[0.875rem] ${
                              activeTab === "general"
                                ? "text-secondary-500 border-b-2 border-blue-600 font-medium"
                                : "text-gray-400"
                            }`}
                            onClick={() => setActiveTab("general")}
                          >
                              General
                          </button>
                          <button
                            className={`flex-1 py-2 text-[0.875rem] ${
                              activeTab === "notification"
                                ? "text-secondary-500 border-b-2 border-blue-600 font-medium"
                                : "text-gray-400"
                            }`}
                            onClick={() => setActiveTab("notification")}
                          >
                              Notification
                          </button>
                      </div>
                  </div>

                  {/* Settings Forms */}
                  {activeTab === "general" && (
                    <GeneralSettings onSubmit={onGeneralSubmit} />
                  )}

                  {activeTab === "notification" && (
                    <NotificationSettings onSubmit={onNotificationSubmit} />
                  )}
              </div>
          </div>
      </div>
    );
};

export default SettingsPage;