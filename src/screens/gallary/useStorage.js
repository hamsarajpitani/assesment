/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState ,useEffect } from "react";
import { storage , timestamp} from "../../firebase";
import db from "../../firebase"; 

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //reference
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection('gallary');

    //* ON HAS 3 ARGUMENTS
    storageRef.put(file).on("state_changed", (snap) => {
      const percentage = Math.round(
        (snap.bytesTransferred / snap.totalBytes) * 100
      );
      setProgress(percentage);
    },(err)=>{
        setError(err);
    },async()=>{
        const URL = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        setUrl(URL);
        collectionRef.add({
          createdAt,
           url : URL,
        })
    }
    );
  }, []); 
  return {progress,url,error};
};

export default useStorage;

//TODO: store this url to make collection