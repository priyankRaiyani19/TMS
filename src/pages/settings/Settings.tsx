"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import CTAButton from "../../components/common/CTAButton.tsx";
import DynamicDropdown from "./components/DynamicDropdown.tsx";
import Switch from "react-switch";
import timeFormatOptions from "../../data/settings/timeFormatOptions.ts";
import languageOptions from "../../data/settings/languages.ts";
import Navbar from "../../components/common/Navbar.tsx";

// Validation Schema
const generalSchema = z.object({
    language: z.string().nonempty("Language is required"),
    timezone: z.string().nonempty("Timezone is required"),
    timeFormat: z.enum(["24 Hours", "12 Hours"]),
});

const notificationSchema = z.object({
    message: z.boolean(),
    taskUpdate: z.boolean(),
    taskDeadline: z.boolean(),
    mentorHelp: z.boolean(),
});

type GeneralFormData = z.infer<typeof generalSchema>;
type NotificationFormData = z.infer<typeof notificationSchema>;

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState<"general" | "notification">(
        "general"
    );

    // General Form
    const { control: generalControl, handleSubmit: handleGeneralSubmit } =
        useForm<GeneralFormData>({
            resolver: zodResolver(generalSchema),
            defaultValues: {
                language: "English (Default)",
                timezone: "English (Default)",
                timeFormat: "24 Hours",
            },
        });

    // Notification Form
    const {
        control: notificationControl,
        handleSubmit: handleNotificationSubmit,
    } = useForm<NotificationFormData>({
        resolver: zodResolver(notificationSchema),
        defaultValues: {
            message: true,
            taskUpdate: false,
            taskDeadline: true,
            mentorHelp: false,
        },
    });

    // Form Handlers
    const onGeneralSubmit = (data: GeneralFormData) =>
        console.log("General Settings:", data);
    const onNotificationSubmit = (data: NotificationFormData) =>
        console.log("Notification Settings:", data);

    return (
        <div className={`max-h-[100vh] overflow-y-auto `}>
            <Navbar name={"Settings"} isActive={false} />
            <div className={`md:p-[2rem]  max-h-[90vh]`}>
                <div className="w-full p-[2rem]  mx-auto bg-white ">
                    {/* Tabs */}
                    <div className={`w-full border-b-[1px] border-b-secondary-300`}>
                        <div className="flex w-[13.5rem] ">
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
                                        ? "text-secondary-500  border-b-2 border-blue-600 font-medium"
                                        : "text-gray-400"
                                }`}
                                onClick={() => setActiveTab("notification")}
                            >
                                Notification
                            </button>
                        </div>
                    </div>

                    {/* General Settings Form */}
                    {activeTab === "general" && (
                        <form
                            onSubmit={handleGeneralSubmit(onGeneralSubmit)}
                            className="space-y-4 mt-4  flex flex-col "
                        >
                            <DynamicDropdown title={"Language"} options={languageOptions} />
                            <DynamicDropdown
                                title={"Timezone"}
                                options={timeFormatOptions.timeFormats}
                            />

                            <div className={`p-4 flex flex-col gap-5`}>
                                <label className="block text-[0.875rem] font-semibold mb-1">
                                    Time Format
                                </label>
                                <Controller
                                    name="timeFormat"
                                    control={generalControl}
                                    render={({ field }) => (
                                        <div className="flex gap-[2rem]">
                                            {["24 Hours", "12 Hours"].map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => field.onChange(option)}
                                                    className={`flex items-center justify-between px-4 py-2 border rounded-lg text-[0.75rem] font-medium text-secondary-500 w-full lg:w-[11.5rem] transition-colors ${
                                                        field.value === option
                                                            ? "border-blue-500  "
                                                            : "border-gray-300  bg-white"
                                                    }`}
                                                >
                                                    {option}
                                                    <div
                                                        className={`w-5 h-5 flex items-center font-medium text-secondary-500 justify-center border-2 rounded-full ${
                                                            field.value === option
                                                                ? "border-blue-500 "
                                                                : "border-gray-300 "
                                                        }`}
                                                    >
                                                        {field.value === option && (
                                                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                                                        )}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                />
                            </div>

                            <button type={"submit"} className={`lg:w-[14rem] w-full p-4`}>
                                <CTAButton text="Save Changes" />
                            </button>
                        </form>
                    )}

                    {/* Notification Settings Form */}

                    {activeTab === "notification" && (
                        <form
                            onSubmit={handleNotificationSubmit(onNotificationSubmit)}
                            className="space-y-4 mt-4 h-full flex flex-col justify-a"
                        >
                            {[
                                { name: "message", label: "Message" },
                                { name: "taskUpdate", label: "Task Update" },
                                { name: "taskDeadline", label: "Task Deadline" },
                                { name: "mentorHelp", label: "Mentor Help" },
                            ].map((field) => (
                                <div
                                    key={field.name}
                                    className="  flex items-center gap-3 text-sm  p-3 rounded-lg h-full"
                                >
                                    <Controller
                                        name={field.name as keyof NotificationFormData}
                                        control={notificationControl}
                                        render={({ field: { value, onChange } }) => (
                                            <Switch
                                                onChange={onChange}
                                                checked={value}
                                                onColor="#2563EB"
                                                offColor="#d1d5db"
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                height={20}
                                                width={40}
                                                handleDiameter={18}
                                            />
                                        )}
                                    />
                                    <span className="text-secondary-500 font-semibold ">
                    {field.label}
                  </span>{" "}
                                    {/* Label after switch */}
                                </div>
                            ))}
                            <button type={"submit"} className={`lg:w-[14rem] w-full`}>
                                <CTAButton text="Save Changes" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
