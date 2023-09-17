import React from 'react'

const Skills = () => {
  return (
    <div className='container-fluid p-0' style={{position:'relative',top:'3.5rem'}}  id='skills'>    
         <h3 className='text-center fs-4 fw-bold mt-5'>Skills</h3>
         <div className='skills_main'>
                <div className='container d-flex flex-wrap align-items-center justify-content-around p-2 gap-2' style={{minHeight:'17rem'}}>
                                <div className='items-col'>
                                    <h5 className='text-center'><span><i class="bi bi-code-slash"></i></span>Frontend Skills</h5>
                                    <div className='text-center'>
                                        <h6>HTML5</h6>
                                        <h6>CSS3</h6>
                                        <h6>JAVASCRIPT</h6>
                                        <h6>REACTJS</h6>
                                        <h6>REDUX TOOLKIT</h6>
                                    </div>
                                </div>
                           
                                <div className='items-col'>
                                    <h5 className='text-center'><span><i class="bi bi-database-fill"></i></span>Backend Skills</h5>
                                    <div className='text-center'>
                                        <h6>NODEJS</h6>
                                        <h6>EXPRESSJS</h6>
                                        <h6>MONGODB</h6>
                                        <h6>MONGOOSE</h6>
                                        <h6>FIREBASE</h6>
                                    </div>
                                </div>
    
                                <div className='items-col'>
                                    <h5 className='text-center'><span><i class="bi bi-bucket-fill"></i></span>Other Skills</h5>
                                    <div className='text-center'>
                                        <h6>GIT</h6>
                                        <h6>GITHUB</h6>
                                        <h6>CORE JAVA</h6>
                                        <h6>BASIC PYTHON</h6>
                                    </div>
                            </div>
                </div>
         </div>
    </div>
  )
}

export default Skills