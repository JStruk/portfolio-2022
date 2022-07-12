import React from "react";
import ProjectDisplay from '../components/ProjectDisplay';
import { projects } from '../assets/projects'
import { Project } from '../types/Project';

const Projects = (): JSX.Element => {
    return (
        <div className='p-4 pt-12 flex flex-col justify-center w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-24 gap-x-4'>
                {projects.map((project: Project) => {
                    return <ProjectDisplay project={project} />
                })}
            </div>
        </div>
    )
}

export default React.memo(Projects)