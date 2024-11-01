import { Switch } from "@/components/ui/switch"
import { pricing } from '@/adapters/data/pricing'
import { Button } from "./ui/button"
const Pricings = () => {
    return(
        <>
        <section className="max-w-7xl px-4 md:mx-auto">
            <div className="text-center mb-20">
                <p className="mb-8 uppercase tracking-wider">Pricing</p>
                <h1 className="mb-8 text-3xl font-semibold xl:text-5xl">Choose the plan that's right for you</h1>
                <div className="flex justify-center items-center gap-4">
                    <p className="font-semibold">Monthly</p>
                    <Switch />
                    <p className="font-semibold">Yearly</p>
                </div>
            </div>
            <div className="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex mx-auto gap-4 flex-col lg:flex-row lg:max-w-4xl">
                {pricing.map((pricing, index) => (
                    <div key={index} className={`border w-full rounded-md h-auto p-4 flex flex-col h-96 gap-6 justify-between ${index == 1 ? "border-2 border-black" : ""}`}>
                        <div className="text-center">
                            <h1 className="font-semibold uppercase mb-4">{pricing.title}</h1>
                            <p className="font-bold text-3xl">{pricing.price}</p>
                        </div>
                        <ul className="">
                            {pricing.features.map((feature,index) => (
                                <li key={index} className="flex gap-2">
                                    <img src="/check.svg" alt="" width={20} height={20} />{" "}
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="text-center">
                            <Button
                                className="w-full my-2"
                                variant={index === 1 ? "default" : "outline"}
                            >
                                Subscribe
                            </Button>
                            <p className="text-gray-400 text-sm mt-2">
                                Perfect for individuals and small projects
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Pricings