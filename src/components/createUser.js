import React from "react";

function CreateUserComponent(sessionData){
    return(
        <form method='post' action='/createUser' className='secretInput'>
            <input type='text' id='createUsername' name='createUsername' placeholder='Username'>
            </input>
            <input type='text' id='email' name='email' placeholder='email'>
            </input>
            <input type='password' id='createPassword' name='createPassword' placeholder='password'>
            </input>
            <input type='submit' value='Create user'/>
        </form>
    )
}

export default CreateUserComponent;