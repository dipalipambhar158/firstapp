import { useState , useEffect } from "react";
import { Container , Row , Col } from "react-bootstrap";

function Main(){

    const initialValues = {
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
    const [data,setdata] = useState(initialValues);
    const [mydata,myalldata] = useState([]);
    const[edit,editdata] = useState([]);
    const[isedit,issetedit] = useState();
    const[editid,seteditid] = useState(-1);
    const[search,setsearch] = useState('');

    const handleChange = (e) =>{
        setdata({...data,[e.target.name]:e.target.value});
    }

    const btnhandler = () =>{
        data.total = parseInt(data.s1) + parseInt(data.s2) + parseInt(data.s3) + parseInt(data.s4) + parseInt(data.s5);
        data.per = data.total/5;
        console.log(data);

        if(isedit){
            let edata = [...mydata];
            edata[editid] = data
            myalldata(edata)
            setdata({
                    rno:"",
                    name:"",
                    s1:"",
                    s2:"",
                    s3:"",
                    s4:"",
                    s5:"",
                    total:"",
                    per:""
            })
        }
        else{
            myalldata(mydata =>[...mydata,data]);
        }

    }
    const deletehandler = (k) =>{
        console.log(k);
        const newPeople = mydata.filter((t,i) => i !==k);
        myalldata(newPeople);
    }
    const edithandler = (k) =>{
        seteditid(k);
        issetedit(true)
        const newPeople = mydata[k];
        console.log(newPeople);
        setdata(newPeople);
    }

    useEffect(()=>{
        console.log(mydata);
        console.log(edit)
    },[mydata])
    return(
        <>
            <h3 className="text-center">Student Result</h3>
            <div className="container ">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-2">
                                Roll NO
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="rno" value={data.rno} onChange={handleChange} placeholder="Enter roll no"></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                Name
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="name" value={data.name} onChange={handleChange} placeholder="Enter name"></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                Python
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="s1" value={data.s1} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                Rubby
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="s2" value={data.s2} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                Php
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="s3" value={data.s3} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                React
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="s4" value={data.s4} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-2">
                                Dart
                            </div>
                            <div className="col-lg-8">
                                <input type="text" className="form-control" name="s5" value={data.s5} onChange={handleChange}></input>
                            </div>
                        </div>
                       <div className="text-center mt-3"><button className="btn btn-outline-success" onClick={btnhandler} >Submit</button></div>
                    </div>
                </div>
            </div>



            <Container>
                <Row className="text-center mt-4">
                    <Col lg={12}>
                        <input type="search" placeholder="Search" onChange={(e) => setsearch(e.target.value)}></input>
                    </Col>
                </Row>

                <table border={2}>
                    <tr>
                        <th>Rno</th>
                        <th>Name</th>
                        <th>Sub1</th>
                        <th>Sub2</th>
                        <th>Sub3</th>
                        <th>Sub4</th>
                        <th>Sub5</th>
                        <th>Total</th>
                        <th>Per</th>
                        <th>Action</th>
                    </tr>
                    {

                        mydata.filter((el) =>{
                            if(search){
                                return el.name.includes(search)
                            }
                            else{
                                return el
                            }
                        }).map((item,k)=>{
                            return(
                                <tr>
                                    <th>{item.rno}</th>
                                    <th>{item.name}</th>
                                    <th>{item.s1}</th>
                                    <th>{item.s2}</th>
                                    <th>{item.s3}</th>
                                    <th>{item.s4}</th>
                                    <th>{item.s5}</th>
                                    <th>{item.total}</th>
                                    <th>{item.per}</th>
                                    <th>
                                        <button onClick={()=>(deletehandler(k))}>Delete</button>
                                    </th>
                                    <th>
                                        <button onClick={()=>(edithandler(k))}>Edit</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </table>
            </Container>
        </>
    )
}
export default Main