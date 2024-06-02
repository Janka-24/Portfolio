import { useState } from 'react';
import avatar from '../../public/img/ordi.png';


export default function AboutMe() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section id='aboutMe'>
                <div id='introduction'>
                    <div>
                        <h1>Muthulingam Kajan</h1>
                        <h3>Alias Muthu</h3>
                    </div>
                </div>

                <div id="formation">
                    <div className='formationCard'>
                        <h3>Cycle d'orientation du Cayla</h3>
                    </div>
                    <div className='formationCard'>
                        <h3>Cycle d'orientation du Cayla</h3>
                    </div>
                    <div className='formationCard'>
                        <h3>Cycle d'orientation du Cayla</h3>
                    </div>
                </div>
            </section>
        </>
    );
}
