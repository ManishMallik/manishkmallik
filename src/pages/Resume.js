import React from 'react';
import MyResume from '../documents/Manish Mallik-Resume.pdf';

const Resume = () => {
	return (
		<div className='App-header'>
            <a className='App-link' href={MyResume} target="_blank" rel="noreferrer">Here is my resume!</a>
        </div>
	);
};

export default Resume;
