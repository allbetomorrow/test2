import React from 'react';
import { useField } from 'formik';

interface MyTextInputProps {
  label: string,
  name: string,
  type: string,
  id?: string,
  placeholder?: string
}

const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)

  return (
    <div className='flex flex-col mt-10 relative'>
      <input {...field} {...props} autoComplete='off'
        className='peer h-10 z-10 bg-transparent w-full border-b-2 border-gray-300 text-gray-900 
        placeholder-transparent focus:outline-none focus:border-purple-600'
        placeholder=' '
      />
      <label htmlFor={props.id || props.name}
        className="absolute left-0 -top-4 text-gray-600 text-sm transition-all 
        peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
        peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className='absolute top-10 text-sm text-rose-500'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextInput