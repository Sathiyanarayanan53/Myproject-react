function TableSection(){
     const tableHeading=[
        {
            colName:"Avatar",
            icon:"👤",
        },
        {
            colName:"Name",
            icon:"📛",
        },
        {
            colName:"Status",
            icon:"✅",
        },
    ];
    const tableData=[
        {
            avatar:"https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=224&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
            name:"alice",
            status:"active",
        
        },
        {
            avatar:"https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=224&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
            name:"bob",
            status:"Inactive",
        
        },
    ];
  
  return (
    <div className="container mx-auto p-20">
        <h2 className="text-2xl font-bold my-4">📊User Data</h2>
        <table className='border border-collapse mx-8 '>
           <thead>
                 <tr>
                    {tableHeading.map((heading)=>(
                    <th key={heading.colName} className='border border-gray-300 px-4 py-2'>
                        {heading.icon}{heading.colName}
                    </th>
                    
                    ))}
                </tr>
           </thead>
           <tbody>
                {tableData.map((user,index)=>(
                    <tr key={index}>
                        <td className='border border-gray-300'>
                            <img width={50} height={50} src={user.avatar} alt="" />
                        </td>
                        <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                        <td className={`border border-gray-300 px-4 py-2 ${user.status=="Active"?`text-green-600`:`text-red-600`}`}>{user.status}</td>
                    </tr>
                    )
                )}    
           </tbody>
        </table>

    </div>
       
  )
}
export default TableSection;

