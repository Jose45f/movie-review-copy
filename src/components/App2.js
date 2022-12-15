//Rating with box components
import './App.css';
import React, { useState} from 'react';

function App2() {
  const [inputarr,
    setInputarr] = useState([])

const [inputdata,
    SetInputdata] = useState({
      name: "",
       review: ""})

function changehandle(e) {

    SetInputdata({
        ...inputdata,
        [e.target.name]: e.target.value
    })

}

let {name, review} = inputdata;
function changhandle() {
    setInputarr([
        ...inputarr, {
            name,
            review
        }
    ])

    console.log(inputdata)
    SetInputdata({name: "", review: ""})

}
let delethandle =(i)=>{
    let newdataArr=[...inputarr]
    newdataArr.splice(i,1)
    setInputarr(newdataArr)
}

return (
    <div>
        <input
            type="text"
            name='name'
            value={inputdata.name}
            onChange={changehandle}
            placeholder="Enter Name"/>
        <input
            type="text"
            name='review'
            value={inputdata.review}
            onChange={changehandle}
            placeholder="Review"/>

        <button onClick={changhandle}>Enter
        </button><br/>
      <br/><br/>

        <table className='right' border={1} width="30%" cellPadding={10}>
            <tbody>
                <tr>
                    <td>No</td>
                    <th>Name </th>
                    <th>Review</th>
                    <th>Remove</th>
                </tr>
                {inputarr.length < 1 ?
                    <tr>
                        <td colSpan={4}>No reviews yet, want to change that?</td>
                    </tr>:
                inputarr.map((info, ind) => {
                    return (
                        <tr key={ind}>
                            <td>{ind + 1}</td>
                            <td>{info.name}</td>
                            <td>{info.review}</td>
                            <td><button onClick={()=>delethandle(ind)}>Delete</button></td>
                        </tr>
                    )
                })
}

            </tbody>
        </table>
    </div>
);
}



export default App2;
 