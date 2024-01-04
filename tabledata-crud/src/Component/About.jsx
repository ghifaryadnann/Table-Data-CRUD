import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const About = () => {
    const [data, setData] = useState (null)
      const [input, setInput] = useState ({
        name : "",
        course : "",
        score : "",
      })
      const [fetchStatus, setFetchStatus] = useState(true)
      const [currentId, setCurrentId] = useState(-1)


    useEffect(() => {
      if(fetchStatus === true){

axios.get(`${import.meta.env.VITE_GETDATA}`)
        .then((res) => {
            setData([...res.data])
            console.log(res.data)

           
        })
        .catch((err) => {
            console.log(err)
        })
 setFetchStatus(false)
      }
        
    },[fetchStatus, setFetchStatus])


    const handleNilai = (score) => {
        if (score >= 90){
            return "A"
        }else if (score >= 80 && score < 90){
            return "B"
        }else if (score >=70 && score <80){
            return "C"
        }else if (score >=60 && score < 70){
            return "D"
        }else{
            return "E"
        }
    }

    const handleInput = (event) => {
     
      let name = event.target.name
      let value = event.target.value

      if ( name === "name"){
        setInput({...input, name : value})
      } else if ( name === "course" ) {
        setInput({...input, course : value})
      } else if (name === "score" && value === '' || (parseInt(value) >= 0 && parseInt(value) <= 100)) {
        setInput({...input, score : value})
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault()

      let {name, course, score} = input

      if (currentId === -1) {

      axios.post(`${import.meta.env.VITE_GETDATA}`, {name, course, score})
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })
      .catch((error) => {
        console.log(error)
      })

        
      } else {
        axios.put(`${import.meta.env.VITE_GETDATA}/${currentId}`, {name, course, score})
        .then((res)=> {
          setFetchStatus(true)
          s
        })
      }

      setCurrentId(-1)

      

      setInput({
        name : '',
        course : '',
        score : ''
      })
    }

    const handleDelete = (event) => {
     
      let idData = parseInt(event.target.value)

     
axios.delete(`${import.meta.env.VITE_GETDATA}/${idData}`)
.then((result) => {
  
  Swal.fire({
    
    icon: "success",
    title: "Your Data Has Been Deleted",
    showConfirmButton: false,
    timer: 1500
  });
        console.log(result)
 
       
        setFetchStatus(true)

      })

    }


    const handleEdit = (event) => {
      let idData = parseInt(event.target.value)

      setCurrentId(idData)

      axios.get(`${import.meta.env.VITE_GETDATA}/${idData}`)
      .then((result)=> {
        let data = result.data
        
        setInput({
          name : data.name,
          score : data.score,
          course : data.course
          
        })
      })
      .catch((err) => {
        console.log(err)
      })

    
    }


    
   

  return (
    <>
     <div className='container m-auto mt-5'>
        
       <div className="overflow-x-auto ">
        <h1 className='text-center text-2xl m-4 font-black text-amber-500'>TABLE DATA</h1>
      <Table >
        <Table.Head className='text-center '>
          <Table.HeadCell className='bg-slate-600 text-white text-center'>No</Table.HeadCell>
          <Table.HeadCell className='bg-slate-600 text-white'>Nama</Table.HeadCell>
          <Table.HeadCell className='bg-slate-600 text-white'>Mata Kuliah</Table.HeadCell>
          <Table.HeadCell className='bg-slate-600 text-white'>Nilai</Table.HeadCell>
          <Table.HeadCell className='bg-slate-600 text-white'>Index Nilai</Table.HeadCell>
          <Table.HeadCell className='bg-slate-600 text-white text-center'>Action</Table.HeadCell>
        
        </Table.Head>
        <Table.Body className="divide-y">
            {data !== null && data.map((data, index) => {
                return (

                    <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
              {index+1}
            </Table.Cell>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{data.course}</Table.Cell>
            <Table.Cell>{data.score}</Table.Cell>
            <Table.Cell>{handleNilai(data.score)}</Table.Cell>
            <Table.Cell className='text-center'>
             <button className='bg-blue-700 hover:bg-blue-500 duration-300 p-2 m-1 rounded text-white' onClick={handleEdit} value={data.id}>Edit</button>
             <button className='bg-red-700 hover:bg-red-500 duration-300 p-2 m-1 rounded text-white' onClick={handleDelete} value={data.id}>Delete</button>
            </Table.Cell>
          </Table.Row>
                )
            })}
          
         
        </Table.Body>
      </Table>
    </div>
    </div>

            {/* Input Form */}

<h1 className='text-[25px] text-amber-500 font-black text-center mt-[50px]'>INPUT DATA</h1>

<form onSubmit={handleSubmit}>
   <div className='w-full p-5 flex items-center justify-center'>
    <div className='w-full h-4/5 m-5 rounded-2xl bg-slate-400 p-5'>
      
      <h1 className='ms-2 '>Nama</h1>
      <input className='p-2 w-full rounded-2xl mt-2' type='text' onChange={handleInput} value={input.name} name='name'></input>
      <h1 className='ms-2 mt-2'>Mata Kuliah</h1>
      <input className='p-2 w-full  rounded-2xl mt-2' type='text' onChange={handleInput} value={input.course} name='course'></input>
      <h1 className='ms-2 mt-2'>Nilai</h1>
      <input className='p-2 w-full rounded-2xl mt-2 ' type='text' onChange={handleInput} value={input.score} name='score'></input>
      <div>

        <button type='submit'  className='bg-red-700 p-2 rounded-2xl mt-4 w-full font-bold text-white hover:bg-red-500 hover:duration-300'>SUBMIT</button>
      
      </div>
     
    </div>
  </div>
 </form>
 
    </>
   
  )
}

export default About