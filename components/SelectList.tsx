// components/SelectList.tsx

import React, { ChangeEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectListProps {
  options: Option[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectList: React.FC<SelectListProps> = ({ options, onChange }) => {
  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectList;
