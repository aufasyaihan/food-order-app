import { forwardRef } from "react";

const Input = forwardRef(({ label, id, ...props }, ref) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} ref={ref} />
    </div>
  );
});

export default Input;
