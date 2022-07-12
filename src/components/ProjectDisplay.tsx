import { memo } from 'react'
import { Project } from '../types/Project'

interface ProjectDisplayProps {
    project: Project
}

const ProjectDisplay = ({ project }: ProjectDisplayProps): JSX.Element => {
    return (
        <div className="bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 h-full">
            <div className="mx-auto max-w-md">
                <h1 className="text-center text-2xl italic text-gray-600">{project.name}</h1>
                <div className="divide-gray-300/50">
                    <div className="space-y-6 pt-8 pb-8 text-base leading-7 text-gray-600">
                        <hr />
                        <img src={`/images/${project.imgName}`} alt={project.imgAlt} />
                        <p>{project.description}</p>
                    </div>
                    <hr className='p-4' />
                    <div className='flex flex-wrap pb-4'>
                        {project.tags.map(tag => {
                            return <div className='cursor-default text-green-500 border-2 border-green-500 rounded-xl p-1 m-1 hover:bg-green-200'>{tag}</div>
                        })}
                    </div>
                    <div className="flex flex-col items-center justify-center pt-2 text-base leading-7">
                        <div className="flex flex-row space-x-4 font-semibold">
                            <div className="rounded-xl border p-2">
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-600">See it live &rarr;</a>
                            </div>
                            <div className="rounded-xl border p-2">
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-600">Source code &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default memo(ProjectDisplay)