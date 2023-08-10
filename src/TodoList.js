import React from 'react'
import { useState } from 'react';

function TodoList() {
    const [activity,setActivity] = useState("")
    const [listData,setlistData] = useState([])
    // const [removebtn,setRemovebtn] = useState("")

    function addActivity(){
//   setlistData([...listData, activity])//async/await
//   console.log(listData)
    setlistData((listData)=>{
     const updatedList = [...listData,activity]
     console.log(updatedList)
     setActivity("")
     return updatedList
    })
}
    function removeActivity(i){
       const updatelist = listData.filter((elem,id)=>{
        return i!=id;
       })
       setlistData(updatelist)
    }
    function removeall(){
        setlistData([])
    }

  return (
    <>
    <div className='container'>
        <div className='header'>TODO LIST</div>

        <input type={"text"} placeholder="Add Activity" value={activity} 
        onChange={(e)=>setActivity(e.target.value)}/>

      <button onClick={addActivity}>Add</button>

      <p className='list-Heading'>Here is your List : {")"}</p>

      {listData!=[] && listData.map((data, i)=>{
           return (
           <>
           <p key={i}>
            <div className='listData'>{data}</div>

          <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
            </p>  
           </>
           )
})}
{listData.length>=1 &&  <button onClick={removeall}>Remove All</button>}
    </div> 
    </>
  )
}

export default TodoList;
