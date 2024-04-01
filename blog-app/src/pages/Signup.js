import React from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

function Signup() {
    return (
        <Base>
            <Container>
                <Row className='mt-4'>
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color='dark' inverse >
                            <CardHeader>
                                <h3> Fill information to register   !!</h3>
                            </CardHeader>
                            <CardBody>
                                {/* Creating form */}
                                <Form>
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
                                        />
                                    </FormGroup>
                                    <Container className='text-center'>
                                        <Button type='submit' color='primary'>Register</Button>
                                        <Button className='ms-2' type='reset' color='secondary'>Register</Button>
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
