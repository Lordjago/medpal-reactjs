
export default function Testimonial() {
  return (
    <div className="testimonial">
      <h2 className="title" style={{color: '#8492a6', marginBottom: '15px'}}>TESTIMONIAL</h2>
    <h6 className="subtitle" style={{fontSize: '30px', fontWeight: 600, color: '#161c2d'}}>Some lovely Feedback from our Clients</h6>
      <div className="testimonial-description">
        <div className="process-item">
          <div className="process-icons">
            <div className="process-item">
              <img src="https://media.istockphoto.com/photos/portrait-of-confident-female-healthcare-professional-picture-id690657190?k=20&m=690657190&s=612x612&w=0&h=8PRjAI6Y8jbfnSW_gIvew4FheaUEEazztUR4uUHBYMY=" alt="" />
            </div>
            <div className="process-item">
              <img src="https://media.istockphoto.com/photos/portrait-of-a-doctor-picture-id92347250?k=20&m=92347250&s=612x612&w=0&h=RsbWyj485Bf1T6p2GvaZBQhRhGufqKWdRVdO0sdCcSA=" alt="" />
            </div>
          </div>
            <div className="process-title" style={{display: 'flex', alignItems: 'center', justifyContent: "space-around"}}>
              <p className="summary">Knowing and making use of MedPal has been a great service have ever received in my medical record.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
