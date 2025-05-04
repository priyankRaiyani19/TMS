interface TimeFormat {
    id: string;
    name: string;
    [key: string]: string | string[] | undefined;
}

const timeFormatOptions: TimeFormat[] = [
        { id: "1", name: "English (Default)" },
        { id: "2", name: "24-hour format" },
        { id: "3", name: "12-hour format with seconds" },
        { id: "4", name: "24-hour format with seconds" },
        { id: "5", name: "ISO 8601 format" },
        { id: "6", name: "Unix timestamp" },
        { id: "7", name: "Short 12-hour format" },
        { id: "8", name: "Short 24-hour format" },
        { id: "9", name: "Full date and time (12-hour)" },
        { id: "10", name: "Full date and time (24-hour)" }
    ]

export default timeFormatOptions;