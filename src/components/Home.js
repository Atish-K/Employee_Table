import React from "react";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary">Add data</button>
                </div>

                <table class="table">
                    <thead>
                      <tr className="table-dark">
                        <th scope="col">No.</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Work Location</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Religion</th>
                        <th scope="col">Category</th>
                        <th scope="col">Category Certificate</th>
                        <th scope="col">DOB</th>
                        <th scope="col">DOJ</th>
                        <th scope="col">Expereince</th>
                        <th scope="col">Current Address</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td className="d-flex justify-content-between">
                            <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                            <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                            <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                   
                    </tbody>
                    <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td className="d-flex justify-content-between">
                              <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                              <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                              <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                          </td>
                        </tr>
                     
                      </tbody>
                  </table>

            </div>
        </div>
    )
}
export default Home