import React from 'react'
import Base from '../components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

function Login() {
    return (
        <Base>
            <Container>
                <Row >
                    <Col sm={{ size: 6, offset: 3 }}>
                        <Card color='info'>
                            <CardHeader>
                                <h3> Fill in username and password</h3>
                            </CardHeader>
                            <CardBody>
                            <Form>
                                {/* email field */}
                                <FormGroup>
                                    <Label for="email">
                                    Email
                                    </Label>
                                    <Input 
                                    placeholder='emailId'
                                    type="email"
                                    id='email'
                                    />
                                </FormGroup>
                                {/* password field */}
                                <FormGroup>
                                    <Label for="password">
                                    Email
                                    </Label>
                                    <Input 
                                    placeholder='Password'
                                    type="password"
                                    id='password'
                                    />
                                </FormGroup>
                                <Container className='text-center'>
                                    <Button  color='primary'>Login</Button>
                                    <Button  color='dark' type='reset' className='ms-4' >Reset</Button>
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

export default Login

