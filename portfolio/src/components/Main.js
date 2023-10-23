import React from 'react'
import {Typewriter}  from 'react-simple-typewriter'
import '../styles/customStyles.css'
import codingPerson from '../Assests/codingUpdate-removebg-preview (1).png'
const Main = () => {
  return (
    <div className='container-fluid  p-0 m-0' style={{position:'relative',top:'3rem'}} id='home'>
        <div className='container-fluid p-0 m-0' id='main_textcontent'>
                <div className='container' id='main_textcontent1'>
                    <div className='text_main'>
                        <div className=''>
                            <h3>Hi, there</h3>
                            <h4>I'm Mahesh Guduru</h4>
                        </div>
                        <div>
                            <h3>
                               And I'm a {' '}
                               <span style={{ color: 'red', fontWeight: 'bold' }}>
                                    <Typewriter
                                        words={['Full Stack Web Developer', 'Frontend Developer']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='_' 
                                        typeSpeed={70}
                                        deleteSpeed={50} 
                                        delaySpeed={1000}
                                    />
                                </span>

                            </h3>
                        </div>
                        <div>
                            <a className='btn btn-outline-primary' href='#contact'>Contact Me</a>
                        </div>
                    </div>

                    <div>
                        <img  src={codingPerson} alt='coding' title='codingPerson' className='text-img'/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main