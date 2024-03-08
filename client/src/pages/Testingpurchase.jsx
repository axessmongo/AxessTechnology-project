import React from 'react'
import axios from 'axios'

function Testingpurchase() {
  return (
    <div className='container'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Firstname</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
      <th scope="col">company</th>
      <th scope="col">service</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Testingpurchase