import { useState } from 'react';
import Shiva from '../assets/shiva.png';
import avatar from '../assets/janka.png';
import reactLogo from '../assets/react.svg';
import tailwindLogo from '../assets/tailwind.svg';
import phpLogo from '../assets/php.svg';
import mySqlLogo from '../assets/mysql.svg';
import css from '../assets/css.png';
import bento from '../assets/bento.png';
import insta from '../assets/insta.svg';
import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import Muthufy from '../assets/muthu.png';

function Home() {
    const [isOpen, setOpen] = useState(false);

    return (
        <main>
            <div id='introduction'>
                <div>
                    <div>
                        <h1>Muthulingam Kajan</h1>
                        <h3>Junior Dev</h3>
                    </div>
                    <div>
                        <p>Étudiant en informatique au CFPT à Genève, en Suisse, passionné par le développement front-end et le design.</p>
                    </div>
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
                        url="https://shiva-restaurant.ch"
                    />

                    <Project
                        img={Muthufy}
                        name={"Muthufy"}
                        year={2024}
                        description={`Je développe une application similaire à Spotify en utilisant React JS et Tailwind CSS. J’utilise une base de données MySQL pour stocker les informations et récupère les données via l'API en PHP`}
                        techImgs={[reactLogo, tailwindLogo, phpLogo, mySqlLogo]}
                        url="https://github.com/Janka-24/Muthufy"
                    />
                </div>
            </div>
            <div id='competence'>
                <h3>Comment puis-je vous aider ?</h3>
                <div id="competenceContainer">
                    <CompetenceCard
                        title="React"
                        img={reactLogo}
                        description="UI dynamiques et interactives avec la bibliothèque JS"
                        turn={true}
                    />
                    <CompetenceCard
                        title="CSS"
                        img={css}
                        description="Création d'UI."
                        turn={false}
                    />
                    <CompetenceCard
                        title="MySQL"
                        img={mySqlLogo}
                        description="BDD relationnelles avec MySQL."
                        turn={false}
                    />
                </div>
            </div>
            <div id='contact'>
                <h3>Contact</h3>
                <div className='contactContainer'>
                    <MediaCard username="kajan" img={bento} url="https://bento.me/kajan" />
                    <MediaCard username="kajanm2006@gmail.com" img={gmail}/>
                    <MediaCard username="Janka-24" img={github} url="https://github.com/Janka-24" />
                    <MediaCard username="kajan.24" img={insta} url="https://www.instagram.com/kajan.24?igsh=NnA4cjJqejFucnR5&utm_source=qr" />
                </div>
            </div>
        </main>
    );
}

const MediaCard = (props) => {
    return (
        <a href={props.url} className='mediaContainer'>
            <img src={props.img} alt="md" />
            <p>{props.username}</p>
        </a>
    );
}

const CompetenceCard = (props) => {
    const { turn, title, description, img } = props;
    return (
        <div className='competenceCard'>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img
                src={img}
                alt={`techLogo`}
                className={`competenceIcon ${turn ? 'turning' : ''}`}
            />
        </div>
    );
}

const Project = (props) => {
    const handleClick = () => {
        window.location.href = props.url;
    }
    return (
        <div className='projectCard' style={{ backgroundImage: `url(${props.img})` }} onClick={handleClick}>
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
