import { useEffect, useState } from "react";

export const UseEffectLesson = () => {
    const initialName = window.localStorage.getItem('userName') || 'teste';
    const [userName, setUserName] = useState(initialName);

    useEffect(() => {
        window.localStorage.setItem('userName', userName);
    }, [userName]);

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    return ( 
        <div>
            <form action="">
                <label id="userNameLabel" htmlFor="userName">Name:</label>
                <input type="text" onChange={handleChange} id="userName" value={userName} />
            </form>
            <div className="h1 text-info"> 
                {userName ? `Welcome, ${userName}` : 'Please, write your name!'}
            </div>
        </div>
    );
}
