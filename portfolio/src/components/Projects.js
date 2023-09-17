import React from 'react'
import frontend from '../Assests/frontendMentor.png'
import youtubeimg from '../Assests/youtube.png'
import cart from '../Assests/EcommerceCart1.png'
const Projects = () => {  
  return (
    <div className='container-fluid'  style={{position:'relative', top:'3.5rem'}} id="projects">
      <div className='container  mt-5'>
        <div  className='container'>
               <div className='text-center fs-3 mb-4 fw-bold'>Projects</div>
               <div className='container d-flex flex-column gap-5'>
                    <div className='container  d-xs-flex flex-xs-column gap-xs-5 align-items-xs-center d-lg-flex align-items-lg-center'>
                        <h6 className='projects_number'>01</h6>
                        <div className='projects_main shadow-lg p-2'>
                            <div className='projects_box'>
                                <img  src={frontend}  alt='frontendMentor' title='Project1' className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li>It is developed by using only html5,css3,and javascript only.</li>
                                    <li>It is the fully responsive web application.</li>
                                    <li>Javascript is used in the accordions and menubar in mobile responsive and so on</li>
                                    <li>It is the project that showcasing the frontend part of frontend.io challenging landing page.</li>
                                    <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href='https://maheshguduru3.github.io/frontendmentor/'>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href='https://github.com/MaheshGuduru3/frontendmentor'>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container  d-xs-flex flex-xs-column align-items-xs-center d-lg-flex align-items-lg-center'> 
                        <div className='projects_main shadow-lg p-2' id='project2'>
                            <div className='projects_box'>
                                <img  src={cart}  alt='cart' title='Project2'  className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li>It is a Ecommerce Cart app in these application we can have the functionality like pagination, filter, searching , add to the cart , remove from the cart etc.</li>
                                    <li>And it is responsive web application that we can use in these application mobile, tablet also</li>
                                    <li>Tech Stack Used REACTJS, BOOTSTRAP, REDUXTOOLKIT, RAPIDAPI</li>
                                    <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href='https://ecommercecartapp.netlify.app/'>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href='https://github.com/MaheshGuduru3/ecommerceCart'>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <h6 className='projects_number'>02</h6>
                    </div>
                    <div className='container  d-xs-flex flex-xs-column align-items-xs-center d-lg-flex align-items-lg-center'>
                        <h6 className='projects_number'>03</h6>
                        <div className='projects_main shadow-lg p-2'>
                            <div className='projects_box'>
                                <img  src={youtubeimg}  alt='youtubeimg' title='Project3'  className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li>It is a youtubeclone application having the functionallity of login and register with firebase google authentication method.It is responsive web application</li>
                                    <li>It have the search bar where you can search your related songs from your choice itself and in these application where you can see the channel details of one particular channel and many more..</li>
                                    <li>Tech Stack Used REACTJS, NODEJS, EXPRESSJS, MONGODB, FIREBASE, RAPIDAPI FOR YOUTUBE</li>
                                    <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href='https://demoyoutubeclone-maheshmh.netlify.app/'>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href='https://github.com/MaheshGuduru3/YoutubeCloneDemo'>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               </div>
        </div>
      </div>
    </div>
  )
}

export default Projects