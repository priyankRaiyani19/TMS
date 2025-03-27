import { useState } from "react";

export default function useToggle(initialState: boolean = false) {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);
    return { isOpen,setIsOpen };
}
