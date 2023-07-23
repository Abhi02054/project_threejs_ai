import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleButtonClick = (fileType) => {
    readFile(fileType);
  };

  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input 
          id="file-upload"
          type='file'
          accept='image/*'
          onChange={handleFileChange}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>

        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file ? file.name : "No file selected"}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-36'>
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => handleButtonClick('logo')}
          customStyles="text-xs"
        />

        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => handleButtonClick('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
}

export default FilePicker;
