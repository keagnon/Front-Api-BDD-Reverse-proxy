import React from "react";
import {Button} from "react-bootstrap";

function Home() {

    const fetchTest = async () => {

        const response = await fetch("http://localhost:8080/users/test");

        return await response.text();

    }

    const handleClick = () => {

        fetchTest().then((response) => console.log(response)).catch((error) => console.log(error));

    }

    return (

        <div className={"text-white"}>
            <h1>Hello world!</h1>
            <Button onClick={handleClick}>Test</Button>
        </div>

    );

}

export default Home;