import React, { useState } from 'react'
import '../../components/Home/Home.css'
import { Link } from 'react-router-dom';
import background from '../assets/Pictures/dausi.jpg'
import background2 from '../assets/Pictures/magic.jpg'
import background3 from '../assets/Pictures/acher.jpg'
import btnNext from '../assets/Pictures/btnNext.png'
import logo from '../assets/Pictures/logo.png'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'




const Home = () => {
    const [list, setList] = useState(
        [
            {
                id: 1,
                title: 'Class 1',
                img: background,
                label: 'top',
                active: true
            },
            {
                id: 2,
                title: 'Class 2',
                img: background2,
                label: 'mid',
                active: false
            },
            {
                id: 3,
                title: 'Class 3',
                img: background3,
                label: 'bottom',
                active: false
            }
        ]
    )

    const [defaultTab, setDefaultTab] = useState('top')
    const handleList = (value) => {
        let cloneList = [...list]
        cloneList.map((item) => {
            if (item.id === value.id) {
                item.active = true
            }
            else {
                item.active = false
            }
        })
        setList(cloneList)
        setDefaultTab(value.label)
    }

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="body-full">
            <div>
                <div className="nav-pc">
                    <Nav>
                        <NavItem>
                            <Link to={"/"}>Trang chủ</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/fanpage"}>Fanpage</Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/huongdan"}>Hướng Dẫn</Link>
                        </NavItem>
                    </Nav>
                </div>
                <div className="nav-mb">
                    <Navbar color="faded" light>

                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Link to={"/"}>Trang chủ</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={"/fanpage"}>Fanpage</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to={"/huongdan"}>Hướng Dẫn</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div>

                </div>
            </div>
            <div style={{ position: 'relative' }}>
                {
                    defaultTab === 'top' &&
                    <div>
                        <img src={background} className="img-background" alt={background} />
                    </div>
                }
                {
                    defaultTab === 'mid' &&
                    <div>
                        <img src={background2} className="img-background" alt={background2} />
                    </div>
                }
                {
                    defaultTab === 'bottom' &&
                    <div>
                        <img src={background3} className="img-background" alt={background3} />
                    </div>
                }
                <div className="list-btn">
                    {
                        list.map(value => (
                            <button key={value.id}
                                onClick={() => handleList(value)}
                                className="btn-class"
                            >
                                <img src={value.img} className="img-icon" alt={value.img} />

                            </button>
                        ))
                    }
                </div>
                <Link to={"/login"} className="btn-link">
                    <img src={btnNext} alt={btnNext} />
                </Link>
            </div>
            <div className="footer">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Home
