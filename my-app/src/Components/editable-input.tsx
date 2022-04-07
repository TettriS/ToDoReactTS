import React, {useState} from "react";

interface IInput {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: string;

  onClick?(): void;

  onBlur?(): void;
}

function EditableInput({
                         className,
                         placeholder,
                         disabled = true,
                         defaultValue,
                         onClick = () => {
                         },
                         onBlur = () => {
                         }
                       }: IInput) {
  const [isActive, setIsActive] = useState(Boolean(disabled));

  return (
    <input
      className={`editable-input ${className}`}
      placeholder={placeholder}
      disabled={!isActive}
      type='text'
      onClick={() => {
        onClick();
        setIsActive(true);
      }}
      onBlur={() => {
        onBlur();
        setIsActive(false);
      }}
      defaultValue={defaultValue}
    />
  );
}

export default EditableInput;