import React from "react";
import { useParams,useSearchParams} from "react-router-dom";

function Reference() {
    const details = [
        { id: "1", name: "sangeetha", email: "ksgeetha13@gmail.com" },
        { id: "2", name: "kavi", email: "kkarasu14@gmail.com" },
        { id: "3", name: "vignesh", email: "mkvicky10@gmail.com" }
    ]
    const { id } = useParams()
    console.log(id);
    return (

        <>
            {details.filter((el) => el.id == parseInt(id)).map((each) => {

                return (
                    <>
                        <center>
                            <p>Id:{each.id}</p>
                            <br />
                            <p>Name:{each.name}</p>
                            <br />
                            <p>Email:{each.email}</p>
                            <br />
                        </center>
                        
                    </>
                )
            })
            }
        </>

    )
};
export default Reference;