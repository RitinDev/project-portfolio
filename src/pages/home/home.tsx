import './home.css';
import TechTable from '../../components/tech-table/techTable';

const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <h3>🛠️ Tools and Technologies</h3>
            <TechTable />
        </div>
    )
}

export default Home