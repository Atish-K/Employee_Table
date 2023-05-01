import React, { useContext, useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { updatedata } from "./context/ContextProvider";



const Edit = () => {

    // const [getuserdata,setUserdata] = useState([]);
    // console.log(getuserdata);

    const {updata, setUpdata} = useContext(updatedata)

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

        const {id} = useParams("");
        console.log(id);
    
        const getdata = async()=>{
    
    
            const res = await fetch(`https://emptablebackend.onrender.com/getuser/${id}`,{
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
                setINP(data)
              console.log("get data");
            }
        }

        useEffect(()=>{
            getdata();
        },[]);

        const updateuser =async(e)=>{
            e.preventDefault();

            const {Eid,Ename,work,gender,religion,category,catcerti,DOB,DOJ,exp,add} = inpval;

            const res2 = await fetch(`https://emptablebackend.onrender.com/updateuser/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    Eid,Ename,work,gender,religion,category,catcerti,DOB,DOJ,exp,add
                })
            });

            const data2 = await res2.json();
            console.log(data2);

            if(res2.status === 422 || !data2){
                alert("fill the data")
            }else{
                //alert("data added");
                history.push("/")
                setUpdata(data2);
            }

        }

  return (
    <div className="container">
    <NavLink to="/">Home2</NavLink>
    <form className="mt-3">
        <div className="row">
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputEmail1" class="form-label">Employee ID</label>
                <input type="text" value={inpval.Eid} onChange={setdata} name="Eid" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Employee Name</label>
                <input type="text" value={inpval.Ename} onChange={setdata} name="Ename" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Work Location</label>
                <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Gender</label>
                <input type="text" value={inpval.gender} onChange={setdata} name="gender" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Religion</label>
                <input type="text" value={inpval.religion} onChange={setdata} name="religion" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Category</label>
                <input type="text" value={inpval.category} onChange={setdata} name="category" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Category Certificate</label>
                <input type="text" value={inpval.catcerti} onChange={setdata} name="catcerti" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">DOB</label>
                <input type="text" value={inpval.DOB} onChange={setdata} name="DOB" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">DOJ</label>
                <input type="text" value={inpval.DOJ} onChange={setdata} name="DOJ" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-6 col-md-6 col-md-12">
                <label for="exampleInputPassword1" class="form-label">Expereince</label>
                <input type="text" value={inpval.exp} onChange={setdata} name="exp" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3 col-lg-12 col-md-12 col-md-12">
                <label for="exampleInputPassword1" class="form-label">CurrentAddress</label>
                <textarea value={inpval.add} name="add" onChange={setdata} className="form-control" id="" cols="20" rows="4"></textarea>
            </div>

            <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Edit;