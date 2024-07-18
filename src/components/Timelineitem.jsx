import React from "react";

function TimelineItem({ year, title, duration, details }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-white" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold rounded-md bg-stone-100">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal">
                    {details}
                </p>
            </li>
        </ol>
    );
}

export default TimelineItem;