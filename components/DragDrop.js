import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/DragDrop.module.css";
import UploadIcon from "./UploadIcon";

export default function DragDrop() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [images, setImages] = useState([])
  const [fileLimit, setFileLimit] = useState(false);
  const fileUploadRef = useRef(null);

  const max_count = 6;

  function handleFileAdd(files) {
    const uploaded = [...uploadedFiles];
    let exceededLimit;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === max_count) setFileLimit(true);
        if (uploaded.length > max_count) {
          setFileLimit(false);
          exceededLimit = true;
          return true;
        }
      }
    });
    if (!exceededLimit) setUploadedFiles(uploaded);
  }

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const fileList = e.dataTransfer.files,
      chosenFiles = [...fileList];

    if (files && files[0]) {
      handleFileAdd(chosenFiles);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    const fileList = e.target.files,
      chosenFiles = [...fileList];

    if (fileList && fileList[0]) {
      handleFileAdd(chosenFiles);
    }
  };

  const buttonHandler = () => {
    fileUploadRef.current.click();
  };

//   useEffect(()=>{
//     const images = [], fileReaders = [];
//     let isCancel = false;

//     if (uploadedFiles.length) {
//         uploadedFiles.forEach((file) => {
//           const fileReader = new FileReader();
//           fileReaders.push(fileReader);
//           fileReader.onload = (e) => {
//             const { result } = e.target;
//             if (result) {
//               images.push(result)
//             }
//             if (images.length === uploadedFiles.length && !isCancel) {
//               setImages(images);
//             }
//           }
//           fileReader.readAsDataURL(file);
//         })
//       };
//       return () => {
//         isCancel = true;
//         fileReaders.forEach(fileReader => {
//           if (fileReader.readyState === 1) {
//             fileReader.abort()
//           }
//         })
//       }
//   },[uploadedFiles])

  return (
    <>
      <div>
        <p className={styles.heading}>Photos/Videos ({uploadedFiles.length}/6)</p>
      </div>
      <form
        className={styles.fileUpload}
        onSubmit={handleSubmit}
        onDragEnter={handleDrag}
      >
        <input
          type="file"
          id="input-file-upload"
          ref={fileUploadRef}
          multiple={true}
          accept="image/png, video/mp4, video/avi, image/jpeg"
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? styles["drag-active"] : ""}
        >
          <div>
            <span>{UploadIcon}</span>
            <p>
              Drag & drop files here or{" "}
              <span>
                <button className={styles.uploadBtn} onClick={buttonHandler}>
                  Browse
                </button>
              </span>
            </p>
            <small>Supported formats: JPEG, PNG, MP4, AVI</small>
          </div>
        </label>
        {dragActive && (
          <div
            className={styles.dragFileElement}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
      {/* <div>
        <ul className={styles.selectedFiles}>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
                {file.name}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
