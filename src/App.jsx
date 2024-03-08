import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <Link to={`/${country.cca3}`} className="h-[400px] rounded-md bg-[#2b3743] w-[20%] mb-10">
      <img className="h-[50%] w-[100%] rounded-md border-solid border-[#202d36] border-[1px]" src={country.flags.png} alt="" />
      <div className="p-8 gap-2 flex flex-col">
        <h1 className="text-white text-xl mb-4">{country.name.common}</h1>
        <p><span className='text-white'>Population :</span> {country.population}</p>
        <p><span className='text-white'>Region :</span> {country.region}</p>
        <p><span className='text-white'>Capital :</span> {country.capital}</p>
      </div>
    </Link>
  );
}

export default function App({data,style,setstyle}) {
  const [searchValue, setSearchValue] = useState('');
  const [region, setRegion] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  console.log(  style);

  useEffect(() => {
    let filtered = data.filter(country =>
      country.region.toLowerCase().includes(region.toLowerCase()) &&
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, [region, searchValue, data]);
  
  const btn = useRef()
  useEffect(() => {
    style == 0 ? btn.current.checked = 'checked' :'' 
  }, [style])
  

  return (
    <section className={`${style === 1 ? 'bg-white' : 'bg-[#202d36]'}`}>
      <div className="w-[100%] p-8 bg-[#2b3743] flex justify-between mb-6">
        <h1 className="font-bold text-white">WHERE IN THE WORLD</h1>
 
        <label className="cursor-pointer grid place-items-center">
  <input ref={btn} type="checkbox"  value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onClick={() => setstyle(style == 1 ? 0 :1)}/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
      </div>
      <div className="p-10 flex justify-between items-center">
      <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>

        <div>
        <label className="form-control w-full max-w-xs">

  <select className="select select-bordered" onChange={(e) => setRegion(e.target.value)}>
    <option disabled selected>Pick one</option>
    <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="America">America</option>
  </select>

</label>
        </div>
      </div>
      <section className="flex flex-wrap gap-[5%] justify-center items-center p-10">
        {filteredData.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </section>
    </section>
  );
}