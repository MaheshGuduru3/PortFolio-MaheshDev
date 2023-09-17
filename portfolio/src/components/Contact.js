import React, { useState } from 'react'

const Contact = () => {

    const [email , setEmail] = useState('')
    const [querie , setQuerie] = useState('')

    const submitHandlers = async (e)=>{
          e.preventDefault()

          const obj = {
            email,
            query: querie
          }
          await fetch("http://localhost:3001/api/accept",{
             method:"POST",
             headers:{
                'Content-Type':"application/json"
             },
             body:JSON.stringify(obj)
          }).then((res)=>res.json())
            .then(data=>{
                if(data){
                    console.log("success")
                }
            })
            .catch(err=>console.log(err.message))

       
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
                 <ul>
                    <li><a className=' btn btn-outline-primary'><i class="bi bi-twitter" style={{color:"white"}}></i></a></li>
                    <li><a className=' btn btn-outline-primary'><i class="bi bi-linkedin" style={{color:"white"}}></i></a></li>
                    <li><a className=' btn btn-outline-primary'><i class="bi bi-github" style={{color:"white"}}></i></a></li>
                 </ul>
            </div>
         </div>
    </div>
  )
}

export default Contact