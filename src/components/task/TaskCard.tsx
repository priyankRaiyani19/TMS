import React from 'react';
import { Calendar, Clock, More } from 'iconsax-react';

interface TaskCardProps {
    title: string;
    description: string;
    date: string;
    time: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'in-progress' | 'completed';
    assignee?: {
        name: string;
        avatar: string;
    };
}

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    date,
    time,
    priority,
    status,
    assignee
}) => {
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'bg-red-100 text-red-600';
            case 'medium':
                return 'bg-yellow-100 text-yellow-600';
            case 'low':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-600';
            case 'in-progress':
                return 'bg-blue-100 text-blue-600';
            case 'pending':
                return 'bg-yellow-100 text-yellow-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h3 className="font-medium text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{description}</p>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded-full">
                    <More size={20} color="#54577A" variant="Outline"/>
                </button>
            </div>

            <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-1"/>
                    <span>{date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-1"/>
                    <span>{time}</span>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(priority)}`}>
                        {priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                        {status}
                    </span>
                </div>
                {assignee && (
                    <div className="flex items-center">
                        <img
                            src={assignee.avatar}
                            alt={assignee.name}
                            className="w-6 h-6 rounded-full object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${assignee.name.replace(' ', '+')}&background=random`;
                            }}
                        />
                        <span className="ml-2 text-sm text-gray-600">{assignee.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskCard; 