import React, { useState } from 'react'
import codeLog from '../Assests/code.png'
import '../styles/customStyles.css'

const Headers = () => {  
  const [toggles , setToggles] = useState()
  return (
    <header className='container-fluid p-0 m-0' style={{position:'fixed',zIndex:'10',backgroundColor:'white'}}>
         <div className='container-fluid shadow p-1'>
               <div className='container d-flex align-items-center justify-content-between'>
                   <div id='header-left-side'>
                        <a href='/' id='navlink' className='d-flex align-items-center'>
                            <img  src={codeLog} alt='codePng'  title='MaheshDev' className='code_logo_headers'/>
                            <h3 className='fs-5 fw-semibold'>Mahesh<span style={{color:'blue'}}>Dev</span></h3>
                        </a>
                    </div>
                    <nav id='header-middle' className='d-none d-md-flex justify-content-between'>
                        <ul className='navbar-nav list-unstyled d-flex flex-row m-0 gap-5 fs-6 w-50' id='hovers'>
                            <li className='nav-item'><a className='nav-link p-0 fw-light' href='#home'>Home</a></li>
                            <li className='nav-item'><a className='nav-link p-0 fw-light' href='#about'>About</a></li>
                            <li className='nav-item'><a className='nav-link p-0 fw-light' href='#skills'>Skills</a></li>
                            <li className='nav-item'><a className='nav-link p-0 fw-light' href='#projects'>Projects</a></li>
                        </ul>

                        <div>
                          <a className='btn btn-danger' href='#contact'>Talk to Me</a>
                        </div>
                    </nav>

                    <div class="dropdown d-xs-block d-md-none">
                      <a class="btn  dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>setToggles(!toggles)}>
                          { toggles ? <i class="bi bi-x fs-2"></i> :<i className='bi bi-list fs-2'></i>}
                      </a>

                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#home">Home</a></li>
                        <li><a class="dropdown-item" href="#about">About</a></li>
                        <li><a class="dropdown-item" href="#skills">Skills</a></li>
                        <li><a class="dropdown-item" href="#projects">Projects</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li className='dropdown-item'>
                          <a className='btn btn-danger' href='#contact'>Talk to Me</a>
                        </li>
                      </ul>
                    </div>
    
               </div>
         </div>
     
    </header>
  )
}

export default Headers