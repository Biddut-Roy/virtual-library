
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const HomePage = () => {

    const [roomCode] = useState('SendaFeedback')
    const navigate = useNavigate()

    const handelSubmit = (ev) => {
        ev.preventDefault()
        navigate(`room/${roomCode}`)
    };

    
    return (
        <div>
            <div className="text-center my-5">
            <form onSubmit={handelSubmit}>
                <div className=" mb-5">
                    <input type="text" 
                        value="SendaFeedback"
                        readOnly
                        className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <button className="btn btn-success" type="submit">Enter Room</button>
            </form>
        </div>
        </div>
    );
};

export default HomePage;