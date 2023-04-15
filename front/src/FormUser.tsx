import React, {FormEvent, useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";

function FormUser() {

    const [show, setShow] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    const fetchData = async (data: any) => {

        const response = await fetch("http://localhost:8080/users/create", {

            method: "POST",
            headers: {

                "Content-Type": "application/json"

            },
            body: JSON.stringify(data)

        });

        return await response.json();

    };

    const handleClose = (): void => setShow(false);
    const handleShow = (): void => setShow(true);
    const handleSubmit = () => {

        console.log("En cours de construction!");
        console.log({lastName: lastName, firstName: firstName, age: age});

        const data: {lastname: string, firstname: string, age: number} = {lastname: lastName, firstname: firstName, age: age};

        fetchData(data)
            .then((response) => {

                console.log(response);
                setShow(false);

            })
            .catch((error) => console.log(error))
        ;
    }

    return (

        <div>
            <Button className={"mt-3 mb-3"} style={{float: "right"}} variant={"outline-primary"} onClick={handleShow}>Créer un nouvel Utilisateur</Button>
            <Modal show={show} onHide={handleClose} backdrop={"static"} keyboard={false}>
                <Modal.Header className={"bg-dark text-white"} closeButton>
                    <Modal.Title>Nouvel utilisateur/utilisatrice</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"bg-dark text-white"}>
                    <Form>
                        <Form.Group className={"mb-3"} controlId={"lastName"}>
                            <Form.Label>Nom:</Form.Label>
                            <Form.Control type={"text"} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className={"mb-3"} controlId={"firstName"}>
                            <Form.Label>Prénom:</Form.Label>
                            <Form.Control type={"text"} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className={"mb-3"} controlId={"age"}>
                            <Form.Label>Âge:</Form.Label>
                            <Form.Control type={"number"} value={age} onChange={(e) => setAge(Number(e.target.value))}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className={"bg-dark"}>
                    <Button variant={"outline-success"} onClick={handleSubmit}>Ajouter</Button>
                    <Button variant={"outline-danger"} onClick={handleClose}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default FormUser;