import React from 'react'

export const Input = (props) => {
    const {lbl,type,name, options, fnChange,val,values,errorMsg,isShowErrorMsg} =props;
  const fnPrepareInputControl=()=>{
     switch(type){
        case 'text':
            return <input value={val} onChange={fnChange} name={name} type={type} className='form-control' />
        case 'radio':
            return options.map((value,index)=>{
                return <><input checked={values[index]==val} key={index} value={values[index]} name={name} onChange={fnChange} type={type} className='me-2' /><span className='me-3'>{value}</span></>
            })
     }
  }
  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl} : </b>
        </div>
        <div className='col-sm-3'>
            {fnPrepareInputControl()}
        </div>
        <div className='col-sm-4'>
            {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
