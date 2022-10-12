import React,{useState,useEffect} from 'react'
import { Button, Popconfirm, Table } from 'antd';
import axios from 'axios' 
export default function TableData() {
    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
    loadingData();
    },[])
    const loadingData = async()=>{
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments")    
    setGridData(response.data)   
   console.log("DATAAAA<%%%",response)
    setLoading(false) 
}
const dataWithAge = gridData.map((item)=>({
    ...item,
 age:Math.floor(Math.random()*6) +20,

}));
const modifiedData = dataWithAge.map(({body,...item})=>({
    ...item,
    key:item.id,
    message:body
}));
const handleDelete =(value)=>{
    const dataSource = [...modifiedData];
   const filteredData = dataSource.filter((item)=>item.id !==value.id);
    setGridData(filteredData);
};

const columns =[
    {
        title:"ID",
        dataIndex:"id",
    },
    {
        title:"Name",
        dataIndex:"name",
        align:"center",
        editTable:true
    },
    {
        title:"Email",
        dataIndex:"email",
        align:"center",
        editTable:true
    },
    {
        title:"Age",
        dataIndex:"age",
        align:"center",
        editTable:true
    },
    {
        title:"Message",
        dataIndex:"message",
        align:"center",
        editTable:true
    },
    {
        title:"Action",
        dataIndex:"action",
        align:"center",
        render:(record)=>
        modifiedData.length>= 1 ?(
            <Popconfirm title="Are you sure want to delete?"
            onConfirm={()=>handleDelete(record)}
            >
                <Button danger type='primary'>Delete</Button>
            </Popconfirm>
        ):null,
    },
]
console.log("MODIFED DATA$$",modifiedData)


  return (
    <div>
        <Table
        columns={columns}
        dataSource={modifiedData}
        bordered
        loading={loading}
        />

    </div>
  )
}
