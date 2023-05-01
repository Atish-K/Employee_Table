import React, { useEffect, useState, useRef, useContext } from "react";
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from "react-router-dom";
import axios from "axios";
import {CSVLink} from "react-csv"
import Dropdown from 'react-bootstrap/Dropdown';
import { adddata, dltdata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";


const headers =[
  {label:'Employee Id', key: 'Eid'},
  {label:'Employee Name', key: 'Ename'},
  {label:'Work Location', key: 'work'},
  {label:'Gender', key: 'gender'},
  {label:'Religion', key: 'religion'},
  {label:'Category', key: 'category'},
  {label:'Category Certificate', key: 'catcerti'},
  {label:'DOB', key: 'DOB'},
  {label:'DOJ', key: 'DOJ'},
  {label:'Experience', key: 'exp'},
  {label:'Current Address', key: 'add'},
]

const Home = () => {

  const [getuserdata,setUserdata] = useState([]);
  const [downloadedData, setDownloadedData] = useState([]);
  const csvDownloadRef = useRef(0);
  console.log(getuserdata);

  const {udata, setUdata} = useContext(adddata);
  const {updata, setUpdata} = useContext(updatedata);
  const {deldata, setdeldata} = useContext(dltdata);

  const fetchDataToDownload  = () => {
    axios
    .get("https://emptablebackend.onrender.com/getdata")
    .then(({data})=> {
      setDownloadedData(data);
      setTimeout(()=> {
        csvDownloadRef.current.link.click();
      }, 500);
    })
    .catch((error) => alert("Error happened"));
  };

  // const fetchData = () =>{
  //   axios
  //   .get("http://localhost:8003/getdata")
  //   .then(({data})=>{
  //     setUserdata(data);
  //   })
  //   .catch((error) => alert("error happened"))
  // }

  const getdata = async(e)=>{


    const res = await fetch("https://emptablebackend.onrender.com/getdata",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data){
        console.log("error ");
    }
    else{
      setUserdata(data)
      console.log("get data");
    }
}

useEffect(()=>{
  getdata();
},[])

const deleteuser = async(id)=>{

  const res2 = await fetch(`https://emptablebackend.onrender.com/deleteuser/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if(res2.status === 422 || !deletedata){
    console.log("error");
  }
  else{
    console.log("user deleted");
    setdeldata(deletedata)
    getdata();
  }
}


    return (
      <>
      {
        udata ?
        <>
        
        <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{udata.Ename}</strong> added Successfully!
      <button type="button" class="btn-close"  data-bs-dismiss="alert" aria-label="Close"><a href="/" className="link_close">X</a></button>
      </div>
      </> : ""
      }
      {
        updata ?
        <>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{updata.Ename}</strong> updated Successfully!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><a href="/">X</a></button>
      </div>
      </> : ""
      }
      {
        deldata ?
        <>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{deldata.Ename}</strong> deleted Successfully!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><a href="/">X</a></button>
      </div>
      </> : ""
      }
      
      
        <div className="mt-5">
            <div className="container">
            {/* <CSVLink data={getuserdata} >
         
              <button className='export_btn' >Export To Csv</button>
            
            </CSVLink> */}

            {/* <CSVLink data={data} headers={headers} filename="parents.csv">
          <button className="btn btn-primary mb-2">Export</button>
        </CSVLink> */}
        <CSVLink
          headers={headers}
          data={downloadedData}
          filename="Employee.csv"
          className="hidden"
          ref={csvDownloadRef}
          target="_blank"
        />
        <button
          className="btn btn-primary mb-2"
          onClick={fetchDataToDownload}
          style={{ marginLeft: "5px" }}
        >
          Export To CSV
        </button>
            
                <div className="add_btn mt-2 mb-2">
                    <NavLink to="/register" className="btn btn-primary" >Add data</NavLink>
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
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>

                    {
                        getuserdata.map((element,id)=>{
                          return(
                            <>
                            <tr>
                        <th scope="row">{id+1}</th>
                        <td>{element.Eid}</td>
                        <td>{element.Ename}</td>
                        <td>{element.work}</td>
                        <td>{element.gender}</td>
                        <td>{element.religion}</td>
                        <td>{element.category}</td>
                        <td>{element.catcerti}</td>
                        <td>{element.DOB}</td>
                        <td>{element.DOJ}</td>
                        <td>{element.exp}</td>
                        <td>{element.add}</td>
                        <td></td>
                        <td className="d-flex justify-content-between">
                           {/* <NavLink to={`view/${element._id}`}><button className="btn btn-success "><RemoveRedEyeIcon /></button></NavLink>
                            <NavLink to={`edit/${element._id}`}><button className="btn btn-primary mx-2"><CreateIcon/></button></NavLink>
                            <button className="btn btn-danger " onClick={()=>deleteuser(element._id)}><DeleteOutlineIcon/></button> */}
                            <Dropdown>
                                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item >
                                    <NavLink to={`view/${element._id}`} className="text-decoration-none">
                                      <i class="fa-solid fa-eye" style={{ color: "green" }}></i> <span>View</span>
                                    </NavLink>
                                  </Dropdown.Item>
                                  <Dropdown.Item >
                                    <NavLink to={`/edit/${element._id}`} className="text-decoration-none">
                                      <i class="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i> <span>Edit</span>
                                    </NavLink>
                                  </Dropdown.Item>
                                  <Dropdown.Item >
                                    <div onClick={()=>deleteuser(element._id)}>
                                      <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                        </td>
                      </tr>
                            </>
                          )
                        })
                    }
                      
                   
                    </tbody>
                  
                  </table>

            </div>
        </div>
        </>
    )
}
export default Home