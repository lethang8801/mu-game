import React from 'react'
import background from '../assets/Pictures/bgmu.jpg'
import '../../components/Login/Login.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="form-login">
            <img src={background} className="bg-img" alt="src" />
            <div className="form">
                <Form inline>
                    <h1 style={{ textAlign: 'center' }}>Đăng Nhập</h1>
                    <FormGroup>
                        <Label for="exampleEmail" hidden></Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Tài khoản" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden></Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Mật khẩu" />
                    </FormGroup>
                    {' '}
                    <div className="btn"
                        style={{ display: 'block', alignItems: 'center', marginTop: 10 }}
                    >
                        <Button
                            style={{ marginRight: 10 }}
                        >
                            <Link to="/personal" style={{ color: '#fff', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>Đăng Nhập</Link>
                        </Button>
                    </div>
                    <div style={{ display: 'block', alignItems: 'center' }}>
                        <Link to="/register" style={{ color: '#6c757d', textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>Chưa có tài khoản?
                            <strong
                                style={{ paddingLeft: 5 }}
                            >
                                Đăng ký ngay
                            </strong>
                        </Link>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Login
