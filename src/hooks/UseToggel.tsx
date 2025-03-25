import { useState } from "react";

export default function useToggle(initialState: boolean = false) {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    // const toggle = () => setIsOpen((prev) => !prev);
    // const open = () => setIsOpen(true);
    // const close = () => setIsOpen(false);

    return { isOpen,setIsOpen };
}
