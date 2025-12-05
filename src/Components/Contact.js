import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [detail, setDetail] = useState({ name: "", email: "", subject: "", message: "" })
    const validName = new RegExp('^[A-Za-z\\s]*$');
    const validEmail = new RegExp('([a-z0-9.]{2,})+@([a-z]{3,})+([.]{1})+[a-z]{2,3}')
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setDetail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        if (!detail?.name || !validName?.test(detail?.name)) {
            toast.error("Invalid Name")
            return
        } else if (!detail?.email || !validEmail?.test(detail?.email)) {
            toast.error("Invalid Email")
            return
        } else if (!detail?.subject || detail?.subject?.length <= 4) {
            toast.error("Subject must be at least 5 letters.")
            return
        } else if (!detail?.message || detail?.message?.length <= 10) {
            toast.error("Message must be at least 10 letters.")
            return
        }
        setLoading(true)
        const formData = new FormData(event.target);
        formData.append("access_key", "9d5dde59-c5e1-4104-90c6-ae8d52a927a6");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        setLoading(false)
        if (data?.success) {
            setDetail({ name: "", email: "", subject: "", message: "" })
            toast.success("Email Sent Successfully!")
        } else {
            toast.error("Unable to send Email");
        }
    };
    return (
        <React.Fragment>
            <div className="section-gap about-card contact-main" id="contact">

                <p className="sub-title scroll-animate">Contact</p>
                <h1 className="text-center title scroll-animate">Get in Touch with Me!</h1>

                <div className="row align-items-stretch">
                    <div className="col-lg-4">
                        <div className="contact-card scroll-animate">
                            <div className=" scroll-animate">
                                <i className="fa-solid fa-location-dot contact-icons"></i>
                                <div className="question">Place:</div>
                                <div className="answer">Chennai</div>
                            </div>
                            <div className="my-5 scroll-animate">
                                <i className="fa-solid fa-phone contact-icons"></i>
                                <div className="question">Contact Number:</div>
                                <div className="answer">+91 88258 70356</div>
                            </div>
                            <div className="scroll-animate">
                                <i className="fa-solid fa-envelope contact-icons"></i>
                                <div className="question">Email:</div>
                                <div className="answer">reenagunasekar5@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-card scroll-animate mt-lg-0 mt-4">
                            <form onSubmit={onSubmit}>
                                <div className="d-md-flex flex-lg-row gap-4">
                                    <input type="text" value={detail?.name || ""} onChange={handleChange} name="name" autoComplete="off" className="form-control input-form scroll-animate" placeholder="Name" />
                                    <input type="email" value={detail?.email || ""} onChange={handleChange} name="email" autoComplete="off" className="form-control mt-4 mt-md-0 input-form scroll-animate" placeholder="name@gmail.com" />
                                </div>
                                <input type="text" value={detail?.subject || ""} onChange={handleChange} name="subject" autoComplete="off" className="form-control input-form my-4 scroll-animate" placeholder="Your Subject" />
                                <textarea autoComplete="off" value={detail?.message || ""} onChange={handleChange} name="message" style={{ height: '108px' }} className="form-control input-form scroll-animate" placeholder="Your Message" />
                                {loading ? <i class="fa-solid fa-spinner fa-spin-pulse fs-5 mt-4 ms-4"></i> : <button disabled={loading} type="submit" className="btn btn-theme download-btn mt-4 scroll-animate">Send Me Message<i className="fa-solid fa-envelope ms-1"></i></button>}
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact;