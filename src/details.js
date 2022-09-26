import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Reference from "./Reference";



function Details() {
    const details = [
        { id: "1", name: "sangeetha", email: "ksgeetha13@gmail.com", address: "east" },
        { id: "2", name: "kavi", email: "kkarasu14@gmail.com", address: "east" },
        { id: "3", name: "vignesh", email: "mkvicky10@gmail.com", address: "east" }
    ]
    const navigate = useNavigate()
    function homeDetails(id) {
        navigate(`/reference/${id}`)

    }


    function particularpage() {

    }
    return (
        <div>
            <table border="2">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                {details.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td><button onClick={() => homeDetails(value.id)}>{value.id}</button></td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.address}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
};
export default Details;