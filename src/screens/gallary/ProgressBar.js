
import React,{useEffect} from "react";
import useStorage from "./useStorage";

const ProgressBar = ({ File, setFile }) => {

  //!! THIS WILL CALL the USESTORAGE
  alert(File);
  const { url, progress } = useStorage(File);
  console.log(url, progress);

  //!!remove bar after upload
    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url,setFile])

  
  return (
    <div>
      <div class="progress">
          
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: progress + '%' }}
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
