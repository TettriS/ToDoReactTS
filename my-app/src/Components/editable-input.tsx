import React, {FocusEventHandler} from "react";

interface IInput {
  className?: string;
  onClickEvent?: React.MouseEventHandler<HTMLInputElement>;
  onBlurEvent?: React.FocusEventHandler<HTMLInputElement>;
  title?: string;
  isEditable?: boolean;
}

function Input({className, onClickEvent, onBlurEvent, title, isEditable}: IInput) {
  return (
    <input
      className={['editable-input', className].join(' ')}
      onClick={onClickEvent}
      onBlur={onBlurEvent}
      title={title}
      disabled={isEditable}
    />
  );
}

export default Input;