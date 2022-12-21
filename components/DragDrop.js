import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import styles from "../styles/DragDrop.module.css";
import UploadIcon from "./UploadIcon";
import { saveMedia } from "../redux/campaign/campaignAction";
import { campaignMedia } from "../utils/selectors/campaignSelectors";
import { useShallowEqualSelector } from "../utils/hooks";

export default function DragDrop() {
  const [dragActive, setDragActive] = useState(false);
  const [fileList, setFileList] = useState(
    useShallowEqualSelector(campaignMedia)
  );
  const fileUploadRef = useRef(null);

  const files = fileList ? [...fileList] : [];

  const dispatch = useDispatch();

  const max_count = 6;

  function handleFileAdd() {

    // if (!exceededLimit) dispatch(saveMedia(uploaded));

    if (!files) return;

    const data = new FormData();

    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    console.log(data);
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

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const { files } = e.dataTransfer;

    const userFiles = [...files];

    if (userFiles.length > max_count) return;

    userFiles.forEach((file) =>
      setFileList((prevFiles) => [...prevFiles, file])
    );
  };

  const handleChange = function (e) {
    e.preventDefault();
    const { files } = e.target;
    const userFiles = [...files];

    if (userFiles.length > max_count) return;

    userFiles.forEach((file) =>
      setFileList((prevFiles) => [...prevFiles, file])
    );
  };

  const buttonHandler = () => {
    fileUploadRef.current.click();
  };

  return (
    <>
      <div>
        <p className={styles.heading}>Photos/Videos ({files.length}/6)</p>
      </div>
      <form
        className={styles.fileUpload}
        // onSubmit={handleSubmit}
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
                <button
                  className={styles.uploadBtn}
                  type="button"
                  onClick={buttonHandler}
                >
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
    </>
  );
}
