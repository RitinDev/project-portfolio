import './techTable.css'
import { useEffect } from 'react'

import viteLogo from '../../assets/vite.svg'
import antDesignLogo from '../../assets/ant-design-logo.svg'
import navitaireLogo from '../../assets/navitaire.svg'

const techItems = [
    { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { label: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { label: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { label: 'Azure DevOps', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azuredevops/azuredevops-original.svg' },
    { label: 'Apache Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg' },
    { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { label: 'Navitaire Suite', icon: navitaireLogo, customWidth: '96', customHeight: '48' },
    { label: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
    { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
    { label: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' },
    { label: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { label: 'Vite', icon: viteLogo },
    { label: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { label: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { label: 'Ant Design', icon: antDesignLogo },
    { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg' },
    { label: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { label: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { label: 'Mocha', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' },
    { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { label: 'C / C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { label: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg' },
]

const TechTable = () => {
    useEffect(() => {
        const images = Array.from(document.querySelectorAll<HTMLImageElement>('.tech-grid img'))

        const handleMouseEnter = (event: MouseEvent) => {
            const target = event.target as HTMLImageElement
            target.classList.add('hover-animate')
        }

        const handleMouseLeave = (event: MouseEvent) => {
            const target = event.target as HTMLImageElement
            target.addEventListener(
                'animationiteration',
                () => target.classList.remove('hover-animate'),
                { once: true }
            )
        }

        images.forEach(img => {
            img.addEventListener('mouseenter', handleMouseEnter)
            img.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            images.forEach(img => {
                img.removeEventListener('mouseenter', handleMouseEnter)
                img.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <div className='tech-grid'>
            {techItems.map(({ icon, label, customWidth, customHeight }) => (
                <div key={label} className='tech-item'>
                    <img
                        src={icon}
                        alt={label}
                        width={customWidth ?? '48'}
                        height={customHeight ?? '48'}
                        className={label === 'Express' || label === 'Rust' ? 'switch-colors' : ''}
                        style={{ "objectFit": 'contain' }}
                    />
                    <br /><strong>{label}</strong>
                </div>
            ))}
        </div>
    )
}

export default TechTable