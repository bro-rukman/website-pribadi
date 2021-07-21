import React from 'react'
import work from 'Assets/image/work.svg'

export default function Resume() {
    return (
        <>
            <div className="container my-5 font-primary">
            <div className="d-flex justify-content-center border-bottom pb-3">
                <h3 className="text-center font-weight-bold m-0">Work Experience</h3>
                <img src={work} alt="avatar" className="ml-3"/>
            </div>
            <div className="row mt-3 d-flex justify-content-center">
                <div className="col-lg-10 col-md-10 col-sm-12">
                    <div class="row mx-auto">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                        <h4 className="">2021-Present</h4>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <h4 className="font-bold">Frontend Developer</h4>
                        <h6 className="font-bold">RUANG TAMBAH ILMU</h6>
                        <p>- Making UI design from concept</p>
                        <p>- Slicing Assets</p>
                        <p>- Developing frontend</p>
                    </div>
                    </div>
                    <div class="row mx-auto">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                        <h4 className="">2019-2021</h4>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <h4 className="font-bold">Manager Account</h4>
                        <h6 className="font-bold">Selaras Biru</h6>
                        <p>- Coordination with engineers for work flow</p>
                        <p>- Price negotiations and relationships with clients.</p>
                        <p>- Price negotiations and comparison with Chinese Suppliers</p>
                        <p>- Set month end report data</p>
                    </div>
                    </div>
                    <div class="row mx-auto">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                        <h4 className="">2018-2019</h4>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <h4 className="font-bold">Graphic Designer</h4>
                        <h6 className="font-bold">Farmers Asociations</h6>
                        <p>- Layouting event banner and flyer</p>
                        <p>- Manage content upload to social media</p>
                        <p>- Prepare logistic needs</p>
                        <p>- Report data audiences and site evaluation</p>
                    </div>
                    </div>
                    <div class="row mx-auto">
                    <div className="col-lg-4 col-md-3 col-sm-4">
                        <h4 className="">2016-2018</h4>
                    </div>
                    <div className="col-lg-6 col-md-5 col-sm-12">
                        <h4 className="font-bold">International Visa & Ticket</h4>
                        <h6 className="font-bold">Abu Corporations</h6>
                        <p>- Visa application to the Provider</p>
                        <p>- International and domestic airplane ticket reservations</p>
                        <p>- Set the pilgrims hotel roomlist</p>
                        <p>- Check the completeness of the pilgrims file</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
