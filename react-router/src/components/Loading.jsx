import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border" role="status" style={{height:"4rem",width:"4rem"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
