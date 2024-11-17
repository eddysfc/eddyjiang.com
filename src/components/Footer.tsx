import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='flex flex-col mt-40'>
            <div className='flex justify-center space-x-4'>
                <a href='https://github.com/eddysfc'>
                    <button>
                        <FaGithub size={32} />
                    </button>
                </a>

                <a href='https://www.linkedin.com/in/eddysfc/'>
                    <button>
                        <FaLinkedin size={32} />
                    </button>
                </a>
            </div>

            <div className='text-center mt-1'>
                Copyright © 2024 Eddy Jiang. Site source on <a className='text-blue-500' href='https://github.com/eddysfc/eddyjiang.com'>GitHub</a>.
            </div>
        </footer>
    )
}

export default Footer