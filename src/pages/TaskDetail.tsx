import {useState} from "react";
import {useForm} from "@mantine/form";
import {useDropzone} from "react-dropzone";
import {Folder} from "iconsax-react";
import Navbar from "../components/common/Navbar.tsx";
import Task from "../assets/details/Task.png";
import {Clock, Profile2User, TickCircle} from "iconsax-react";
import {Details} from "../data/overview/task-details.tsx";
import CTAButton from "../components/common/CTAButton.tsx";

export default function TaskDetail() {
    const [files, setFiles] = useState([]);
    const form = useForm({initialValues: {file: null}});

    const {getRootProps, getInputProps} = useDropzone({
        onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    });
    console.log(files);
    return (
        <div>
            <Navbar name={"Detail Task"} isActive={true}/>

            <div className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex flex-col w-full bg-white rounded-lg">



                        <img src={Task} alt="Not Found"/>



                    <div className="p-8 flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h1 className="md:text-4xl text-2xl font-semibold">Creating Awesome Mobile Apps</h1>
                            <div className="flex gap-2 text-sm">
                                <p className="pr-2 border-r-2 text-gray-500">UI UX Design . Apps Design</p>
                                <div className="text-blue-500">+ Get Mentors</div>
                            </div>
                            <div className="flex gap-5">
                                <div className="flex items-center gap-1">
                                    <Profile2User size="18" color="#54577a"/>
                                    <p>200 Students Involved</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size="18" color="#54577a"/>
                                    <p>1 Hour</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold">Description</h1>
                            <p className="text-sm">
                                Follow the video tutorial above. Understand how to use each tool in the Figma
                                application. Also learn how to make a good and correct design. Starting from spacing,
                                typography, content, and many other design hierarchies. Then try to make it yourself
                                with your imagination and inspiration.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-2xl font-semibold">Essence of Assessment</h1>
                            <div className="flex flex-col gap-5">
                                {Details.map((item, index) => (
                                    <div className="flex gap-5" key={index}>
                                        <TickCircle size="24" color="#546fff" variant="Bold"/>
                                        {item.task}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="min-w-[23.25rem] h-full min-h-[50.75rem] p-6 bg-white rounded-lg flex flex-col justify-between">
                    <div className="flex flex-col gap-6">
                        <p className="font-bold text-sm">Assigned Assignments</p>
                        <div className="flex flex-col gap-6">
                            <h1 className="text-2xl font-semibold">Creating Awesome Mobile Apps</h1>
                            <p className="text-gray-500">UI UX Design . Apps Design</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl font-semibold">Detail Student</h1>
                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Student's name</p>
                                    <p className="font-semibold">Dennis Nzioki</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Student Class</p>
                                    <p className="font-semibold">MIPA 2</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Student Number</p>
                                    <p className="font-semibold">10</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl font-semibold">File Task</h1>
                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between">
                                    <p className="text-gray-500">Last Modified</p>
                                    <p className="font-semibold">1 July 2022</p>
                                </div>
                                <p className="text-gray-500">File submissions</p>
                                <div {...getRootProps()}
                                     className="border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-10 cursor-pointer hover:border-blue-500">
                                    <input {...getInputProps()} />
                                    <Folder size={40} color="#c3c3c3"/>
                                </div>
                                <p className="text-gray-500 text-sm mt-2">*drag or browse from device</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <CTAButton text={"Submit"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}