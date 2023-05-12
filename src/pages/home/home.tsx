import './home.css';
import TechTable from '../../components/tech-table/techTable';
import HomeIntro from '../../components/home-intro/HomeIntro';

const Home = () => {
    return (
        <div className="home">
            <h1 className='home-heading'>Ritin Malhotra</h1>
            <HomeIntro />
            <h2 className='tools-tech'><span className="tools-emoji">🛠️</span> Tools and Technologies</h2>
            <TechTable />
        </div>
    )
}

export default Home