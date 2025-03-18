import  {useState} from 'react';
import * as React from "react";
type SidebarState = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

    const SidebarToggle = (): SidebarState => {
        const [isOpen, setIsOpen] = useState<boolean>(false);
        return { isOpen, setIsOpen };

};

export default SidebarToggle;
