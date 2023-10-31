export default function TableForm({particulars, setParticulars, code, quantity, rate, setCode, setQuantity, setRate, total, setTotal }){
    const calculateTotal = (total) => {setTotal(rate*quantity)}
    return(
        <>
        <div className="md:grid grid-cols-4 gap-1 md:mt-10">
            <div >
                <label htmlFor="particulars">Particulars</label>
                <input type= "text" 
                name= "particulars" 
                id = "particulars" 
                placeholder= "enter Particulars" 
                value ={particulars}
                onChange= {(e)=> setParticulars(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="code">Code</label>
                <input type ="text"
                name= "code"
                id= "code "
                placeholder="HSN/SAC Code"
                value= {code}
                onChange ={(e)=> setCode(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input type ="integer"
                name = "quantity"
                id = "quantity"
                placeholder="Quantity"
                value={quantity}
                onChange = {(e)=> setQuantity(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Rate</label>
                <input type ="integer"
                name = "rate"
                id = "rate"
                placeholder="Rate"
                value={rate}
                onChange = {(e)=> setRate(e.target.value)}/>
            </div>
            <div>
                <p> {calculateTotal(total)}</p>
            </div>
        </div>  
            
        </>
    )  
}