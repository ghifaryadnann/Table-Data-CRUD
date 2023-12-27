import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const About = () => {
    const [data, setData] = useState (null)


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_GETDATA}`)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


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


  return (
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
             <button className='bg-blue-700 hover:bg-blue-500 duration-300 p-2 m-1 rounded text-white'>Edit</button>
             <button className='bg-red-700 hover:bg-red-500 duration-300 p-2 m-1 rounded text-white'>Delete</button>
            </Table.Cell>
          </Table.Row>
                )
            })}
          
         
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default About