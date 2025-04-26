import './home.css';
import TechTable from '../../components/tech-table/techTable';
import HomeIntro from '../../components/home-intro/HomeIntro';
import WorkSection from '../../components/work-section/WorkSection';

const Home = () => {
    return (
        <div className="home">
            <HomeIntro />
            <h2><span className="airplane emoji">✈️</span> My Roles So Far</h2>
            <WorkSection />
            <h2 className='tools-tech'><span className="tools emoji">🛠️</span> Tools and Technologies</h2>
            <TechTable />
        </div>
    )
}

export default Home