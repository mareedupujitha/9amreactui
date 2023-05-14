import React from 'react'

export const TextArea = (props) => {
    const {lbl,name,fnChange,val,errorMsg,isShowErrorMsg} =props;

  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl} : </b>
        </div>
        <div className='col-sm-3'>
           <textarea name={name} value={val} onChange={fnChange} className='form-control'></textarea>
        </div>
        <div className='col-sm-4'>
        {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
