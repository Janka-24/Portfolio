import { useState } from 'react'
import avatar from '../../public/img/janka.png'
import Header from '../components/header.jsx'

function Home() {
    const [isOpen, setOpen] = useState(false)

    return (
        <body>
            <Header />
            <main>
                <div id="avatarContainer">
                    <img src={avatar} alt="Janka" id="avatar" />
                </div>
            </main>
            <footer></footer>

        </body>
    )
}

export default Home