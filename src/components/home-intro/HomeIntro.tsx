import './HomeIntro.css'

const HomeIntro = () => {
    return (
        <div className="home-intro">
            <h2 className='greeting'>Hello there!</h2>
            <p> I'm Ritin, a Data Analyst at Norse Atlantic Airways and a Computer Science graduate from NYU. I work on optimizing flight revenue through data analysis, automation, and pricing strategy — building tools that directly impact business performance.<br /><br />I also have experience in software development and UI/UX design, which helps me build solutions that are effective, easy to use and scalable. Feel free to get in touch via the <a href={`${import.meta.env.BASE_URL}contact`}>Contact</a> page. </p>
        </div>
    )
}

export default HomeIntro