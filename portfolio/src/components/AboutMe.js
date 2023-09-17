import React from 'react'
import maheshlogo from '../Assests/MaheshResize.jpg'
const AboutMe = () => {
  return (
    <div className='container-fluid' style={{position:'relative',top:'3rem'}} id='about'>
      <div className='container'> 
           <h4 className='text-center'>AboutMe</h4>
          <div className='container p-4 d-xs-flex flex-xs-column  align-items-center d-md-flex gap-md-4 align-items-md-center shadow' style={{Width:'65rem', minHeight:'10rem'}}>
              <div>
                <img  src={maheshlogo}  alt='profile' title='Mahesh Babu Guduru'  className='profile-pic'/>
              </div>
              <div className='d-flex flex-column align-items-center'>
                <p className='fs-5 fw-light'>I'm <strong>Mahesh Babu Guduru</strong> a recent BTech graduate(2023) in Computer Science Engineering with excellent skills in teamwork, communication and interpersonal relations. Possesses a strong ability to collaborate with different people, an excellent attitude towards problem solving and a commitment to produce high-quality results in all projects. Demonstrates a strong capacity to motivate and lead a team towards a common goal.</p>
                <div className=' d-xs-flex flex-xs-column gap-1 d-sm-flex gap-sm-5 justify-content-sm-center' id='expr-project'>
                  <div className='text-center'>
                    <h6 className='fs-6 fw-bold'>Fresher</h6>
                    <p className='fs-5 fw-semibold'>Experience</p>
                  </div>
                  <div className='text-center'>
                    <h6 className='fs-6 fw-bold'>2+</h6>
                    <p className='fs-5 fw-semibold'>Projects</p>
                  </div>
                </div>
              </div>
         </div>      
      </div>
    </div>
  )
}

export default AboutMe