/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ProgressBar from "./ProgressBar";


const Uploadform = () => {
  const [File, setFile] = useState(null);
  const [Error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && types.includes(file.type)) {
      setFile(file);
      console.log("file", file);
      setError("");
    } else {
      setFile(null);
      setError("please select and img format .jpg or .png");
    }
  };

  const handleUpload = () => {
    const fileinput = document.getElementById("gallaryinput");
    fileinput.click();
  };
  return (
    <div>
      <form>
        <input
          type="file"
          name=""
          id="gallaryinput"
          hidden="hidden"
          onChange={handleFile}
        />

        <IconButton onClick={handleUpload} className="uploadicon" style={{}}>
          <AddIcon />
        </IconButton>
        <div className="output">
          {Error && (
            <div class="alert alert-danger" role="alert">
              {Error}
            </div>
          )}

          {File && (
            <div class="alert alert-success" role="alert">
              {File.name}
            </div>
          )}
          {File && <ProgressBar File={File} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};

export default Uploadform;
