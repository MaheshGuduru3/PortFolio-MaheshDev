import React from 'react'
import ecommerce from '../Assests/Ecommerce.png'
import frontend from '../Assests/frontendMentor.png'
import youtubeimg from '../Assests/youtube.png'
import cart from '../Assests/EcommerceCart1.png'
import admins from '../Assests/admin.png'
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
                                <img  src={ecommerce}  alt='frontendMentor' title='Project1' className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li> Developed an ecommerce web application using MERN stack,implemented key features including Google authentication, dark and light theme, search product, pagination, user profile, shopping cart, wishlist cart, cash on delivery method and payment gateway integration using Razorpay.</li>
                                     <li>Integrated functionality for managing product inventory, including in-stock and out-of-stock items.Integrated features for password recovery, email verification, and sending emails using Nodemailer.</li>
                                      <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href={process.env.REACT_APP_PROJECT_LIVE_LINK_URL4}>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href={process.env.REACT_APP_PROJECT_REPO_LINK_URL4}>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
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
                                    <li>Developed a dynamic project using ReactJS, showcasing passion for front-end development. Utilized ReduxToolkit to efficiently store and manage project data, demonstrating strong prob
                                        lem-solving skills.</li>
                                    <li>Implemented Bootstrap CSS to enhance project aesthetics and ensure responsive design. Incorporated essential functionalities like filtering, searching, and pagination, showcasing attention 
                                        to detail and user-friendly experience.</li>
                                    <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href={process.env.REACT_APP_PROJECT_LIVE_LINK_URL2}>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href={process.env.REACT_APP_PROJECT_REPO_LINK_URL2}>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
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
                            <img  src={frontend}  alt='frontendMentor' title='Project3' className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li> Demonstrated a strong passion for web development through the creation of a dynamic and 
                                        user-friendly landing page. Showcased proficiency in HTML, CSS, and JavaScript by independently designing and building a 
                                        professional-grade landing page.</li>
                                     <li>Utilized HTML to structure the page, CSS to style it, and JavaScript to add functionality and 
                                        interactivity.It is the fully responsive web application.</li>
                                      <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href={process.env.REACT_APP_PROJECT_LIVE_LINK_URL1}>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href={process.env.REACT_APP_PROJECT_REPO_LINK_URL1}>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container  d-xs-flex flex-xs-column align-items-xs-center d-lg-flex align-items-lg-center'> 
                        <div className='projects_main shadow-lg p-2' id='project2'>
                            <div className='projects_box'>
                              <img  src={youtubeimg}  alt='youtubeimg' title='Project4'  className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li>It is a youtubeclone application having the functionallity of login and register with firebase google authentication method.It is responsive web application</li>
                                    <li>It have the search bar where you can search your related songs from your choice itself and in these application where you can see the channel details of one particular channel and many more..</li>
                                    <li>Tech Stack Used REACTJS, NODEJS, EXPRESSJS, MONGODB, FIREBASE, RAPIDAPI FOR YOUTUBE</li>
                                    <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href={process.env.REACT_APP_PROJECT_LIVE_LINK_URL3}>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href={process.env.REACT_APP_PROJECT_REPO_LINK_URL3}>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <h6 className='projects_number'>04</h6>
                    </div>
                    <div className='container  d-xs-flex flex-xs-column align-items-xs-center d-lg-flex align-items-lg-center'>
                        <h6 className='projects_number'>05</h6>
                        <div className='projects_main shadow-lg p-2'>
                            <div className='projects_box'>
                            <img  src={admins}  alt='frontendMentor' title='Project5' className='projects_box_img' />
                                <ul className='fs-6 fw-light'>
                                    <li> Developed a advanced crud admin dashboard in that we can the functionality like Delete User , Bulk Delete (More than 3 selected users),Checkbox for Selecting Multiple Users (Select 10 users for deleting),Update User, Search and pagination.</li>
                                     <li>All the data are taken as the static data and these operations are done in memory location.</li>
                                      <li>
                                        <a className='btn btn-outline-primary btn-sm fs-6 fw-light' href={process.env.REACT_APP_PROJECT_LIVE_LINK_URL5}>LIVE LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
                                        <a className='btn btn-outline-primary btn-sm mx-2 fs-6 fw-light' href={process.env.REACT_APP_PROJECT_REPO_LINK_URL5}>REPO LINK <span><i class="bi bi-box-arrow-up-right"></i></span></a>
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