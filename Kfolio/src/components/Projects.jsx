import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='pb-4 border mt-20'>
        <h2 className='my-20 text-center font-bold text-5xl text-white'>Projects</h2>
        {/* <h2 className='my-20 text-center font-bold text-5xl'>Projects</h2> */}
        <div className='flex flex-col items-center m-10'>
            {
                PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap justify-center border p-5 w-[90%] items-center'>
                        <div className='w-full lg:w-1/4'>
                            <img src={project.image} width={350} height={350} alt={project.title} className='mb-6 rounded' />
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            <div className='flex flex-wrap max-w-md gap-2'>
                                {
                                    project.technologies.map((tech, ind) => (
                                        <span className='mr-2 max-w-lg rounded-lg bg-stone-900 py-2 px-4 text-sm font-medium text-stone-300' key={ind}>{tech}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects