import './techTable.css'

import viteLogo from '../../assets/vite.svg'
import antDesignLogo from '../../assets/ant-design-logo.svg'

const TechTable = () => {
    return (
        <div className="tech-table">
            <table>
                <thead>
                </thead>
                <tbody>
                <tr>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                            width="48"
                            height="48"
                            alt="HTML"
                        />
                        <br /><strong>HTML5</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                            width="48"
                            height="48"
                            alt="CSS3"
                        />
                        <br /><strong>CSS3</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                            width="48"
                            height="48"
                            alt="JavaScript"
                        />
                        <br /><strong>JavaScript</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                            width="48"
                            height="48"
                            alt="TypeScript"
                        />
                        <br /><strong>TypeScript</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            width="48"
                            height="48"
                            alt="React"
                        />
                        <br /><strong>React</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                            width="48"
                            height="48"
                            alt="Material UI"
                        />
                        <br /><strong>Material UI</strong>
                    </td>
                </tr>
                <tr>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                            width="48"
                            height="48"
                            alt="Bootstrap"
                        />
                        <br /><strong>Bootstrap</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src={antDesignLogo}
                            width="48"
                            height="48"
                            alt="Ant Design"
                        />
                        <br /><strong>Ant Design</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            width="48"
                            height="48"
                            alt="Node.js"
                        />
                        <br /><strong>Node.js</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            className='express-logo'
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            width="48"
                            height="48"
                            alt="Express"
                        />
                        <br /><strong>Express</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                            width="48"
                            height="48"
                            alt="MongoDB"
                        />
                        <br /><strong>MongoDB</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                            width="48"
                            height="48"
                            alt="MySQL"
                        />
                        <br /><strong>MySQL</strong>
                    </td>
                </tr>
                <tr>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            width="48"
                            height="48"
                            alt="Git"
                        />
                        <br /><strong>Git</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src={viteLogo}
                            width="48"
                            height="48"
                            alt="Vite"
                        />
                        <br /><strong>Vite</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                            width="48"
                            height="48"
                            alt="Jest"
                        />
                        <br /><strong>Jest</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
                            width="48"
                            height="48"
                            alt="Mocha"
                        />
                        <br /><strong>Mocha</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                            width="48"
                            height="48"
                            alt="Python"
                        />
                        <br /><strong>Python</strong>
                    </td>
                    <td align="center" height="108" width="108">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                            width="48"
                            height="48"
                            alt="C++"
                        />
                        <br /><strong>C / C++</strong>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TechTable