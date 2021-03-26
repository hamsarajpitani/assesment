import React from 'react'

const Image = ({id,url}) => {
    return (
        <div>
     
             <div className="col-md-4" key={id}>
                <div className="card">
                  <div className="card-body">
                  
                    <img src={url} style={{ width: "100%" }} alt="" />
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Image
