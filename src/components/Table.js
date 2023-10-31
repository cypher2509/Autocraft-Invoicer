import React from 'react';

export default function Table({particulars, code, quantity,rate,total}) {

  return (
    <table width = "100%">
      <thead>
        <tr className="bg-gray-100">
          <th>Sr No.</th>
          <th>Particulars</th>
          <th>HSN/SAC Code</th>
          <th>Quantity</th>
          <th>HighnightRates</th>
          <th>Amount in Rs.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>{particulars}</td>
          <td> {code}</td>
          <td>{quantity}</td>
          <td> {rate}</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
        <tr>
          <td>3.</td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
        <tr>
          <td>4.</td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
        
      </tbody>

    </table>
  );
}
