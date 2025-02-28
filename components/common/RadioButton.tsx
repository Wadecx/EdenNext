import React from "react";
import { Check } from "lucide-react"; // Import de l'icône de coche

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex gap-2 items-center cursor-pointer">
      {/* Input radio caché */}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden peer"
      />
      
      <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-primary peer-checked:border-gray-500 transition-all duration-300">
        {checked && <Check className="text-white w-4 h-4" />}
      </div>

      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
