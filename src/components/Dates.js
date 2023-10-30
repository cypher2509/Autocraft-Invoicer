import React from 'react'
export default function Dates({invoiceDate}) {
    return (
        <>
        <article className="my-5 flex items-end justify-end">
            
                
                    <span className="font-bold">Invoice Date:</span> {invoiceDate}
        </article>
        </>
    )
}
