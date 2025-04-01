import { useState } from 'react'
const Component = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center">
            <button className="cursor-pointer text-white bg-blue-500 px-4 py-1 rounded-lg duration-300 hover:bg-blue-400" onClick={() => setCount(count + 1)}>You've clicked me {count} times!</button>
        </div>
    )
}

export default Component