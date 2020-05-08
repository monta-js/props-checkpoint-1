import React from 'react';

const ProdTable = ({table}) => {
  const renderTable = () => {
    return table.map((elem , index) => {
        return <tr key={index}> 
        <th scope="row">{index+1}</th>
        <td >{elem.name}</td>
        <td >{elem.category}</td>
        <td >{elem.price}</td>
        </tr>
    })
}
    return (
        <div className="org">
            <table  className="table" >
            <thead>
                <tr>
                <th scope="col">#</th>    
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th> 
                </tr>
            </thead> 
            <tbody>    
            {renderTable()}
            </tbody>   
                
            </table>
        </div>
    );
}

export default ProdTable ;