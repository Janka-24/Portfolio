import { useState } from 'react';
import Shiva from '../assets/shiva.png';
import avatar from '../assets/janka.png';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind.svg';
import phpLogo from '../assets/php.svg';
import mySqlLogo from '../assets/mysql.svg';
import Muthufy from '../assets/muthu.png';

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
                    <Project
                        img={Shiva}
                        name={"Shiva"}
                        year={2024}
                        description={"Un site web pour un restaurant Sri Lankais et indien située à Gèneve qui n'avait pas changé leur identité visuelle sur internet depuis 2014."}
                        techImgs={[reactLogo]}
                    />

                    <Project
                        img={Muthufy}
                        name={"Muthufy"}
                        year={2024}
                        description={`Je développe une application similaire à Spotify en utilisant React JS et Tailwind CSS. J’utilise une base de données MySQL pour stocker les informations et récupère les données via l'API en PHP`}
                        techImgs={[reactLogo, tailwindLogo, phpLogo, mySqlLogo]}
                    />
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
                <div className='ctHeader'>
                    <h3>{props.name}</h3>
                    <p className='projectCardYear'>{props.year}</p>
                </div>

                <p className='cardDescription'>{props.description}</p>
                <div className='techIcons'>
                    {props.techImgs.map((techImg, index) => (
                        <img key={index} src={techImg} alt={`techLogo${index}`} className='projectTechIcon' />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
