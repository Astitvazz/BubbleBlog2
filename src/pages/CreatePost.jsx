import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import ImageCarousel from "../components/ImageCarousel";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

function Createpost() {
  const [content, setContent] = useState(true);
  const [images, setImages] = useState(false);
  const [link, setLink] = useState(false);
  const [fileArray, setFileArray] = useState([]);
  const [errors, setErrors] = useState({
    titleError: "",
    contentError: "",
  });
  const [freez, setFreez] = useState(true);
  const [text, setText] = useState({
    title: "",
    content: "",
    link: "",
  });
  const [fileLinkArray, setFileLinkArray] = useState([]);
  const handleChange = (e) => {
    console.log(text);
    setText((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    
  };
  const toggleContent = () => {
    setContent(true);
    setImages(false);
    setLink(false);
  };
  const toggleImages = () => {
    setContent(false);
    setImages(true);
    setLink(false);
  };
  const toggleLinks = () => {
    setContent(false);
    setImages(false);
    setLink(true);
  };
  const handleFileUpload = (e) => {
    const files = e.target.files;
    const newFiles = Array.from(files);
    setFileArray((prev) => {
      return [...prev, ...newFiles];
    });
    const fileArray = Array.from(files);
    fileArray.forEach((file) => {
      setFileLinkArray((prev) => {
        return [...prev, URL.createObjectURL(file)];
      });
    });
    console.log(files);
  };
  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    // Reset errors
    setErrors({ titleError: "", contentError: "" });

    let hasError=false;

    // Validation checks
    if (text.title.trim() === "") {
      setErrors((prev) => ({ ...prev, titleError: "Title can't be empty" }));
      hasError = true;
    }
    if (text.content.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        contentError: "Content can't be empty",
      }));
      hasError = true;
    }

    if (hasError) {
      setFreez(true); // Keep button disabled
      return; // Stop execution
    }

     // Enable button for posting

    try {
      const formData = new FormData();
      formData.append("title", text.title);
      formData.append("link", text.link);
      formData.append("content", text.content);

      fileArray.forEach((file) => {
        formData.append("images", file);
      });

      const response = await axios.post("http://localhost:3000/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" ,
        'Authorization': `Bearer ${token}`}
      });
      alert("posted!!!!")
      console.log("Form posted successfully", response.data);
    } catch (error) {
      alert(error)
      console.log("Something went wrong", error);
    }
  };
  useEffect(()=>{
    if(text.content.trim()!==''&&text.title.trim()!==''){
      setFreez(false);
    }
    if(text.content.trim()===''||text.title.trim()===''){
      setFreez(true);
    }
  },[text])
  const { isOpen } = useOutletContext();
  return (
    <>
      
        <div className={`h-screen ${isOpen?'lg:ml-[250px]':'lg:ml-[100px]'} w-[1000px] flex flex-col justify-start items-center pt-25 transition-all duration-300 ease-in-out`}>
          <div className="w-[80%] h-20  pt-2 ">
            <button
              className={`w-[20%]  h-[80%] ${
                content ? "border-b-8 border-blue-800" : "border-none"
              } mr-2 text-bold`}
              onClick={toggleContent}
            >
              Content
            </button>
            <button
              className={`w-[20%]  h-[80%] ${
                images ? "border-b-8 border-blue-800" : "border-none"
              } mr-2 text-bold`}
              onClick={toggleImages}
            >
              Images
            </button>
            <button
              className={`w-[20%]  h-[80%] ${
                link ? "border-b-8 border-blue-800" : "border-none"
              } mr-2 text-bold`}
              onClick={toggleLinks}
            >
              Links
            </button>
          </div>
          <input
            name="title"
            type="text"
            value={text.title}
            placeholder="Add Title..."
            className="focus:outline-none focus:ring-0 w-[80%] h-20 border-2 border-gray-400  rounded p-2 text-sm"
            onChange={handleChange}
          />
          <div className="text-red-700 h-6 text-[13px] w-[80%]">
            {errors.titleError}
          </div>
          {content ? (
            <>
              <textarea
                name="content"
                className="focus:outline-none focus:ring-0 w-[80%] h-60 border-2 border-gray-400 rounded p-2 "
                value={text.content}
                placeholder="Add Content..."
                onChange={handleChange}
              />
              <div className="text-red-700 h-6 text-[13px] w-[80%]">
                {errors.contentError}
              </div>
            </>
          ) : (
            ""
          )}
          {images ? (
            <>
              <div className="w-[80%] h-15  border-2 border-gray-400 border-b-white p-2 flex items-center justify-center ">
                <input
                  type="file"
                  id="upload"
                  multiple
                  hidden
                  onChange={handleFileUpload}
                />
                <p className="text-sm m-1 text-gray-600">upload media</p>
                <label htmlFor="upload">
                  <IoCloudUploadOutline className="text-gray-800 w-[30px] h-[30px] p-1 bg-gray-200 rounded-[100%] hover:bg-gray-300" />
                </label>
              </div>
              <div className="w-[80%] h-80  border-2 border-gray-400 border-t-white p-2 flex items-center justify-center overflow-hidden ">
                <ImageCarousel images={fileLinkArray} />
              </div>
            </>
          ) : (
            ""
          )}
          {link ? (
            <>
              <input
                name="link"
                type="text"
                placeholder="Add Links..."
                className="focus:outline-none focus:ring-0 w-[80%] h-20  border-2 border-gray-400  rounded p-2 text-sm mb-6"
                onChange={handleChange}
              />
            </>
          ) : (
            ""
          )}

          <button
            className={`w-[13%] h-10 border-2 ${
              freez
                ? "bg-gray-200 border-gray-400"
                : "bg-blue-800 border-blue-800 text-white"
            } rounded-2xl text-semibold text-[15px] text-gray-800 mt-4`}
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
      
    </>
  );
}

export default Createpost;
