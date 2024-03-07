import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
export default function App(props) {
  const [searchValue, setSearchValue] = useState('');
  const [tab, settab] = useState(props.data)
console.log(props.data);
  useEffect(() => {
    const filtered = props.data.filter(task =>
        task.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    settab(filtered);
    }, [searchValue]);

  return (

    <section className="bg-[#202d36]">
      <div className="w-[100%] p-8 bg-[#2b3743] flex justify-between mb-6">
        <h1 className="font-bold text-white">WHERE IN THE WORLD</h1>
        <h1 className="font-bold cursor-pointer">dark mode</h1>
        </div>
        <div className="p-10">
          <input className="h-[50px] p-8 w-[800px] bg-[#2b3743]" type=" text" placeholder="Search" onChange={(e)=>{setSearchValue(e.target.value)}} />
        </div>

      <section className="flex flex-wrap gap-[5%] justify-center items-center ">
        {searchValue== '' ?
        props.data.map((value, index) => {
      return(
      <Link  to={`/${value.name.common}`} key={index} className=" h-[400px] rounded-md bg-[#2b3743] w-[20%] mb-10">
        <img className="h-[50%] w-[100%] rounded-md" src={value.flags.png} alt="" />
        <div className="p-2">
        <p> {value.name.common}</p>

        </div>
       </Link>
      
      )
    })
    :tab.map((value, index) => {
      return(
      <Link  to={`/${value.name.common}`} key={index} className=" h-[400px] rounded-md bg-[#2b3743] w-[20%] mb-10">
        <img className="h-[50%] w-[100%] rounded-md" src={value.flags.png} alt="" />
        <div className="p-2">
        <p> {value.name.common}</p>

        </div>
       </Link>
      
      )
    })
    }
    
    </section>
  </section>  
  )
}
