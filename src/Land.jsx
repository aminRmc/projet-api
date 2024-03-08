import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState,useRef, useEffect } from 'react'

export default function Land(props) {
    const { id } = useParams()
    const btn = useRef()
    useEffect(() => {
      props.style == 0 ? btn.current.checked = 'checked' :'' 
    }, [props.style])
    return (
        <section className={`${props.style == 1 ? 'bg-white' : 'bg-[#202d36]'} h-screen`}>
            <div className="w-[100%] p-8 bg-[#2b3743] flex justify-between mb-6">
    
        <h1 className="font-bold text-white">WHERE IN THE WORLD</h1>
 
        <label className="cursor-pointer grid place-items-center">
  <input ref={btn} type="checkbox"  value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onClick={() => props.setstyle(props.style == 1 ? 0 :1)}/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
      </div>
          

            {props.data.map((value, index) => {
                console.log('bonj', value.border);
                return (
                    value.cca3 == id ?
                        <div key={index} className='w-full h-[75%] flex flex-col p-2 pl-[150px] '>
                            {console.log(value.name.common)}
                            <Link className='btn w-[150px] m-8' to='/'> Back</Link>
                            <div className='h-full w-[80%] flex gap-24'>
                                <img className='h-[80%] w-[50%] border-solid border-black border-[1px]' src={value.flags.png} alt="" />
                                <div className=' p-8'>
                                    <h1 className={`${props.style == 1 ? `text-black ` : 'text-white'} font-bold text-xl`}> {value.name.common}</h1>
                                    <div className='flex flex-col flex-wrap h-[200px] gap-5 pt-10'>
                                        {value.name.nativeName && 
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Native Name : </span> {value.name.nativeName[Object.keys(value.name.nativeName)[0]].common}</p>}
                                        {value.population && 
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Population : </span> {value.population}</p>}
                                        {value.region &&
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Region : </span> {value.region}</p>}
                                        {value.subregion &&
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Sub Region : </span> {value.subregion}</p>}
                                        {value.capital !== undefined &&
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Capital : </span> {value.capital}</p>}
                                        {value.tld &&
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Top Level Domain : </span> {value.tld}</p>}
                                        {value.currencies && value.currencies[Object.keys(value.currencies)[0]].name &&
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Currencies : </span> {value.currencies[Object.keys(value.currencies)[0]].name}</p>}
                                        {value.languages && Object.values(value.languages).length > 0 &&
                                            <p> <span className={`${props.style == 1 ? `text-black` : 'text-white'}`}> Languages : </span> {Object.values(value.languages).join(',')}</p>}
                                    </div>
                                    <div className='w-[500px] justify-center flex gap-5 flex-wrap pt-16'>
                                        {value.borders && value.borders.length > 0 &&
                                            value.borders.map((value, index) => {
                                                return (
                                                    <Link key={index} to={`/${value}`} className='bg-[#2b3743] h-[50px] btn w-[100px] flex justify-center items-center rounded-lg'>{value}</Link>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div> : null
                )
            })}
        </section>
    )
}
