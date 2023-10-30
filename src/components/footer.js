import {useState} from 'react'
export default function Footer({handlePrint}) {
  const[signature,setSignature] = useState("")
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap flex-col items-left justify-left">
          <li>
            <span className="font-bold">E. & O.E.</span>
          </li> 
          <li>
            <span className="font-bold">Subject to Vadodara Jurisdiction.</span>
          </li>
        </ul>
        <ul className="flex flex-wrap flex-col items-end justify-end">
          <li>
          <label htmlForm="signature">  </label>
      <input type='text' name = 'text' id= 'signature' placeholder= 'enter your signature' value = {signature}
      onChange= {(e)=> setSignature(e.target.value)}/>
          </li> 
          <li>
            <span className="font-bold">for, AUTO CRAFT</span>
          </li>
        </ul>
      <ul className ='flex items-center justifu-between flex-wrap'>
        <li className="mx-2">
            <button onClick={handlePrint}className="bg-gray-500 text-white font-bold py-2 px-8 rounded
             shadow border-2 border-gray-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300"> Print </button>
        </li> <br/> 
        <li>       
             <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded
             shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
             transition-all duration-300"> Download </button>
   </li>
        
      </ul>
      </footer>
    </>
  )
}
