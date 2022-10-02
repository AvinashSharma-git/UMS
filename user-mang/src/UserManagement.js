import React,{useState} from "react";
import { Table } from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import { AddUserModal } from './AddUserModal';
import { EditUserModal } from './EditUserModal';
import { Toggle } from "rsuite";
import "./App.css";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";


   

     

export class UserManagement extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {deps:[],addModalShow:false,editModalShow:false }

    }
   
    
   
    refreshList(){
        fetch(process.env.REACT_APP_API+'Users')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});

        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    
    deleteUser(depid){
        if(window.confirm('Are you sure')){
        fetch(process.env.REACT_APP_API+'Users/'+depid,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {deps,depid,depname,depaddress,depage,depprofession,depsportinterestrate}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        
        
       
        return(
            <div >

            

             
             <ButtonToolbar >
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                   <FaPlus /></Button>

                    <AddUserModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar> 
               
                
                
                   
                
                
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Profession</th>
                        <th>SportInterestRate</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.UserId}>
                                <td>{dep.UserId}</td>
                                <td>{dep.UserName}</td>
                                <td>{dep.UserAddress}</td>
                                <td>{dep.UserAge}</td>
                                <td>{dep.UserProfession}</td>
                                <td>{dep.UserSportInterestRate}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,depid:dep.UserId,depname:dep.UserName,depaddress:dep.UserAddress,depage:dep.UserAge,depprofession:dep.UserProfession,depsportinterestrate:dep.UserSportInterestRate})}><FaPencilAlt /></Button>
                                    
                                        <Button className="mr-2" variant="danger" onClick={()=>this.deleteUser(dep.UserId)}><FaTrashAlt /></Button>
                                    
                                    <EditUserModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    depid={depid}
                                    depname={depname}
                                    depaddress={depaddress}
                                    depage={depage}
                                    depprofession={depprofession}
                                    depsportinterestrate = {depsportinterestrate}
                                    />
                                    
                                    </ButtonToolbar>
                                </td>
                            
                            
                            </tr>)}
                    </tbody>

                </Table>

                
            </div>
            
            
            
            )
    }
}