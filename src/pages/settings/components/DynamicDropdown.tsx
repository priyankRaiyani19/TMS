import React, { useState, useEffect } from "react";

interface OptionItem {
  id ?:string;
  [key: string]: string |  string[] | undefined;
}

interface DynamicDropdownProps<T extends OptionItem> {
  title: string;
  options: T[];
  secondaryField?: keyof T;
  className?: string;
  onSelect?: (value: string, selectedItem: T) => void;
  isLoading?: boolean;
  error?: string | null;
}

function DynamicDropdown<T extends OptionItem>({
                                                 title,
                                                 options,
                                                 secondaryField,
                                                 onSelect,
                                               }: DynamicDropdownProps<T>) {
  const valueField: keyof T = "id";
  const displayField = Object.keys(options[0]).find((key) => key !== "id") as keyof T;

  const [selectedValue, setSelectedValue] = useState<string>(String(options[0][valueField]));
  const [selectedItem, setSelectedItem] = useState<T>(options[0]);

  useEffect(() => {
    if (onSelect && selectedItem) {
      onSelect(selectedValue, selectedItem);
    }
  }, [selectedValue, selectedItem, onSelect]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    const item = options.find((option) => String(option[valueField]) === value);
    if (item) setSelectedItem(item);
  };

  return (
    <div className="w-full max-w-[25rem] max-h-[5.438rem] p-4 flex flex-col gap-5 rounded">
      <label
        className="block text-gray-700 text-[0.875rem] font-semibold mb-2"
        htmlFor={`dropdown-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {title}
      </label>

      <div className="relative">
        <select
          id={`dropdown-${title.toLowerCase().replace(/\s+/g, "-")}`}
          value={selectedValue}
          onChange={handleSelectChange}
          className="block appearance-none w-full max-w-[25rem] h-[3.125rem] border border-[#F5F5F7] text-gray-700 py-3 px-4 pr-8 rounded-[0.8rem] leading-tight focus:outline-none focus:bg-white"
        >
          {options.map((option) => (
            <option key={option.id} value={String(option[valueField])}>
              {String(option[displayField])}
              {secondaryField && option[secondaryField] !== undefined
                ? ` (${String(option[secondaryField])})`
                : ""}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DynamicDropdown;
