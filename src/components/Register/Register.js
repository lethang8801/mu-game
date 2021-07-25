import React from 'react'
import background from '../assets/Pictures/bgmu.jpg'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../../components/Register/Register.css'
import { Link } from 'react-router-dom';


function Register() {
    return (
        <div>
            <div className="form-login">
                <img src={background} className="bg-img" alt="" />
                <div className="form">
                    <Form inline>
                        <h1 style={{ textAlign: 'center', marginBottom: 0 }}>Đăng Ký</h1>
                        <FormGroup>
                            <Label for="exampleEmail" hidden></Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Tên đăng nhập" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="exampleEmail" hidden></Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden></Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Mật khẩu" />
                        </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="examplePassword" hidden></Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Nhập lại mật khẩu" />
                        </FormGroup>
                        {' '}
                        <div className="btn" style={{ display: 'block', alignItems: 'center', marginTop: 20 }}>
                            <Button style={{ marginRight: 10 }}>ĐĂNG KÝ </Button>
                        </div>
                        <div style={{ display: 'block', alignItems: 'center' }}>
                            <Link to="/login" style={{ color: '#6c757d', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>Đã có tài khoản?
                                <strong style={{ paddingLeft: 5 }}>Đăng nhập ngay</strong>
                            </Link>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register
