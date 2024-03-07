import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
useEffect(() => {
  axios
  .get("https://restcountries.com/v3.1/alpha/{arg}")
  .then((reponse)=>setdata(reponse.data))
  .catch((error) => console.log(error));
  
}, [])

export default function Land(props) {
const {id}= useParams()

  return (
    <section className='h-screen bg-[#202d36]'>
         <div className="w-[100%] p-8 bg-[#2b3743] flex justify-between mb-[50px]">
        <h1 className="font-bold text-white">WHERE IN THE WORLD</h1>
        <h1 className="font-bold cursor-pointer">dark mode</h1>
        </div>  
        {props.data.map((value, index) => {
          console.log('bonj',value.border);
   
            return(
              value.name.common == id ?
              <div key={index} className='w-full h-[75%] flex flex-col p-10 pl-[150px] '>
              {  console.log(value.name.common)}
                    <Link className='h-[40px] mb-10 w-[120px] bg-[#2b3743] rounded-xl flex  justify-center items-center  ' to='/'> Back</Link>
                    <div className='h-full w-[80%] flex gap-24'>
                      <img className='h-[80%] w-[50%]' src={value.flags.png} alt="" />
                        <div className=' p-8'>
                         <h1 className='text-2xl text-white font-bold'> {value.name.common}</h1>
                         <div className='flex flex-col flex-wrap h-[200px] gap-5 pt-10'>
                         <p> <span className='text-white'> Native Name : </span> {value.name.nativeName[Object.keys(value.name.nativeName)[0]].common}</p>
                         <p> <span className='text-white'> Population : </span> {value.population}</p>
                         <p> <span className='text-white'> Region : </span> {value.region}</p>
                         <p> <span className='text-white'> Sub Region : </span> {value.subregion}</p>
                         <p> <span className='text-white'> Capital : </span> {value.capital}</p>
                         <p> <span className='text-white'> Top Level Domain : </span> {value.tld}</p>
                         <p> <span className='text-white'> Currencies : </span> {value.currencies[Object.keys(value.currencies)[0]].name}</p>
                         <p> <span className='text-white'> Languages : </span> {Object.values(value.languages).join(',')}</p>
                          <p> {}</p>
                         </div>
                     
                        </div>
                    </div>
              
                </div>:""
       
        )
          
        })}

    </section>
  )
}
