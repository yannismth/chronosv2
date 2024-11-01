import { solutions } from "@/adapters/data/solutions";
const Solutions = () => {
    return(
        <>
        <div className='bg-neutral-100 my-20'>
            <div className="text-center py-8 w-72 mx-auto md:w-full">
                <p className="uppercase mb-2">Solutions</p>
                <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl md:text-5xl lg:text-5xl">Optimize Team Productivity</h1>
            </div>
            <div className="py-20 mx-auto relative max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {solutions.map((solutions, index)=> (
                        <div key={index} className={`p-6 rounded-lg overflow-hidden bg-neutral-50 ${index == 2 ? "md:row-span-2" : index == 3 && "md:col-span-2"}`}>
                            <h1 className="font-semibold mb-2">{solutions.title}</h1>
                            <p className="font-thin text-sm md:text-base">{solutions.subtitle}</p>
                            <img src="/dashboardscreen.png" alt="" className="-mb-32 lg:-mb-32 md:-mb-24 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Solutions;