import React from "react"
import Title from "./Title"

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert("Thank you for your message!");
    };

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                onSubmit={handleSubmit}
                action="https://getform.io/f/bxojyxla"
                method="POST"
                className="flex flex-col w-full md:w-7/12">
                    <Title>Contact</Title>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent border-2 rounded-md
                    focus:outline-none"
                    />
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent border-2 rounded-md
                    focus:outline-none"
                    />
                    <textarea 
                    name="message" 
                    placeholder="Message"
                    rows="10"
                    className="p-2 mb-4 bg-slate-900 
                    border-2 rounded-md
                    focus:outline-none"
                    />
                    <button 
                    type='submit'
                    className="text-center inline-block px-8 py-3 w-max text-base font-nedium rounded-md text-white bg-slate-500">
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact