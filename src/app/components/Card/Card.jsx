import React from 'react'

export default ({ children, type }) => (
  <div className="card">
    <span className={type}>{children}</span>
  </div>
)
