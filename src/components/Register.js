import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { adddata } from "./context/ContextProvider";

const Register = () => {

    const {udata, setUdata} = useContext(adddata);

    const history = useHistory("");
    
    const [inpval,setINP] = useState({
        Eid:"",
        Ename:"",
        work:"",
        gender:"",
        religion:"",
        category:"",
        catcerti:"",
        DOB:"",
        DOJ:"",
        exp:"",
        add:""

    })
    const setdata = (e)=>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setINP((preval)=>{
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async(e)=>{
        e.preventDefault();

        const {Eid,Ename,work,gender,religion,category,catcerti,DOB,DOJ,exp,add} = inpval;

        const res = await fetch("https://emptablebackend.onrender.com/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Eid,Ename,work,gender,religion,category,catcerti,DOB,DOJ,exp,add
            })
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            alert("error");
            console.log("error ");
        }
        else{
            // alert("data added");
            history.push("/");
            setUdata(data);
            console.log("data added");
        }
    }
return (
<div className="container">
    <NavLink to="/">Home</NavLink>
    <form className="mt-3">
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="EmployeeID" class="form-label">Employee ID</label>
                <input type="string" value={inpval.Eid} onChange={setdata} name="Eid" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="EmployeeName" class="form-label">Employee Name</label>
                <input type="text" value={inpval.Ename} onChange={setdata} name="Ename" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="work" class="form-label">Work Location</label>
                <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control"  />
            </div>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                  <Form.Label>Select Your Gender</Form.Label>
                  <Form.Check
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    onChange={setdata}
                  />
                  <Form.Check
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    onChange={setdata}
                  /></Form.Group>
            {/* <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Gender</label>
                <input type="text" value={inpval.gender} onChange={setdata} name="gender" class="form-control"  />
            </div> */}
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="religion" class="form-label">Religion</label>
                <input type="text" value={inpval.religion} onChange={setdata} name="religion" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="category" class="form-label">Category</label>
                <input type="text" value={inpval.category} onChange={setdata} name="category" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="catcerti" class="form-label">Category Certificate</label>
                <input type="text" value={inpval.catcerti} onChange={setdata} name="catcerti" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="DOB" class="form-label">DOB</label>
                <input type="date" value={inpval.DOB} onChange={setdata} name="DOB" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="DOJ" class="form-label">DOJ</label>
                <input type="date" value={inpval.DOJ} onChange={setdata} name="DOJ" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exp" class="form-label">Expereince</label>
                <input type="number" value={inpval.exp} onChange={setdata} name="exp" class="form-control"  />
            </div>
            <div class="mb-3 col-lg-12 col-md-12 col-md-12">
                <label for="add" class="form-label">CurrentAddress</label>
                <textarea value={inpval.add} name="add" onChange={setdata} className="form-control" id="" cols="20" rows="4"></textarea>
            </div>

            <button type="submit" onClick={addinpdata} class="btn btn-primary mb-3">Submit</button>
        </div>
    </form>
</div>
);
};

export default Register;