import './home.css';
import TechTable from '../../components/tech-table/techTable';
import HomeIntro from '../../components/home-intro/HomeIntro';

const Home = () => {
    return (
        <div className="home">
            <h1 className='home-heading'>Ritin Malhotra</h1>
            <HomeIntro />
            <h2>🛠️ Tools and Technologies</h2>
            <TechTable />
        </div>
    )
}

export default Home