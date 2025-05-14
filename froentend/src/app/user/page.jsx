"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { FiUpload, FiX, FiCheckCircle, FiSend, FiAlertCircle } from 'react-icons/fi';
import { baseurl, imgurl } from '../component/common';
import { FiFile, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';

const Page = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [allfiles,setAllfiles]=useState()
  const [userLoader,setuserLoader]=useState(false)
// Format time display


const  handleDelete = async (items) => {
  if (window.confirm('Are you sure you want to delete this File?')) {
    setuserLoader(true)
    const token=localStorage.getItem("site_user");
    const response = await axios.post(`${baseurl}/user/deletepdf/${token}`,{pdfname:items.pdf})
    if(response.data.success){
      const token=localStorage.getItem("site_user");
      await fetchallfiles(token)
    }
    setuserLoader(false)
  }
};

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError(''); 
    
    if (!selectedFile) {
      setFile(null);
      setFileName('');
      return;
    }

    

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError('File size exceeds 10MB limit');
      e.target.value = null;
      setFile(null);
      setFileName('');
      return;
    }

    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a PDF file first');
      return;
    }
    setuserLoader(true)
    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("time", new Date().toISOString());

    setIsSubmitting(true);
    setError('');

    try {
      const token = localStorage.getItem("site_user");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await axios.post(`${baseurl}/user/addpdf/${token}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.success) {
        alert('PDF submitted successfully!');
        setFile(null);
        setFileName('');
        document.getElementById('pdf-upload').value = '';
         fetchallfiles(token)
      } else {
        throw new Error(response.data.message || 'Upload failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload PDF. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsSubmitting(false);
    }
    setuserLoader(false)
  };

  const handleRemoveFile = (e) => {
    e.preventDefault();
    setFile(null);
    setFileName('');
    setError('');
    document.getElementById('pdf-upload').value = '';
  };

  const fetchallfiles=async(token)=>{
    setuserLoader(true)
const response = await axios.get(`${baseurl}/user/getpdf/${token}`)
if(response.data.success){
setAllfiles(response.data.pdf)
setuserLoader(false)
  }}




  useState(()=>{
const token=localStorage.getItem("site_user");
fetchallfiles(token)


  },[])
  return (
    <div className="container mx-auto px-2">
      <div className='md:flex gap-4'>
        <form onSubmit={handleSubmit} className="p-2 bg-white py-4 h-fit shadow-xl rounded-2xl border border-gray-100">
          <div className="text-center space-y-2">
            <FiUpload className="mx-auto text-xl md:text-4xl text-blue-500" />
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">Upload PDF Document</h2>
            <p className="text-gray-500">Upload your PDF file for processing</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="pdf-upload" className="block text-lg font-medium text-gray-700">
                Select a PDF File
                <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500">Supported format: .pdf (max 10MB)</p>
            </div>

            <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors duration-200">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="pdf-upload"
                  className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all duration-200"
                >
                  <FiUpload className="text-lg" />
                  <span className='text-nowrap'>Browse Files</span>
                </label>
                
                <div className="flex-1">
                  <span className={`text-sm truncate ${fileName ? 'text-gray-800 font-medium' : 'text-gray-500 italic'}`}>
                    {fileName || 'No file selected'}
                  </span>
                  {fileName && (
                    <button 
                      onClick={handleRemoveFile}
                      className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                      title="Remove file"
                      type="button"
                    >
                      <FiX className="inline" />
                    </button>
                  )}
                </div>
              </div>

              {fileName && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 py-2 px-3 rounded-md text-sm">
                  <FiCheckCircle className="flex-shrink-0" />
                  <span>File selected successfully</span>
                </div>
              )}

              <input
                id="pdf-upload"
                type="file"
                accept="*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={!file || isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-4 px-6 font-semibold rounded-xl shadow-lg transition-all duration-150 ${
                file && !isSubmitting
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 active:shadow-md active:scale-95'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <FiSend className="text-lg" />
                  <span>Upload PDF</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 py-3 px-4 rounded-md text-sm">
              <FiAlertCircle className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>
        
        <div className='w-full p-2 bg-[#d0cece4e] py-4  shadow-xl rounded-2xl border border-gray-100'>
        {  userLoader && <div class="flex justify-center items-center">
  <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>}
{ !userLoader && allfiles &&
<div className='flex flex-wrap gap-4'>

{allfiles?.map((item,index)=>{
return(
  <div className='relative w-60 bg-[white] p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-blue-200 group'>
  <Link
  href={`${imgurl}/${item.pdf}`}
  target='_blank'
  key={index} 
  className=""
>
  {/* File icon with animated background */}
  <div className="bg-blue-50 text-blue-600 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-200">
    <FiFile className="text-5xl" />
  </div>
  
  {/* File information */}
  <div className="mb-2">
    
    <p className="text-xs text-gray-400">{item.pdf.split(".")[1]}</p>
  </div>
  
  {/* Absolute positioned time with better formatting */}
  <div className="absolute top-4 right-4 bg-blue-100 text-gray-800 text-xs px-2.5 py-1 rounded-full border border-gray-200">
  {new Date(item.time).toLocaleDateString()} • {new Date(item.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}

  </div>
  
  {/* Delete button with confirmation */}
  
</Link>
<button 
    onClick={() => {
      
      
      handleDelete(item);
    }}
    className="absolute bottom-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50"
    title="Delete file"
    aria-label="Delete document"
  >
    <FiTrash2 className="text-xl" />
  </button>
</div>

)



})}


  </div>


}




        </div>
      </div>
    </div>
  );
}

export default Page;