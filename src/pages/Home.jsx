import { useState } from 'react';
import Shiva from '../assets/shiva.png';
import avatar from '../assets/janka.png';

function Home() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div id='introduction'>
                <div>
                    <h1>Muthulingam Kajan</h1>
                    <h3>Front-end dev & designer junior</h3>
                </div>
                <div>
                    <p>Étudiant en informatique au CFPT à Genève, en Suisse, passionné par le développement front-end et le design.</p>
                </div>
                <div id="avatarContainer">
                    <img src={avatar} alt="Janka" id="avatar" />
                </div>
            </div>
            <div id='project'>
                <h3>Project</h3>
                <div id="projectContainer">
                    <Project name="Shiva" img={Shiva} tech="React JS" description="Un site web pour un restaurant Sri Lankais et indien située à Gèneve qui n'avait pas changer leur identité visuelle sur internet depuis 2014." />
                    <Project name="Shiva" img={Shiva} tech="React JS" description="Un site web pour un restaurant Sri Lankais et indien située à Gèneve qui n'avait pas changer leur identité visuelle sur internet depuis 2014." />
                </div>
            </div>
        </>
    );
}
const FormationCard = (props) => {
    return (
        <div className='formationCard'>
            <h3>{props.ecole}</h3>
        </div>
    )
}

const Project = (props) => {
    return (
        <div className='projectCard' style={{ backgroundImage: `url(${props.img})` }}>
            <div className='glassmorphism'></div>
            <div className='content'>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <p>{props.tech}</p>
            </div>
        </div>
    );
}


export default Home;
