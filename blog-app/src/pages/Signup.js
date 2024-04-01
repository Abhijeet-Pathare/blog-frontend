import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

function Signup() {

    

    // usestate hook
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        about:''
    })

    const [error,setError] = useState({
        errors:{},
        isError:false
    })

    // handlechange
    //property makes the change function dynamic
    //by adding the argument property 
    const handleChange=(event,property)=>{
        console.log("fields changed")
        setData({...data,[property]:event.target.value})
        
    }

    // reseting the form data and setting the data to blank on click of reset button
    const resetData =()=>{
        setData({ 
        name:'',
        email:'',
        password:'',
        about:''})
    }

    //submit the form 
    const submitForm = (event) =>{
        event.preventDefault();
        
        //data validate

        //call server api for sending the data
    }


    return (
        <Base>
            <Container>
                {JSON.stringify(data)}
                <Row className='mt-4'>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color='dark' inverse >
                            <CardHeader>
                                <h3> Fill information to register   !!</h3>
                            </CardHeader>
                            <CardBody>
                                {/* Creating form */}
                                {/* Form submission code */}
                                <Form onSubmit={submitForm}>
                                    <FormGroup>
                                        {/* Name field */}
                                        <Label for="name">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="enter name here"
                                            type="name"
                                            onChange={(e)=>handleChange(e,'name')}
                                            value={data.name}
                                        />
                                    </FormGroup>
                                    {/* email field */}
                                    <FormGroup>
                                        <Label for="email">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder="email placeholder"
                                            type="email"
                                            onChange={(e)=>handleChange(e,'email')}
                                            value={data.email}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password placeholder"
                                            type="password"
                                            onChange={(e)=>handleChange(e,'password')}
                                            value={data.password}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="about">
                                            Text Area
                                        </Label>
                                        <Input
                                            id="about"
                                            name="text"
                                            type="textarea"
                                            style={{ height: "250px" }}
                                            onChange={(e)=>handleChange(e,'about')}
                                            value={data.about}
                                        />
                                    </FormGroup>
                                    <Container className='text-center'>
                                        <Button type='submit' color='primary'>Register</Button>
                                        <Button  onClick={resetData} className='ms-2' type='reset' color='secondary'>Reset</Button>
                                    </Container>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}

export default Signup
