import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex justify-center items-center mt-4 space-x-24'>
            <div className='text-2xl space-x-24'>
                <button className='relative group'>
                    About
                    <span className='absolute bottom-0 translate-y-0.5 left-1/2 h-0.5 w-0 bg-black transition-all duration-200 ease-out group-hover:left-0 group-hover:w-full' />
                </button>

                <button className='relative group'>
                    Projects
                    <span className='absolute bottom-0 translate-y-0.5 left-1/2 h-0.5 w-0 bg-black transition-all duration-200 ease-out group-hover:left-0 group-hover:w-full' />
                </button>
            </div>

            <div className='text-4xl'>
                <button className='relative group'>
                    Eddy Jiang
                    <span className='absolute bottom-0 translate-y-1 left-1/2 h-0.5 w-0 bg-black transition-all duration-200 ease-out group-hover:left-0 group-hover:w-full' />
                </button>
            </div>

            <div className='text-2xl space-x-24'>
                <button className='relative group'>
                    Research
                    <span className='absolute bottom-0 translate-y-0.5 left-1/2 h-0.5 w-0 bg-black transition-all duration-200 ease-out group-hover:left-0 group-hover:w-full' />
                </button>

                <button className='relative group'>
                    Contact
                    <span className='absolute bottom-0 translate-y-0.5 left-1/2 h-0.5 w-0 bg-black transition-all duration-200 ease-out group-hover:left-0 group-hover:w-full' />
                </button>
            </div>
        </header>
    )
}

export default Header