// src/components/FileUpload.js
import React from 'react';

const FileUpload = ({ onFileChange }) => {
    return (
        <input
            type="file"
            accept=".pdf,.docx,.png,.jpg,.jpeg"
            onChange={(e) => onFileChange(e.target.files[0])}
        />
    );
};

export default FileUpload;
