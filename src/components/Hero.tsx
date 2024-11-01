import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
const Hero = () => {
    return(
        <>
        <div className="w-full">
            <div className="max-w-sm py-20 md:max-w-md text-center mx-auto lg:max-w-xl lg:py-32">
                <Badge variant={"outline"} className="font-medium text-sm rounded-full mb-4">Website under development... <img src="/arrow-right-line.svg" alt="arrow du badge" width={15} height={15} className="ml-2"/></Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 lg:text-6xl ">Streamline Your Business Management</h1>
                <p className="text-slate-600 mb-4">
                    Optimize tasks, track performance, and empower your team with our
                    all-in-one management platform.
                </p>
                <Button className="font-semibold mt-8">Get Started for Free</Button>
                <p className="md:text-sm mt-4">7 day free trial. No credit card required.</p>
            </div>
            <div className="w-full relative">
                <div className="relative">
                    <div className="mt-20">
                        <img 
                            src="/dashboardscreen.png" 
                            alt="screen de dashboard" 
                            width={700} 
                            height={700} 
                            className="border rounded-lg mx-auto"
                        />
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-background via-background to-transparent lg:h-2/4"></div>
            </div>
        </div>
        </>
    )
}

export default Hero;