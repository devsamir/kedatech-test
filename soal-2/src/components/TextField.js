import React from 'react';
import { HiExclamation } from 'react-icons/hi';

const TextField = React.forwardRef((props, ref) => {
  const { className, label, margin, error, required, labelstyle } = props;
  const newProps = {
    ...props,
    className: undefined,
    label: undefined,
    margin: undefined,
    error: undefined,
    required: undefined,
    labelstyle: undefined,
  };
  return (
    <div className={`flex flex-col ${margin}`}>
      <label className={`text-sm font-medium mb-1 ${labelstyle}`}>
        {label} {required && <span className="ml-1 text-red-500 text-base">*</span>}
      </label>
      <input
        {...newProps}
        ref={ref}
        className={`rounded border border-gray-300 transition-all ring-0 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 mb-1 ${className}`}
      />
      <small className={`text-red-500 text-sm flex gap-2 items-center ${error ? 'visible' : 'invisible'}`}>
        <HiExclamation />
        {error?.message}
      </small>
    </div>
  );
});

export default TextField;
