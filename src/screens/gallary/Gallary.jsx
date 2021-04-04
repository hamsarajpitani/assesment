/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Pagination from "../../Pagination";
import Uploadform from "./Uploadform";
import db from "../../firebase";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Gallary() {
  const [docs, setDocs] = useState([]);

  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: limit,
  });

  const pics = () => {
    db.collection("gallary")
      .onSnapshot((snap) => {
        db.collection("gallary")
          .orderBy("createdAt", "desc")
          .onSnapshot((snapshot) => {
            setDocs(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          });
        console.log(docs);
      });
  };

  useEffect(() => {
    pics();
  }, []);

   const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const handledelete = (id) => {
    db.collection("gallary").doc(id).delete();
  };

  return (
    <>
      <div className="gallery">
        <div className="container mx-auto ">
          <div className="row">
            <div className="col-12 mx-auto">
          <div className="title mx-auto mt-5 d-flex flex-column align-items-center">
              <h1>My Gallary</h1>
            </div>

          <div className="row g-5 mx-auto">
            <Uploadform />
            {docs &&
              docs.slice(pagination.start,pagination.end).map((doc, index) => (
                <div className="col-md-4 main__card" key={doc.id}>
                  <div className="card" style={{ width: "21rem" , position : 'relative',margin: '0 auto'}}>
                   
                      <img
                        src={doc.url}
                        alt=""
                        className="image-fluid"
                        style={{ width: "100%" }}
                      />
                      <IconButton
                        onClick={() => handledelete(doc.id)}
                        aria-label="delete"
                        className="deleteicon"
                        style={{ position : 'absolute', bottom: '13px', right: '17px',} }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  
                </div>
              ))}
               
          <Pagination
          limit={limit}
          total={docs.length}
          onPaginationChange={onPaginationChange}
        />
          </div>
            </div>
          </div>
            
        </div>
      </div>
    </>
  );
}

export default Gallary;
