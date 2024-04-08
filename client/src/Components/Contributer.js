import React, { useState } from 'react';
import "../Css/Contributer.css"
function Contributer() {
  const [selectedFileType, setSelectedFileType] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [file, setFile] = useState(null);

  const handleFileTypeChange = (event) => {
    const fileType = event.target.value;
    setSelectedFileType(fileType);
    setSelectedGender('');
    setSelectedAgeGroup('');
    setFile(null);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFileType === 'zip') {
      // Handle ZIP file upload logic here
      console.log('Uploading ZIP file:', file);
    } else if (selectedFileType === 'wav' && selectedGender && selectedAgeGroup) {
      // Handle WAV file upload logic with gender and age group here
      console.log('Uploading WAV file:', file);
      console.log('Selected Gender:', selectedGender);
      console.log('Selected Age Group:', selectedAgeGroup);
    } else {
      console.log('Incomplete data.');
    }
  };

  return (
    <div className="App">
      <h1>Upload Files</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label className='option'>
            Select File Type:
            <select value={selectedFileType} onChange={handleFileTypeChange}>
              <option value="">Select an option</option>
              <option value="zip">ZIP File</option>
              <option value="wav">WAV File</option>
            </select>
          </label><hr/>
        </div>
        {selectedFileType === 'zip' && (
          <div>
            <label className='option'>
              Upload ZIP File:
              <input type="file" accept=".zip" onChange={handleFileChange} />
            </label><hr></hr>
          </div>
        )}
        {selectedFileType === 'wav' && (
          <div>
            <label className='option'>Choose Gender:</label>
            <div>
              <label>
                <input type="radio" value="male" checked={selectedGender === 'male'} onChange={handleGenderChange} />
                Male
              </label><br/>
              <label>
                <input type="radio" value="female" checked={selectedGender === 'female'} onChange={handleGenderChange} />
                Female
              </label><br/>
              <label>
                <input type="radio" value="Others" checked={selectedGender === 'Others'} onChange={handleGenderChange} />
                Others
              </label>
            </div><hr/>
            <label className='option'>Choose Age Group:</label>
            <div>
            <label>
                <input type="radio" value="1-18" checked={selectedAgeGroup === '1-18'} onChange={handleAgeGroupChange} />
                1-18
              </label><br/>
              <label>
                <input type="radio" value="18-30" checked={selectedAgeGroup === '18-30'} onChange={handleAgeGroupChange} />
                18-30
              </label><br/>
              <label>
                <input type="radio" value="31-50" checked={selectedAgeGroup === '31-50'} onChange={handleAgeGroupChange} />
                31-50
              </label><br/>
              <label>
                <input type="radio" value="51+" checked={selectedAgeGroup === '51+'} onChange={handleAgeGroupChange} />
                51+
              </label>
            </div><hr/>
            <label className='option'>
              Upload WAV File:
              <input type="file" accept=".wav" onChange={handleFileChange} />
            </label><hr/>
          </div>
        )}
        <button type="submit" className='but'>Upload</button>
      </form>
    </div>
  );
}

export default Contributer;
