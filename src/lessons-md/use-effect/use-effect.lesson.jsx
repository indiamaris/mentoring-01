import { useEffect, useState } from "react";


    const syncLocalStorageWithState = (keu, defaultValue = '') => {
            const initialState = window.localStorage.getItem(key);
         const [ state, setState ] = useState(initialState || '');
    // console.log(password)
    useEffect(() => {
        window.localStorage.setItem('state', state);
        // window.localStorage.setItem('password', password);
    }, [ state.setState ])
        return [state, setState]
    
}
export const UseEffectLesson = () => {
    const handleChange = (e) => {
        setUserName(e.target.value)
    };

    const greeting = (initialName = ''.onChange) => {

        const [ name, setName ] = syncLocalStorageWithState('name', initialName)

        const checkUserName = (userName) => { userName === "undefined" || userName === null ? 'xxx' : userName }
    
        console.log(checkUserName(userName))

        return (
            <div>
                <form action="">
                    <label id="userNameLabel" htmlFor="userName"> Name:</label>
                    <input type="text" onChange={handleChange} id="userName" value={userName} />
                    {/* <label id="passwordLabel" htmlFor="password"> Password:</label>
                <input type="text" onChange={handlePWDChange} id="password" value={password} /> */}
                </form>
                <div className="h1 text-info">
             
  
                </div>
            </div>
        );
                  
    }
}

console.log(greeting('Maria',handleChange));