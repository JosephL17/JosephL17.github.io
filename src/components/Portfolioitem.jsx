import React from "react";

function PortfolioItems({ title, imgUrl, stack, link }) {
    return (
        <div className="border-2 rounded-md overflow-hidden flex flex-col items-center">
            <img 
                src={imgUrl} 
                alt={`${title} preview`} 
                className="w-full h-36 md:h-48 object-cover cursor-pointer" 
                onClick={() => window.open(link, '_blank')}
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
                    {stack.map((item, index) => (
                        <span key={index} className="inline-block px-2 py-1 font-semibold border-2 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default PortfolioItems;