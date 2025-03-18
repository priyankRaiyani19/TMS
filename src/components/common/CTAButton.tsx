import * as React from "react";

type TaskCardProps = {
    text: string;
};

const CTAButton: React.FC<TaskCardProps> = ({ text }) => {
    return (
        <div className={`flex justify-center`}>
            <button className={`bg-primary-500 text-white text-[0.875rem] py-[0.75rem] px-4 w-full   rounded-lg`}>
                {text}
            </button>
        </div>
    );
};

export default CTAButton;