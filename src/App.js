import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Details from './components/Details';
import Client from './components/Client';
import Footer from './components/Footer';
import Dates from './components/Dates';
import Table from './components/Table';
function App(){
 
  const [showInvoice, setShowInvoice] = useState(false)
  const[name, setName] = useState("")
  const[Gst, setGst] = useState("")
  const[Billn, setBilln] = useState("")
  const[Dcn, setDcn] = useState("")
  const[invoiceDate,setinvoiceDate] = useState("")
  const handlePrint =()=>{window.print()}
  
  return (
  <main className = 'm-10 p-5 lg:max-w-3xl mx-auto bg-white rounded shadow'>

    {showInvoice ? (
  <div>
      <header >
          <Details/>
      </header>
      
      <body>
          <Client name={name} Gst={Gst} Billn={Billn} Dcn={Dcn}/>
          <Dates invoiceDate={invoiceDate} />
          <Table />
      </body>
      
      <footer>
          <Footer handlePrint = {handlePrint}/>

          <button onClick={() => setShowInvoice(false)} className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-399 mt-5'> Edit Information</button>
      </footer>

  </div>):(
  <>  
      <label htmlForm="name"> Name:
      </label>
      <input type='text' name = 'text' id= 'text' placeholder= 'enter name' value = {name}
      onChange= {(e)=> setName(e.target.value)}/>  <br/>

      <label htmlForm="Gstn">Gst number: </label>
      <input type='text' name = 'text' id= 'gstn' placeholder= 'enter Gst number' value = {Gst}
      onChange= {(e)=> setGst(e.target.value)}/> <br/>

      <label htmlForm="billn"> Bill number: </label>
      <input type='text' name = 'text' id= 'billn' placeholder= 'enter bill number' value = {Billn}
      onChange= {(e)=> setBilln(e.target.value)}/> <br/>

      <label htmlForm="invoiceDate"> Invoice Date: </label>
      <input type='date' name = 'text' id= 'invoiceDate' placeholder= 'enter the invoice date' value = {invoiceDate}
      onChange= {(e)=> setinvoiceDate(e.target.value)}/> <br/> <br/>

      <button onClick={() => setShowInvoice(true)} className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-399'>Preview Invoice</button>
  </>  
  ) 
}  
  </main>
  )
   


}


export default App;
