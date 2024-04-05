import './projects.css'
import ProjectCard from '../../components/project-card/ProjectCard'
import projectsData from './projects.json'

// Import images
import odinEtchASketch from '../../assets/images/odin-etch-a-sketch.png'
import busyAgile from '../../assets/images/busy-agile.png'
import toDoTogether from '../../assets/images/to-do-together.png'
import dataMisinformation from '../../assets/images/data-misinformation.png'
import projectPortfolio from '../../assets/images/project-portfolio.png'
import cryptoExpert from '../../assets/images/crypto-expert.png'
import emotechTask from '../../assets/images/emotech-task.png'
import nyuTShirtApp from '../../assets/images/nyu-tshirt-app-ux-design.png'
import unixLabUXDesign from '../../assets/images/unix-lab-ux-design.png'

// Map image names to project images
type imageMap = Record<string, string>
const images: imageMap = {
    'odin-etch-a-sketch.png': odinEtchASketch,
    'busy-agile.png': busyAgile,
    'to-do-together.png': toDoTogether,
    'data-misinformation.png': dataMisinformation,
    'project-portfolio.png': projectPortfolio,
    'crypto-expert.png': cryptoExpert,
    'emotech-task.png': emotechTask,
    'nyu-tshirt-app-ux-design.png': nyuTShirtApp,
    'unix-lab-ux-design.png': unixLabUXDesign,
}

const Projects = () => {
    // Filter projects by subcategory
    const webDevelopmentProjects = projectsData.filter(project => project.projectSubcategory === 'Web Development')
    const uiUxDesignProjects = projectsData.filter(project => project.projectSubcategory === 'UI/UX Design')

    return (
        <div className="projects">
            <h1 className="heading">Projects</h1>

            {/* Web Development Projects */}
            <h2 className="subheading one">Web Development</h2>
            <div className="projects__container">
                {webDevelopmentProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        projectContributors={project.projectContributors as 'Individual' | 'Team'}
                        projectDescription={project.projectDescription}
                        projectImage={images[project.projectImage]}
                        projectLink={project.projectLink}
                        projectGithub={project.projectGithub}
                        projectFigma={project.projectFigma}
                        projectTechStack={project.projectTechStack}
                        deployed={project.deployed}
                    />
                ))}
            </div>

            {/* UI/UX Design Projects */}
            <h2 className="subheading two">UI/UX Design</h2>
            <div className="projects__container">
                {uiUxDesignProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        projectContributors={project.projectContributors as 'Individual' | 'Team'}
                        projectDescription={project.projectDescription}
                        projectImage={images[project.projectImage]}
                        projectLink={project.projectLink}
                        projectGithub={project.projectGithub}
                        projectFigma={project.projectFigma}
                        projectTechStack={project.projectTechStack}
                        deployed={project.deployed}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects
