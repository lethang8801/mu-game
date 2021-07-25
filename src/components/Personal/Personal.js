import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faCoins,
    faEnvelope,
    faSignOutAlt,
    faMoneyBillWave,
    faGamepad,
    faGift,
    faExchangeAlt,
    faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Pictures/logo.png'
import '../Personal/Personal.css'

const Personal = () => {
    const btnGroup = [
        {
            id: 1,
            icon: faUser,
            text: 'Chào '
        },
        {
            id: 2,
            icon: faCoins,
            text: 0
        },
        {
            id: 3,
            icon: faEnvelope,
            text: 'Hộp Thư'
        },
        {
            id: 4,
            icon: faSignOutAlt,
            text: 'Đăng Xuất'
        },
    ]

    const [list, setList] = useState(
        [
            {
                id: 1,
                title: 'Thông tin cá nhân',
                text: 'Xem và cập nhật thông tin cá nhân',
                icon: faUser,
                label: 'thongtin',
                active: true
            },
            {
                id: 2,
                title: 'Nạp thẻ',
                text: 'Đổi xu',
                icon: faCoins,
                label: 'napthe',
                active: false
            },
            {
                id: 3,
                title: 'Giao dịch',
                text: 'Xem lịch sử giao dịch',
                icon: faMoneyBillWave,
                label: 'giaodich',
                active: false
            },
            {
                id: 4,
                title: 'Mua gói vật phẩm',
                text: 'Mua gói vật phẩm',
                icon: faGamepad,
                label: 'muagoi',
                active: false
            },
            {
                id: 5,
                title: 'VIP',
                text: 'Mua gói VIP',
                icon: faMoneyBillWave,
                label: 'vip',
                active: false
            },
            {
                id: 6,
                title: 'Giftcode',
                text: 'Kích hoạt giftcode',
                icon: faGamepad,
                label: 'gift',
                active: false
            },
            {
                id: 7,
                title: 'Môn phái',
                text: 'Chuyển đổi môn phái',
                icon: faExchangeAlt,
                label: 'monphai',
                active: false
            },
            {
                id: 8,
                title: 'Giới thiệu',
                text: 'Giới thiệu bạn bè nhận quà khủng.',
                icon: faUserFriends,
                label: 'gioithieu',
                active: false
            },
            {
                id: 9,
                title: 'Quà tặng',
                text: 'Quà tặng sự kiện',
                icon: faGift,
                label: 'quatang',
                active: false
            },

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
    return (
        <div>

            <div className="header">
                <div className="navbar">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="btn-group">
                        {
                            btnGroup.map((item) =>
                                <a href="">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <strong>{item.text}</strong>
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="menu-infor">
                    {
                        list.map(value => (
                            <button key={value.id}
                                onClick={() => handleList(value)}
                            >
                                <FontAwesomeIcon icon={value.icon} />
                                <div>
                                    <p>{value.title}</p>
                                    <p>{value.text}</p>
                                </div>
                            </button>
                        ))
                    }
                </div>
                <div className="infor">
                    {
                        defaultTab === 'thongtin' &&
                        <div className="thongtin">
                            <i className="fa fa-map-marker">THÔNG TIN ĐĂNG NHẬP</i>
                        </div>
                    }
                    {
                        defaultTab === 'napthe' &&
                        <div className="napthe">
                            <i className="fa fa-map-marker">NẠP THẺ</i>
                        </div>
                    }
                    {
                        defaultTab === 'giaodich' &&
                        <div className="giaodich">
                            <i className="fa fa-map-marker">LỊCH SỬ GIAO DỊCH</i>
                        </div>
                    }
                    {
                        defaultTab === 'muagoi' &&
                        <div className="muagoi">
                            <i className="fa fa-map-marker">MUA VẬT PHẨM</i>
                        </div>
                    }
                    {
                        defaultTab === 'vip' &&
                        <div className="vip">
                            <i className="fa fa-map-marker-alt">MUA VIP</i>
                        </div>
                    }
                    {
                        defaultTab === 'gift' &&
                        <div className="gift">
                            <i className="fa fa-map-marker-alt">NHẬN THƯỞNG GIFTCODE</i>
                        </div>
                    }
                    {
                        defaultTab === 'monphai' &&
                        <div className="monphai">
                            <i className="fa fa-map-marker-alt">GIỚI THIỆU BẠN BÈ</i>
                        </div>
                    }
                    {
                        defaultTab === 'gioithieu' &&
                        <div className="gioithieu">
                            <i className="fa fa-map-marker-alt">GIỚI THIỆU BẠN BÈ</i>
                        </div>
                    }
                    {
                        defaultTab === 'quatang' &&
                        <div className="quatang">
                            <i className="fa fa-map-marker-alt">GIỚI THIỆU BẠN BÈ</i>
                        </div>
                    }
                </div>
            </div>
            <div className="footer">
                <span>Copyright © 2020 KKG <br />
                    Đơn vị chủ quản: KKG. Giấy phép ICP số: 41/GP-TTĐT.
                </span>
                <ul className="footer-right">
                    <li>
                        <a href="">Hướng dẫn</a>
                    </li>
                    <li>
                        <a href="">Fanpage</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Personal
