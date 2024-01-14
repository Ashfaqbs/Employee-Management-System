import React, { useEffect, useState, useRef } from 'react';
import { listEmployees } from '../Services/EmployeeService';
import loadingGif from '../assets/loader1.webp'
// import loadingGif from '../assets/loader2.gif'


//Aesc and Desc order feature
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { Link, useNavigate } from 'react-router-dom';
import { deleteEmp } from '../Services/EmployeeService';

const ListEmployeeComponent = () => {
  const [tableData, settableData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const tableRef = useRef(null);
  //adding loader till the data is fetched 
  const [loading, setLoading] = useState(true); // Add loading state



  const navigator = useNavigate();
  useEffect(() => {
    listEmployees()
      .then((response) => {
        settableData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });



  }, []);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const sortedData = () => {
    if (!sortConfig) {
      return tableData;
    }

    const sortedArray = [...tableData];
    sortedArray.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortedArray;
  };

  if (loading) {
    // Render a loading spinner or skeleton screen while data is being fetched
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={loadingGif} alt="Loading..." />
    </div>; // You can replace this with a spinner or skeleton component
  }

  const handleUpdate = (id) => {
    navigator(`/editEmployee/${id}`)
    console.log(id)
  }

  const handleDelete=(id)=>{

    console.log(id)
  }


  return (
    <>
      <section className='' >
        <h2 className='text-center w-2'>List of Employees
          {/* one Way for navigation */}


          {/* 2nd Way for navigation */}
          {/* <button onClick={addNewEmp}>Add Employee</button> */}

          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <br></br>
            <button className='rounded-5  bg-black  text-white '> <h5>Export excel</h5>  </button>
          </DownloadTableExcel>

        </h2>

        <Link to='/AddEmployee'><button className='btn btn-primary rounded m-2'
        > Add Employee</button> </Link>

        <table className="table " ref={tableRef} >
          <thead>
            <tr>
              <th scope="col" onClick={() => requestSort('id')} className={getClassNamesFor('id')}>
                Sl No
              </th>
              <th scope="col" onClick={() => requestSort('firstName')} className={getClassNamesFor('firstName')}>
                First
              </th>
              <th scope="col" onClick={() => requestSort('lastName')} className={getClassNamesFor('lastName')}>
                Last
              </th>
              <th scope="col" onClick={() => requestSort('email')} className={getClassNamesFor('email')}>
                Email
              </th>

              <th scope="col" >
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            {sortedData().map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                {/* <td onClick={() => { deleteEmpbyId(data.id) }}>X</td> */}
                <td><button className='btn btn-info ' onClick={() => handleUpdate(data.id)} >Update</button></td>
                <td><button className='btn btn-info ' onClick={() => handleDelete(data.id)} >Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ListEmployeeComponent;




//Basic
// const ListEmployeeComponent = () => {

//     const [tableData, settableData] = useState([])

//     useEffect(() => {
//         // fetch('http://localhost:8080/api/v1/employees')           //api for the get request
//         // .then(response => response.json())
//         // .then((data) =>{
//         //      settableData(data)
//         //     console.log(data)
//         // });

//         listEmployees().then((response) => {
//             settableData(response.data)
//         }).catch((error) => {
//             console.error(error);
//         })

//     }, [])
//     return (
//         <>

//             <section className=''>
//                 <h2 className='text-center'>List of Employees</h2>

//                 <table className="table table-dark">

//                     <thead>
//                         <tr>
//                             <th scope="col">Sl No</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>


//                         {
//                             tableData.map((data) => (
//                                 <tr key={data.id}>
//                                     <th scope="row">{data.id}</th>
//                                     <td>{data.firstName}</td>
//                                     <td>{data.lastName}</td>
//                                     <td>{data.email}</td>
//                                 </tr>
//                             )
//                             )

//                         }

//                     </tbody>
//                 </table>
//             </section>


//         </>
//     )
// }

// export default ListEmployeeComponent




// const sampleData = [
//     { "id": 1, "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com" },
//     { "id": 2, "firstName": "Jane", "lastName": "Smith", "email": "jane.smith@example.com" },
//     { "id": 3, "firstName": "Bob", "lastName": "Johnson", "email": "bob.johnson@example.com" },
//     { "id": 4, "firstName": "Alice", "lastName": "Williams", "email": "alice.williams@example.com" },
//     { "id": 5, "firstName": "Charlie", "lastName": "Brown", "email": "charlie.brown@example.com" },
//     { "id": 6, "firstName": "Eva", "lastName": "Green", "email": "eva.green@example.com" },
//     { "id": 7, "firstName": "Frank", "lastName": "Miller", "email": "frank.miller@example.com" },
//     { "id": 8, "firstName": "Grace", "lastName": "Turner", "email": "grace.turner@example.com" },
//     { "id": 9, "firstName": "Henry", "lastName": "Davis", "email": "henry.davis@example.com" },
//     { "id": 10, "firstName": "Ivy", "lastName": "Clark", "email": "ivy.clark@example.com" }
// ]