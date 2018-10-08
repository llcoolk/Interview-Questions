import React from 'react'

export default ({ next }) => (
  <button onClick={next} className="button forward-button">
    <svg viewBox="0 -5 36 36" width={48}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
    </svg>
  </button>
)
