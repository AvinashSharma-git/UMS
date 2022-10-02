import React,{Component} from 'react';
import {Modal,Button,Row,Col, Form} from 'react-bootstrap';

export class EditUserModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Users/',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserId:event.target.UserId.value,
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
                    Edit User
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                               
                            <Form.Group controlId="UserId">
                                    <Form.Label>UserId</Form.Label>
                                    <Form.Control type="text" name="UserId" required
                                    disabled
                                    defaultValue={this.props.depid}
                                    placeholder="UserId"/>
                                </Form.Group>
                               
                               
                                <Form.Group controlId="UserName">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" name="UserName" required
                                    defaultValue={this.props.depname}
                                    placeholder="UserName"/>
                                </Form.Group>
                                
                                <Form.Group controlId="UserAddress">
                                <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="UserAddress" required
                                    defaultValue={this.props.depaddress}
                                    placeholder="UserAddress"/>
                                    </Form.Group>
                                
                                <Form.Group controlId="UserAge">  
                                <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" name="UserAge" required
                                    defaultValue={this.props.depage}
                                    placeholder="UserAge"/>
                                </Form.Group>

                                <Form.Group controlId="UserProfession">
                                <Form.Label>Profession</Form.Label>
                                    <Form.Control type="text" name="UserProfession" required
                                    defaultValue={this.props.depprofession}
                                    placeholder="UserProfession"/>
                                </Form.Group>
                                
                                <Form.Group controlId="UserSportInterestRate">
                                <Form.Label>Sport Interest Rate</Form.Label>
                                    <Form.Control as="select" name="UserSportInterestRate" required
                                    defaultValue={this.props.depsportinterestrate}
                                    placeholder="UserSportInterestRate">


                                           
                                    <option >Select</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    </Form.Control>
                                </Form.Group>
                                
                                

                                

                               


                               

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update User
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