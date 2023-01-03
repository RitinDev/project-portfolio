import './projects.css'
import ProjectCard from '../../components/project-card/ProjectCard'

import odinEtchASketch from '../../assets/images/odin-etch-a-sketch.png'
import busyAgile from '../../assets/images/busy-agile.png'
import dataMisinformation from '../../assets/images/data-misinformation.png'

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects__container">
                <ProjectCard projectName='Etch-a-Sketch' projectContributors='Individual' projectDescription='An interactive drawing tool replete with fun features.' projectImage={odinEtchASketch} projectLink='https://ritindev.github.io/odin-etch-a-sketch/' projectGithub='https://github.com/RitinDev/odin-etch-a-sketch' />
                <ProjectCard projectName='Busy?' projectContributors='Team' projectDescription='A social calendar to share your schedules with your friends to find the best time to connect.' projectImage={busyAgile} projectLink='https://busy-8qzj4.ondigitalocean.app/login' projectGithub='https://github.com/agiledev-students-fall2022/final-project-team-busy' />
                <ProjectCard projectName='Data Misinformation Project' projectContributors='Team' projectDescription='A data analysis project comparing correct and misleading Covid-19 related tweets.' projectImage={dataMisinformation} projectLink='https://ritindev.github.io/data-misinformation-project/' projectGithub='https://github.com/RitinDev/data-misinformation-project' />
            </div>
        </div>
    )
}

export default Projects