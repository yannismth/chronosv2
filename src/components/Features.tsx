import { problems } from '@/adapters/data/problems'
const Features = () => {
    return(
        <>
        <div className="max-w-7xl px-4 lg:mx-auto lg:py-20">
            <div className='mb-20 text-center'>
                <p className='uppercase font-medium mb-4'>Problem</p>
                <h1 className='text-3xl font-semibold md:text-5xl'>Obstacles in Business Management</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {problems.map((problems, index) => (
                    <div key={index} className='md:flex flex-col gap-4 justify-between'>
                        <div className='bg-muted w-12 h-12 rounded-full flex items-center justify-center mb-4'>
                            <img src={problems.icon} alt="icones problems section" className='' width={24} height={24}/>
                        </div>
                        <h1 className='text-xl font-semibold mb-4'>{problems.title}</h1>
                        <p className='text-muted-foreground'>{problems.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Features;