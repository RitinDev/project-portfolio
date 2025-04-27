import './projects.css'
import ProjectCard from '../../components/project-card/ProjectCard'
import projectsData from './projects.json'

// Import images
import odinEtchASketch from '../../assets/images/optimized/odin-etch-a-sketch.png'
import busyAgile from '../../assets/images/optimized/busy-agile.png'
import toDoTogether from '../../assets/images/optimized/to-do-together.png'
import dataMisinformation from '../../assets/images/optimized/data-misinformation.png'
import projectPortfolio from '../../assets/images/optimized/project-portfolio.png'
import cryptoExpert from '../../assets/images/optimized/crypto-expert.png'
import emotechTask from '../../assets/images/optimized/emotech-task.png'
import nyuTShirtApp from '../../assets/images/optimized/nyu-tshirt-app-ux-design.png'
import unixLabUXDesign from '../../assets/images/optimized/unix-lab-ux-design.png'
import CITIESDashboard from '../../assets/images/optimized/cities-dashboard.png'
import CITIESDatasetDownload from '../../assets/images/optimized/cities-dataset-download.png'
import CITIESAir from '../../assets/images/optimized/cities-air.png'
import scratch from '../../assets/images/optimized/scratch.png'

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
    'cities-dashboard.png': CITIESDashboard,
    'cities-dataset-download.png': CITIESDatasetDownload,
    'cities-air.png': CITIESAir,
    'scratch.png': scratch
}

const Projects = () => {
    // Filter projects by subcategory
    const citiesProjects = projectsData.filter(project => project.projectSubcategory === 'CITIES')
    const webDevelopmentProjects = projectsData.filter(project => project.projectSubcategory === 'Web Development')
    const uiUxDesignProjects = projectsData.filter(project => project.projectSubcategory === 'UI/UX Design')

    return (
        <div className="projects">
            <h1 className="heading">Projects</h1>

            {/* CITIES Projects */}
            <h2 className="subheading one">Software Developer at CITIES Center for Interacting Urban Networks</h2>
            <div className="projects__container">
                {citiesProjects.map((project, index) => (
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

            {/* Web Development Projects */}
            <h2 className="subheading two">Web Development</h2>
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
