import { Button } from '@/components/ui/button'
const Cta = () => {
    return(
        <>
        <section className="w-full bg-neutral-100 py-16">
            <div className="container text-center md:mx-auto px-4 py-16 max-w-7xl">
                <p className='uppercase tracking-wide text-sm mb-4'>Ready to get started ?</p>
                <h1 className='text-3xl mb-6 mx-4 font-semibold'>Start your free trial today.</h1>
                <Button className='w-full md:max-w-md'>Get started for Free</Button>
            </div>
        </section>
        </>
    )
}

export default Cta