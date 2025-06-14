import { useState } from "preact/hooks";

export default function Greeting({messages}){
    const randomMessage = () =>{
        return messages[(Math.floor(Math.random() * messages.length))]
    }

    const [greeting, setGreetings] = useState(messages[0])
    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={() => setGreetings(randomMessage())}>
                New Greeting
            </button>

        </div>
    )
}