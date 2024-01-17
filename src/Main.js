import "./App.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function Main(){

  const initialvalues = {
    rno:"",   
    name:"",
    s1:"",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
    total:"",
    per:""

    };

  const[data,setData] = useState(initialvalues);       
  const[mydata,myalldata]=useState([]); 
  const[edit,editdata]=useState([]);
  const[isedit,issetedit]=useState(false); 
  const[editid,seteditid]=useState(-1);
  const[search,setSearch]=useState('')
    

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
}

const btnhandler = () => {
data.total= parseInt(data.s1) + parseInt(data.s2) + parseInt(data.s3) + parseInt(data.s4) + parseInt(data.s5);
data.per = data.total/5;

console.log(data);

if(isedit)
{
 let edata = [...mydata]
 edata[editid] = data;
 myalldata(edata)

 setData(
    {
        rno:"",   
        name:"",
        s1:"",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        total:"",
        per:""
     }
 )
}
else{
 myalldata(mydata => [...mydata,data]);

 setData(
    {
        rno:"",   
        name:"",
        s1:"",
        s2:"",
        s3:"",
        s4:"",
        s5:"",
        total:"",
        per:""
     }
 )
}


}
const deletehandler = (k) =>{
   console.log(k);
   const newPeople = mydata.filter((t,i) => i !== k );
   myalldata(newPeople);
}
const edithandler = (k) => {
   
seteditid(k);
issetedit(true)
const newPeople = mydata[k];
console.log(newPeople);
setData(newPeople);
}


useEffect(() => {
console.log(mydata);
console.log(edit);
},[mydata,edit])


    return(
        <Container>

        <div className='row'>
            <div className='col-lg-12 mb-5 mt-5 text-center'><h2>STUDENT FORM</h2></div>
        </div>
        <div className= 'row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>Roll No:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.rno} name="rno" onChange={handleChange} className="form-control"  placeholder="Enter Your ROll No" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>Name:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.name} name="name" onChange={handleChange} className="form-control"  placeholder="Enter Your Name" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>React Js:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.s1} name="s1" onChange={handleChange} className="form-control"  placeholder="Enter Your Marks" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>Node Js:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.s2} name="s2" onChange={handleChange} className="form-control"  placeholder="Enter Your Marks" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>Python:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.s3} name="s3" onChange={handleChange} className="form-control"  placeholder="Enter Your Marks" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>Rubby:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.s4} name="s4" onChange={handleChange} className="form-control"  placeholder="Enter Your Marks" />
            </div>
        </div>
        <div className='row mb-3'>
            <div className='col-lg-2'>
                <p className='fs-5'>Angular:</p>
            </div>
            <div className='col-lg-8'>
                <input type="text" value={data.s5} name="s5" onChange={handleChange} className="form-control"  placeholder="Enter Your Marks" />
            </div>
        </div>
      
      <div className="col-12 mb-4">
        <input type="submit" onClick={btnhandler} className="btn btn-success" />
      </div>
      <div className='row'>
        <div className='col-lg-12 mb-5'>
            <input type='search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </div>
      </div>

      <table className="row table" >
        <thead className="col-lg-12">
            <tr className="row table-dark p-3 fs-5">
                <th className="col-lg-1">RNo</th>
                <th className="col-lg-2">Name</th>
                <th className="col-lg-1">React</th>
                <th className="col-lg-1">Node</th>
                <th className="col-lg-1">Python</th>
                <th className="col-lg-1">Rubby</th>
                <th className="col-lg-1">Angular</th>
                <th className="col-lg-1">Total</th>
                <th className="col-lg-1">Per</th>
                <th className="col-lg-2">Action</th>
            </tr>
        </thead>

        {
            mydata.filter((el) => {
                if(search){
                    return el.name.includes(search)
                }
                else{
                    return el
                }
            }).map ((item,k)=>{
                return(
                    <tr className="row fs-5">
                        <th className="col-lg-1">{item.rno} </th>
                        <th className="col-lg-2">{item.name} </th>
                        <th className="col-lg-1">{item.s1} </th>
                        <th className="col-lg-1">{item.s2} </th>
                        <th className="col-lg-1">{item.s3} </th>
                        <th className="col-lg-1">{item.s4} </th>
                        <th className="col-lg-1">{item.s5} </th>
                        <th className="col-lg-1">{item.total} </th>
                        <th className="col-lg-1">{item.per} </th>
                        <th className="col-lg-2"><button className="btn btn-outline-danger px-3" onClick={()=> (deletehandler(k))}>Delete</button>
                        <button className="ms-3 btn btn-outline-success px-3" onClick={()=> (edithandler(k))}>Edit</button></th>
                    </tr>
                )
            })
        
        }
      </table>

        </Container>

    )

}

export default Main