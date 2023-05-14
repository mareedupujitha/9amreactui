import React, { useState } from 'react'
import { inputControlsArr } from './config'
import { Input } from '../InputControls/Input'
import { TextArea } from '../InputControls/TextArea'
import { Select } from '../InputControls/Select'
import { fnValidate } from './validate'
import { Loader } from '../Loader/Loader'
import { toast } from 'react-toastify';
import axios from 'axios'
export const Question = () => {
  const [inputControls,setInputControls]=useState(inputControlsArr)
  const [isShowLoader, setIsShowLoader]=useState(false)
  const fnChange=(eve)=>{
     const {value,name} =eve.target
     let _inputControls=JSON.parse(JSON.stringify(inputControls))
     let inputControlObj=_inputControls.find((obj)=>obj.name==name)
     inputControlObj.val=value
     fnValidate(inputControlObj)
     setInputControls(_inputControls)
  }
  const fnSave=()=>{
    let dataObj={}
    let _inputControls=JSON.parse(JSON.stringify(inputControls))
    _inputControls.forEach((obj)=>{
        dataObj[obj.name]=obj.val
        fnValidate(obj)
    })
    let isInvalid=_inputControls.some((obj)=>{
        return obj.isShowErrorMsg
    })
    setInputControls(_inputControls)
    if(isInvalid)return;
    setIsShowLoader(true)
    console.log({data:dataObj})
    axios.post("http://127.0.0.1:2020/que/save-que",{data:dataObj})
    .then((res)=>{
        const {acknowledged,insertedId}=res.data
        setIsShowLoader(false)
        if(acknowledged && insertedId){
            toast.success('Successfully Inserted')
            _inputControls.forEach((obj)=>{
                obj.val=''
            })
            setInputControls(_inputControls)
        }else{
            toast.error('Not inserted, try again.')
        }
    })
    .catch((e)=>{
        setIsShowLoader(false)
        toast.error('Something went wrong',+e)
    })
   
  }
  return (
    <div className='container-fluid mt-5'>
        {
            inputControls.map((obj,index)=>{
                switch(obj.tag){
                    case 'input':
                        return <Input key={index} fnChange={fnChange} {...obj} />
                    case 'textarea':
                        return <TextArea key={index} fnChange={fnChange} {...obj} />
                    case 'select':
                        return <Select key={index} fnChange={fnChange} {...obj} />
                        
                }
            })
        }
        <div className='row'>
            <div className='offset-sm-5 col-sm-7'>
                <button onClick={fnSave} className='btn btn-primary'>SAVE</button>
            </div>
        </div>
       {isShowLoader &&  <Loader></Loader>}
    </div>
  )
}
