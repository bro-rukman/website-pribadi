import React from 'react'
import code from 'Assets/image/code-outline.svg'
import pentools from 'Assets/image/pentools.svg'
import coffee from 'Assets/image/coffee.svg'

export default function Personal() {
    return (
        <>
        <div className="container personal">
            <div className="row mt-5-4">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <p className="font-weight-bold">Need help ?</p>
                    <p className="color-text">rukmanaendang99@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <p className="font-weight-bold">Touch me </p>
                    <p className="color-text">+62 819 1242 5940</p>
                </div>
            </div>

            <h3 className="mt-5 mb-5 pb-2 mb-4 font-weight-bold text-center">What I do ?</h3>
            <div className="row d-flex justify-content-around mb-3">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="d-flex justify-content-center">
                        <img src={pentools} alt="" style={{width:100,height:100}}/>
                        </div>
                    <p className="pt-3 color-text text-justify">Make a wireframe from the brainstorming flow and designing UI for every single parts must be declared on the page of the design rule essence, slicing every assets image and icon to deploy into zeplin.</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center">
                    <img src={code} alt="code" style={{width:100,height:100}}/>
                    </div>
                    <p className="pt-3 color-text text-justify">Developing front end from UI thats i’ve done for, thinking for each parts can be reusable and funcionality, consume an API from the database, routing every page, provide an order component to consumed and make sure the clean code of course.</p>
                </div>
            </div>
            <div className="mt-4 border-top">
                <p className="color-text">Made with <span><img src={coffee} alt="coffee"/></span> by me. </p>
            </div>
        </div>
        </>
    )
}
