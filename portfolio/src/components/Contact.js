import React, { useState } from 'react'
import { toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const [email , setEmail] = useState('')
    const [querie , setQuerie] = useState('')

    console.log(process.env.REACT_APP_SERVER)

    const submitHandlers = async (e)=>{
          e.preventDefault()

          const obj = {
            email,
            query: querie
          }
          await fetch( process.env.REACT_APP_SERVER ,{
             method:"POST",
             headers:{
                'Content-Type':"application/json"
             },
             body:JSON.stringify(obj)
          }).then((res)=>res.json())
            .then(data=>{
               
              if(data.success){
               toast.success(data.message)
              }
              else{
                toast.error(data.message)
              }
               
              })
            .catch(err=>{
               toast.error("server is Not Found")
            }) 

       
    }


  return (
    <div className='container-fluid p-0' style={{position:'relative', top:'3.5rem'}} id='contact'>
         <div className='container-fluid p-0'>
            <div className='container d-flex flex-column align-items-center p-5'>
                    <h4 className='fs-3 mb-2 fw-bold'>Contact Me</h4>
                    <form  className='footer_form' onSubmit={submitHandlers}> 
                      <div class="mb-3">
                         <label for="ControlInput1" class="form-label">Email address</label>
                         <input type="email" class="form-control" id="ControlInput1" placeholder="Email Address"  onChange={(e)=>setEmail(e.target.value)} required/>
                      </div>
                      <div class="mb-3">
                        <label for="Textarea1" class="form-label">Query</label>
                        <textarea class="form-control" id="Textarea1" onChange={(e)=>setQuerie(e.target.value)} required></textarea>
                      </div>
                      <button className='btn btn-danger'>Submit</button>
                    </form>
            </div>

            <div className='footer'>
                 <div className='fs-3 fw-thin'>@MaheshDev</div>
                 <ul style={{marginLeft:"-2rem"}}>
                    <li><a className=' btn btn-outline-primary' href={process.env.REACT_APP_TWITTER_URL}><i class="bi bi-twitter" style={{color:"white"}}></i></a></li>
                    <li><a className=' btn btn-outline-primary' href={process.env.REACT_APP_LINKEDIN_URL}><i class="bi bi-linkedin" style={{color:"white"}}></i></a></li>
                    <li><a className=' btn btn-outline-primary' href={process.env.REACT_APP_GITHUB_URL}><i class="bi bi-github" style={{color:"white"}}></i></a></li>
                 </ul>
            </div>
         </div>
         <ToastContainer />
    </div>
  )
}

export default Contact