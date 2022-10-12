import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './toolkit/reducer/PostSlice';
import { Divider, Radio, Table } from 'antd';
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { setData } from './toolkit/reducer/GetData';

  
export default function Posts() {
   
    const {posts,loading} =useSelector((state)=>state.post)
    const {data} =useSelector((state)=>state.data)

    const dispatch = useDispatch();
    useEffect(()=>{
dispatch(getPosts())
dispatch(setData("Ali"))
    },[])

    if(loading){
        return <Dots/>
    }
    console.log("POSTS",posts)
  return (
    <div>
      <p>{data}</p>
        {posts.map(product => (
         <li>{product.title}</li>

 ))}   </div>


  )
}
