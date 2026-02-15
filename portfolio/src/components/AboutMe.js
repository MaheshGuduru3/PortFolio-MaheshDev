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
                <p className='fs-5 fw-light'> 
                 
                  <p>
                    Hi👋 I'm <strong>Mahesh Babu Guduru ,</strong> working as Associate JavaScript Developer at 4CRisk.ai with 1.9 years of professional experience building responsive and scalable web applications. I specialize in JavaScript and modern frontend development using ReactJS, along with strong foundations in HTML and CSS. In my current role, I focus on developing reusable components, improving UI performance, fixing production issues, and collaborating with cross-functional teams to deliver reliable features.
                  </p> 
                  <p>
                   Beyond my professional work, I actively build personal projects to expand my technical depth. I have hands-on experience creating full-stack and experimental applications using modern stacks and emerging technologies. My recent work includes projects in Generative AI and Retrieval-Augmented Generation (RAG) applications, where I’ve integrated LLM-based workflows, vector search, and intelligent data retrieval into practical solutions.
                  </p>
                  <p>
                    I’m a continuous learner who enjoys exploring new tools and architectures, writing clean and maintainable code, and turning complex requirements into user-friendly products. My goal is to grow into a strong full-stack / AI-enabled developer and contribute to impactful, scalable systems.
                  </p>
                </p>
                <div className=' d-xs-flex flex-xs-column gap-1 d-sm-flex gap-sm-5 justify-content-sm-center' id='expr-project'>
                  <div className='text-center'>
                    <h6 className='fs-6 fw-bold'>1+</h6>
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