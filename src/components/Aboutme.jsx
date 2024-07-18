import React from "react"

function Aboutme(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-slate-200 hover:underline">Joseph Lauria</h1>
            <p className="mt-3 text-base font-medium md:text-xl mb-1 text-slate-200 sm:text-xl">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I am a proud United States Army Veteran with a strong foundation in healthcare and emergency response, boasting over 6 years of leadership experience in high-pressure settings. My work has involved implementing efficient systems and managing critical equipment, with a focus on risk and quality assurance.
            <br />
            Now, I’m advancing my technical skills through an Associate’s degree in Computer Science at Southern New Hampshire University and a full-stack software engineering bootcamp at Code Platoon. My passion lies in solving complex problems and creating impactful technology, backed by an active Secret security clearance.</p>
        </div>
    )
}

export default Aboutme