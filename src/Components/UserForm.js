import React, { useState } from 'react';

function UserForm(props) {
    const {state, setState} = useState({
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
                <div>
                    <label>Username</label>
                    <input>
                        type="text"
                        name="username"
                        value={state.username}
                        onChange={handleOnChange}
                    </input>
                </div>

                <div>
                    <label>Email</label>
                    <input>
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={handleOnChange}
                    </input>
                </div>

                <div>
                    <label>Password</label>
                    <input>
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleOnChange}
                    </input>
                </div>

                <div>
                    <label>Country</label>
                    <input>
                        type="text"
                        name="country"
                        value={state.country}
                        onChange={handleOnChange}
                    </input>
                </div>

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