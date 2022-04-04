import React, {useState, useEffect} from "react";

interface IInput {
  className?: string;
  placeholder?: string;
  isEditable?: boolean;
  defaultValue?: string;
}

function EditableInput({className, placeholder, isEditable, defaultValue}: IInput) {
  const [isActive, setIsActive] = useState(Boolean(isEditable));

  useEffect(()=>{}, [isActive])

  return (
    <input
      className={`editable-input ${className}`}
      placeholder={placeholder}
      disabled={!isActive}
      type='text'
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      defaultValue={defaultValue}
    />
  );
}

export default EditableInput;