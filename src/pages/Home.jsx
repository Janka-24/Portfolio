import { useState } from 'react';
import avatar from '../../public/img/janka.png';
import AboutMe from '../components/AboutMe';

function Home() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section id='landing'>
                <div id="avatarContainer">
                    <img src={avatar} alt="Janka" id="avatar" />
                </div>
            </section>
            <AboutMe />
        </>
    );
}

export default Home;
