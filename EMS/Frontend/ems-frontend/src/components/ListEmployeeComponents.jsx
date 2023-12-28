import React, { useEffect,useState } from 'react'

const ListEmployeeComponent = () => {

const [tableData, settableData] = useState([])

useEffect(() => {
    fetch('http://localhost:8080/api/v1/employees')           //api for the get request
    .then(response => response.json())
    .then((data) =>{
         settableData(data)
        console.log(data)
    });

  
}, [])


    const sampleData = [
        { "id": 1, "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com" },
        { "id": 2, "firstName": "Jane", "lastName": "Smith", "email": "jane.smith@example.com" },
        { "id": 3, "firstName": "Bob", "lastName": "Johnson", "email": "bob.johnson@example.com" },
        { "id": 4, "firstName": "Alice", "lastName": "Williams", "email": "alice.williams@example.com" },
        { "id": 5, "firstName": "Charlie", "lastName": "Brown", "email": "charlie.brown@example.com" },
        { "id": 6, "firstName": "Eva", "lastName": "Green", "email": "eva.green@example.com" },
        { "id": 7, "firstName": "Frank", "lastName": "Miller", "email": "frank.miller@example.com" },
        { "id": 8, "firstName": "Grace", "lastName": "Turner", "email": "grace.turner@example.com" },
        { "id": 9, "firstName": "Henry", "lastName": "Davis", "email": "henry.davis@example.com" },
        { "id": 10, "firstName": "Ivy", "lastName": "Clark", "email": "ivy.clark@example.com" }
    ]


    return (
        <>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>

                    {
                        sampleData.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                            </tr>
                        )
                        )

                    }

                </tbody>
            </table>

        </>
    )
}

export default ListEmployeeComponent