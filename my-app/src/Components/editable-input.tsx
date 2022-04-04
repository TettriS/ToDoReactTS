import React, {useState, useEffect} from "react";

interface IInput {
  className?: string;
  placeholder?: string;
  isEditable?: boolean;
  defaultValue?: string;
}

function EditableInput({className, placeholder, isEditable}: IInput) {
  const [isActive, setActive] = useState(Boolean(isEditable));

  useEffect(()=>{}, [isActive])

  return (
    <input
      className={`editable-input ${className}`}
      placeholder={placeholder}
      disabled={!isActive}
      type='text'
      onClick={() => setActive(true)}
      onBlur={() => setActive(false)}
      defaultValue={'ToDo: Something'}
    />
  );
}

export default EditableInput;