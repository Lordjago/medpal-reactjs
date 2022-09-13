import React from 'react'

export default function Hero() {
  return (
    <div style={{marginTop: '77px'}}>
    <section className="first-section">
      <div className="page-message">
        <h1 className="page-title">Changing the way you receive healthcare.</h1>
        <h1 className="page-subtitle">
          Access to Easy, Affordable and On-Demand Healthcare Services for
          you and your family. We will help you maintain your health here
          we choose you a doctor who is experienced and certified in the
          field.
        </h1>
        <div className="cta">
          <button className="btn btn-start">Get Started</button>
          <button className="btn btn-learn">Learn More</button>
        </div>
      </div>
      <div className="page-image">
        <img
          src="https://png.pngtree.com/png-vector/20201225/ourlarge/pngtree-online-medical-health-consultation-doctor-vector-illustration-pattern-element-png-image_2608104.jpg"
          alt="placeholder"
          className="img-responsive"
        />
      </div>
    </section>
  </div>
  )
}
