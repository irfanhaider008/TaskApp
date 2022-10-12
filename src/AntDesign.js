import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Select, Space } from 'antd';
import { Field } from 'rc-field-form';
import Operation from 'antd/lib/transfer/operation';
import UserAddOutlined from '@ant-design/icons/UserAddOutlined'
import MinusCircleOutlined from '@ant-design/icons/MinusCircleOutlined'



const AntDesign = () => {
 const onFinished = (values)=>{
  console.log({values})
 }
  return (
   <div>
    <Form onFinish={onFinished} >
      <Form.Item name = {"University"} label="Enter Universiy"  rules={[{required: true,message:"University Name required"},]}>
        <Input/>
      </Form.Item>
      <Form.Item name = {"Degree"} label="Enter Degree"  rules={[{required: true,message:"Degree name required"},]}>
        <Input/>
      </Form.Item>
      <Form.List name={"student"}>
        {(fields, {add,remove})=>(
          <>
          {fields.map((field,index)=>{
    return(
      <Space key={field.key} direction="horizontal" size={12}>
      <Form.Item
        name = {[field.name,"first"]}
        label = {`${index+1}-Name`}
        rules={[{required: true,message:"First name required"},]}
        >
          <Input placeholder='First Name'  />
      </Form.Item>
      
      <Form.Item
        name = {[field.name,"Last"]}
        label = {`${index+1}-Name`}
        rules={[{required: true,message:"last name required"},]}
        >
          <Input placeholder='First Name'  />
      </Form.Item>
      <Form.Item
      name={[field.name,"gender"]}>
    <Select placeholder="Gender">
      {["Male","Female"].map(gender=>{
        return <Select.Option values={gender} key={gender}>{gender}</Select.Option>
      })}
    </Select>
      </Form.Item >
      <MinusCircleOutlined style ={{height:40,color:'red'}} onClick={()=>{
        remove(field.name)
      }} />
      <br />
      </Space>
      
    );
  })}
          <Form.Item>
            <Button onClick={()=>add()} type='primary' ><UserAddOutlined /> Add a Student</Button>
          </Form.Item>
          </>
        )}

      </Form.List>
      <Button  htmlType='submit' type='primary' >Submit</Button>
    </Form>
   </div>
  );
};

export default AntDesign;