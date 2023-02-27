import React from 'react'

const Home = () => {
  return (
    <div className='mt-5'>
        <div className='container'>
            <div className='add_btn mt-2 mb-2' >
                <button className='btn btn-primary'>Add data</button>
            </div>
            <table class="table">
  <thead>
    <tr className='table-dark'>
      <th scope="col">Id</th>
      <th scope="col">Student</th>
      <th scope="col">Semester</th>
      <th scope="col">Subject</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><i className='fas fa-eye'></i></button>
        <button className='btn btn-primary'><i className='fas fa-pen'></i></button>
        <button className='btn btn-danger'><i className='fas fa-trash'></i></button>
        </td></tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home