import React from 'react'

export const Select = (props) => {
    const {lbl,name,opitons,fnChange,val,errorMsg,isShowErrorMsg} =props;

  return (
    <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
            <b>{lbl} : </b>
        </div>
        <div className='col-sm-3'>
           <select name={name} onChange={fnChange}  className='form-control'>
                <option value="">Please Select</option>
                {
                    opitons.map((values,ind)=>{
                        return <option selected={values==val}key={ind} values={values}>{values}</option>
                    })
                }
           </select>
        </div>
        <div className='col-sm-4'>
        {isShowErrorMsg && <b className='text-danger'>{errorMsg}</b>}
        </div>
    </div>
  )
}
