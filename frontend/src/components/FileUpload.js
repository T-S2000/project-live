	import React,{ Fragment, useState } from 'react';
	import 'bootstrap/dist/css/bootstrap.min.css';  //importing bootstrap
	import {singleFileUpload} from './api'



	const FileUpload = (props) => {
		const [singleFile,setSingleFile] = useState(null);
		const singleFileChange = (e) => {
			setSingleFile(e.target.files[0]);
		}
		const uploadSingleFile = async () => {  //asynchronous function
			const formData = new FormData();
			formData.append('file', singleFile);
			await singleFileUpload(formData);
			props.getSingle();
		}
	return (
		<Fragment>
			<form method='post' action="#" id="#" >    
			<div className='form-group files'>
				<label>Upload Your File </label>
				<input type='file' onChange= {(e) => singleFileChange(e)} className='form-control' />
			</div>
			<br></br>
			<button type='button' className='btn btn-primary btn-block' onClick={() => uploadSingleFile()}>SUBMIT</button>
		</form>
		<br></br>
		</Fragment>
		
	);
	};

	export default FileUpload;

