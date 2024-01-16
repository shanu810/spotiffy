import './Home.css';
import React from 'react'
import Navbar from '../components/Navbar';

function Contact() {
    return (
        <div className="main">
            
                    <br/><br/><br/>
            <div className="side">
                    <div className="side1">
                        <img className="img3" src="./image/about-banner.jpeg"/>
                                    <div className="side2">
                                        <h1 className="edit1">Contact us</h1>
                                        <p className="edit2">Use this section to describe your company and the products you
                                            offer.You should store your company story and details Conta
                                            why you are in business.The goal is to create a connection with
                                            the visitor and  give them confidence to buy from you.</p>
                                    </div>
                    </div>
                    <div className="main2">
                     <div className="a1">
                                    <h1 className="edit3">Our vision</h1>
                                    <p className="edit4">A smart paragraph describing your company's vision of what it
                                        hopes to achieve in the future. This section is meant to inspire
                                        people to join your company on its journey.</p>
                                    <div className="a2">
                                        <img className="img4" src="./image/organic.jpeg"/>
                                    </div>
                     </div>
                    </div>
                    <br/>
                                <div className="main3">
                                    <h1 className="edit5">Social Media Posts</h1>
                                    <p className="edit6">This is a gallery to showcase image from your recent social posts</p>
                                    <div className="second">

                                        <img className="img11" src="./image/soc-1.jpeg"/>

                                            <img className="img11" src="./image/soc-3.jpeg"/>

                                                <img className="img11" src="./image/soc-2.jpeg"/>

                                                    <img className="img11" src="./image/soc-5.jpeg"/>

                                                        <img className="img11" src="./image/carrot.jpeg"/>

                                                        </div>

                                                    </div>
                                                    
             </div>
        </div>
                                                )
}


export default Contact;