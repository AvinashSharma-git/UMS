import React,{Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';
import "./App.css";
export class AddUserModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

   
   
    

    handleSubmit(event){
        event.preventDefault();
        
        
        
        fetch(process.env.REACT_APP_API+'Users/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserId:null,
                UserName:event.target.UserName.value,
               
                UserAddress:event.target.UserAddress.value,
                UserAge:event.target.UserAge.value,
                
                UserProfession:event.target.UserProfession.value,
                UserSportInterestRate:event.target.UserSportInterestRate.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('failed'); 
        })
    }
  
    render(){
        return(
            <div className="container">

    <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >

            <Modal.Header clooseButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD User
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="UserName">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" name="UserName"  required
                                    placeholder="UserName"/>
                                </Form.Group>
                                
                               
                                
                                <Form.Group controlId="UserAddress">
                                <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="UserAddress" required
                                    placeholder="UserAddress"/>
                                    </Form.Group>
                                
                                <Form.Group controlId="UserAge">  
                                <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" name="UserAge" required
                                    placeholder="UserAge"/>
                                </Form.Group>

                                <Form.Group controlId="UserProfession">
                                <Form.Label>Profession</Form.Label>
                                    <Form.Control type="text" name="UserProfession" required
                                    placeholder="UserProfession"/>
                                </Form.Group>
                                
                                <Form.Group controlId="UserSportInterestRate">
                                <Form.Label>Sport Interest Rate</Form.Label>
                                <Form.Control as="select">
                                            Select
                                    <option >Select</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                    <option >5</option>
                                    <option >6</option>
                                    <option >7</option>
                                    <option >8</option>
                                    <option >9</option>
                                    <option >10</option>
                                </Form.Control>
                                </Form.Group>
                                
                                

                                

                               


                               

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Add User
                                    </Button>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
    </Modal>

            </div>
            )
    }}