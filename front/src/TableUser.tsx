import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";

function TableUser() {

    const [users, setUsers] = useState<any>([]);

    const fetchData = async () => {

        const response = await fetch("http://localhost:8080/users/all");

        return await response.json();

    }

    useEffect(() => {

        fetchData()
            .then((response) => {

                console.log(response);
                setUsers(response);

            })
            .catch((error) => console.log(error));

    }, []);

    return (

        <Table bordered variant={"dark"}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Âge</th>
                </tr>
            </thead>
            <tbody>
                {users.map((value: any) => (

                        <tr key={value.id}>
                            <th>{value.id}</th>
                            <td>{value.lastname}</td>
                            <td>{value.firstname}</td>
                            <td>{value.age}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>

    );

}

export default TableUser;