import React from 'react'
import avatar from 'Assets/image/avatar.svg'
import avatar1 from 'Assets/image/avatar-1.svg'
import calender from 'Assets/image/calendar.svg'
import email from 'Assets/image/email.svg'
import phone from 'Assets/image/mobile.svg'
import web from 'Assets/image/www.svg'
import maps from 'Assets/image/maps.svg'
import toga from 'Assets/image/toga.svg'
import love from 'Assets/image/love-outline.svg'
import badminton from 'Assets/image/badminton.svg'
import design from 'Assets/image/path-design.svg'
import travel from 'Assets/image/travel.svg'

export default function Profile() {
    return (
        <>
        <div className="container profile my-5 font-primary">
            <div className="d-flex justify-content-center border-bottom">
                <h3 className="text-center font-weight-bold m-0">Personal Info</h3>
                <img src={avatar1} alt="avatar" className="ml-3"/>
            </div>
            <div className="row px-4 d-flex justify-content-center my-5">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="row d-flex justify-content-between align-items-center">
                        <span className="font-md"> <img src={avatar} alt="" className="pr-2"/>Nama</span>
                        <p className="pt-3 font-md">Endang Rukmana</p>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center">
                        <span className="font-md"> <img src={calender} alt="" className="pr-2"/>Date Of Birth</span>
                        <p className="pt-3 font-md">July, 23th 1996</p>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center">
                        <span className="font-md"> <img src={email} alt="" className="pr-2"/>Email</span>
                        <p className="pt-3 font-md">rukmanaendang99@gmail.com</p>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center">
                        <span className="font-md"> <img src={phone} alt="" className="pr-2"/>Phone</span>
                        <p className="pt-3 font-md">+62 819 1242 5940</p>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center">
                        <span className="font-md"> <img src={web} alt="" className="pr-2"/>Web</span>
                        <a href="https://bro-rukman.netlify.app/#/" className="pt-3 font-md">bro-rukman.netlify.app</a>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center">
                        <span className="font-md"> <img src={maps} alt="" className="pr-2"/>Address</span>
                        <p className="pt-3 font-md">South Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center border-bottom">
                <h3 className="text-center font-weight-bold m-0">Educations</h3>
                <img src={toga} alt="avatar" className="ml-3"/>
            </div>
            <div className="row my-5 d-flex justify-content-around">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <div className="card shadow-lg">
                                <h5 className="border-bottom font-md text-center py-3">2018-PRESENT</h5>
                                <div className="card-body">
                                    <div className="card-text text-center">
                                        <p className="font-bold">UNIVERSITAS PAMULANG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <div className="card shadow-lg">
                                <h5 className="border-bottom font-md text-center py-3">2013-2016</h5>
                                <div className="card-body">
                                    <div className="card-text text-center">
                                        <p className="font-bold">PKBM ADDA'WAH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <div className="card shadow-lg">
                                <h5 className="border-bottom font-md text-center py-3">2010-2013</h5>
                                <div className="card-body">
                                    <div className="card-text text-center">
                                        <p className="font-bold">SMPN 02 CIGOMBONG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-2">
                            <div className="card shadow-lg">
                                <h5 className="border-bottom font-md text-center py-3">2004-2010</h5>
                                <div className="card-body">
                                    <div className="card-text text-center">
                                        <p className="font-bold">SDN LEMAH DUHUR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className="d-flex justify-content-center border-bottom">
                <h3 className="text-center font-weight-bold m-0 pb-2">Hobby</h3>
                <img src={love} alt="avatar" className="ml-3"/>
            </div>
            <p className="color-text pt-3 text-center">" Enjoying the view on high land thats make a new fresh idea for me "</p>
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-lg-2 col-md-2 col-sm-3 rounded mx-2">
                    <div className="card-center pt-4">
                        <img src={travel} alt="" className=" d-flex mx-auto"/>
                        <div className="card-body">
                            <div className="card-text text-center">
                                <p>Travel</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3 rounded mx-2">
                    <div className="card-center pt-4">
                        <img src={badminton} alt="" className=" d-flex mx-auto"/>
                        <div className="card-body">
                            <div className="card-text text-center">
                                <p>Badminton</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3 rounded mx-2">
                    <div className="card-center pt-4">
                        <img src={design} alt="" className=" d-flex mx-auto"/>
                        <div className="card-body">
                            <div className="card-text text-center">
                                <p>Design</p>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
        </>
    )
}
