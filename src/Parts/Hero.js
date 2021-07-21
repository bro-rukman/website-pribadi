import React from 'react'
import Banner from 'Assets/image/banner-half.jpg'
import Profile from 'Assets/image/Profile2.png'
import instagram from 'Assets/image/ig.svg'
import linkedin from 'Assets/image/linkedin.svg'
import behance from 'Assets/image/behance.svg'
import github from 'Assets/image/github.svg'

export default function Hero() {
    return (
        <>
            <section className="hero container">
                <div className="row flex justify-content-between align-items-center">
                    <div className="col-sm-12 col-lg-8 mt-5">
                        <div className="d-flex align-items-center">
                            <div className="avatar d-sm-block d-lg-none mr-3">
                            <img src={Profile} alt="profile" style={{width:100,height:100}}/>
                            </div>
                            <div className="name">
                                <h3 className="font-weight-bold font-weight-medium">Hi, I'm Endang Rukmana</h3>
                                <h5>Front End Developer</h5>
                                <div className="row">
                                    <a href="https://www.instagram.com/bro_rukman/"><img src={instagram} alt="ig" style={{width:30,height:30}} className="ml-2"/></a>
                                    <a href="https://www.linkedin.com/in/endang-rukmana-384846168/"><img src={linkedin} alt="linkedin" style={{width:30,height:30}} className="ml-2"/></a>
                                    <a href="https://github.com/bro-rukman"><img src={github} alt="linkedin" style={{width:30,height:30}} className="ml-2"/></a>
                                    <a href="https://www.behance.net/rukmandrop938d"><img src={behance} alt="behance" style={{width:50}} className="ml-2"/></a>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 text-justify color-gray-300">I’m from South Jakarta, Indonesia and I've been studying at Pamulang University with majoring Computer Science. I was working as a freelance Graphic Designer for a year, and now I'm learning Frontend Developer to make an interaction design by provide visual comfort for users and problem solving what users faced.</p>

                    </div>
                    <div className="col-lg-4 col-sm-12 mx-auto d-sm-none d-lg-block image">
                    {/* <img src={Profile} alt="img-banner" style={{width:300,height:300}}/> */}
                    </div>
                </div>
            </section>
        </>
    )
}
