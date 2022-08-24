import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import { getallSingleFiles } from './components/api';
//functional component
const App = () => {
  const [singleFile, setSingleFile] = useState([]);

  const getSingleFilesList = async () => {
    try {
      const fileList = await getallSingleFiles();
      setSingleFile(fileList);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getSingleFilesList();
  }, []);
  return (
    <>
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          FILE UPLOAD TO AWS
        </h4>
        <div className='text-center '>
          <FileUpload getSingle={() => getSingleFilesList()} />
          {singleFile.map((file, index) =>
            <div className='card'>
              {file.fileName}
              <div>
                <button type='button' className='btn btn-danger btn-block position-absolute bottom-0 end-0'>Delete</button>
              </div>
              <br></br>
            </div>
          )}
        </div>
      </div>
    </>

  );
}


export default App;

