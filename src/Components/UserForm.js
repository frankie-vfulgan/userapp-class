import React, { useState } from 'react';

function UserForm(props) {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        country: ""
    });

    function handleOnChange(event) {
        setState({
            ...state, 
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit() {
        props.addUser(state);
    }

    return(
        <div>
            <form>
                <div><br/><br/>
                    <label>Username</label><br/>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleOnChange}
                    />
                </div><br/>

                <div>
                    <label>Email</label><br/>
                    <input
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={handleOnChange}
                    />
                </div><br/>

                <div>
                    <label>Password</label><br/>
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleOnChange}
                    />
                </div><br/>

                <div>
                    <label>Country</label><br/>
                    <input
                        type="text"
                        name="country"
                        value={state.country}
                        onChange={handleOnChange}
                    />
                </div><br/>

                <div>
                    <button type="button" onClick={handleSubmit}>
                        Create User
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;