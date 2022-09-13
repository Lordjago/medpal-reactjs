import React from 'react'

export default function Feature() {
  return (
    <div className="tag">
    <div className="tag-panel">
      <div className="tag-icon">
        <i className="bi bi-clipboard-data"></i>
      </div>
      <div className="tag-text">
        <h4 className="title">Analysis</h4>
        <p className="summary">
          We provide insight into the effectiveness of healthcare in terms of productivity, cost and general performance.
        </p>
      </div>
    </div>
    <div className="tag-panel">
      <div className="tag-icon">
        <i className="bi bi-alt"></i>
      </div>
      <div className="tag-text">
        <h4 className="title">Strategy</h4>
        <p className="summary">
          Our strategic plans will address the key issues, your vision and goals, and the steps to get there.
        </p>
      </div>
    </div>
    <div className="tag-panel">
      <div className="tag-icon">
        <i className="bi bi-file-earmark-play"></i>
      </div>
      <div className="tag-text">
        <h4 className="title">Profiling</h4>
        <p className="summary">
        Extrapolating information about our patient based on known or perceived traits or tendencies.
        </p>
      </div>
    </div>
  </div>
  )
}
