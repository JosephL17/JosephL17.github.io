import React from "react"

function Aboutme(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-slate-200 hover:underline">Joseph Lauria</h1>
            <p className="mt-3 text-base font-medium md:text-xl mb-1 text-slate-200 sm:text-xl">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I am a proud United States Army Veteran with over six years of leadership experience in high-pressure environments, primarily in healthcare and emergency response. I have a strong background in implementing efficient systems and managing critical equipment, with a focus on risk management and quality assurance.
            <br />
            I hold an Associate’s degree in Computer Science and a certificate in Full Stack Software Engineering from Code Platoon. I am passionate about solving complex problems and creating impactful technology. With an active Secret security clearance, I am eager to contribute to innovative projects and collaborate with like-minded professionals in the tech industry.</p>
        </div>
    )
}

export default Aboutme