import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {

    const [inputvalue, setInputValue] = useState({
        name: "",
        semester: "",
        subject: "",
        mark: "",
        message: "",
       })
    
        const setData = (e) =>{
          console.log(e.target.value)
          const {name, value} = e.target;
          setInputValue((prevalue) =>{
            return {
              ...prevalue,
              [name] : value,
            }
          })
        }
  return (
    <div className='container'>
    <NavLink to='/'>Home</NavLink>
    <form className='mt-5'>
      <div className='row'>
  <div class="mb-3 col-lg-6 col-md-6 col-12" >
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" value={inputvalue.name} onChange={setData} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Semester</label>
    <input type="number" value={inputvalue.semester}  onChange={setData} name='semester' class="form-control" id="exampleInputPassword1" />
  </div>

  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Subject</label>
    <input type="text" value={inputvalue.subject} onChange={setData} name='subject' class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 col-lg-6 col-md-6 col-12">
    <label for="exampleInputPassword1" class="form-label">Mark</label>
    <input type="number" value={inputvalue.mark} onChange={setData} name='mark' class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 col-lg-12 col-md-12 col-12">
    <label for="exampleInputPassword1" class="form-label">Message to Parent</label>
    <textarea name="message" id="" value={inputvalue.message} onChange={setData} className='form-control' cols="30" rows="5"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary" >Submit</button>
  </div>
</form>
  </div>
  )
}

export default Edit