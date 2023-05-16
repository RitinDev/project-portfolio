import './projects.css'
import ProjectCard from '../../components/project-card/ProjectCard'

import odinEtchASketch from '../../assets/images/odin-etch-a-sketch.png'
import busyAgile from '../../assets/images/busy-agile.png'
import dataMisinformation from '../../assets/images/data-misinformation.png'
import projectPortfolio from '../../assets/images/project-portfolio.png'
import cryptoExpert from '../../assets/images/crypto-expert.png'
import emotechTask from '../../assets/images/emotech-task.png'
import toDoTogether from '../../assets/images/to-do-together.png'

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects__container">
                <ProjectCard projectName='Etch-a-Sketch' projectContributors='Individual' projectDescription='An interactive drawing tool replete with fun features.' projectImage={odinEtchASketch} projectLink='https://ritindev.github.io/odin-etch-a-sketch/' projectGithub='https://github.com/RitinDev/odin-etch-a-sketch' />
                <ProjectCard projectName='Busy?' projectContributors='Team' projectDescription='A social calendar to share your schedules with your friends to find the best time to connect.' projectImage={busyAgile} projectLink='https://busy-8qzj4.ondigitalocean.app/login' projectGithub='https://github.com/agiledev-students-fall2022/final-project-team-busy' />
                <ProjectCard projectName='To-Do Together' projectContributors='Individual' projectDescription='A full stack web app for creating and sharing interactive to-do lists.' projectImage={toDoTogether} projectLink='https://loc-final-project.onrender.com/' projectGithub='https://github.com/RitinDev/loc-final-project' />
                <ProjectCard projectName='Data Misinformation Project' projectContributors='Team' projectDescription='A data analysis project comparing correct and misleading Covid-19 related tweets.' projectImage={dataMisinformation} projectLink='https://ritindev.github.io/data-misinformation-project/' projectGithub='https://github.com/RitinDev/data-misinformation-project' />
                <ProjectCard projectName='Project Portfolio' projectContributors='Individual' projectDescription='A responsive portfolio to showcase my projects and skills.' projectImage={projectPortfolio} projectLink='https://ritindev.github.io/project-portfolio/' projectGithub='https://github.com/RitinDev/vite-project-portfolio' />
                <ProjectCard projectName='Crypto Expert' projectContributors='Team' projectDescription='Learn more about your favorite cryptocurrency tokens and predict prices with our LSTM neural network.' projectImage={cryptoExpert} projectLink='http://34.238.240.4:5000/' projectGithub='https://github.com/KrisesMaskey/Crypto_Expert' />
                <ProjectCard projectName='Emotech Internship Task' projectContributors='Individual' projectDescription='A responsive dashboard for Frontend Developer Role at Emotech.' projectImage={emotechTask} projectLink='https://emotech-frontend-task.netlify.app/' projectGithub='https://github.com/RitinDev/emotech-frontend-task' />
            </div>
        </div>
    )
}

export default Projects