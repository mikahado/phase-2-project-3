import React from 'react';


const Home = () => {
    return (
        <div>
            <h1>The Exquisite Horse</h1>
            <img src={require("./img/exquisiteHorseLogo.png")} alt="A Very Exquisite Horse" height="200" />
            <h2>a collaborative creation application</h2>
            <hr/>
            <p>Exquisite Horse is a sample feature of a colloborative app designed for storytellers of all types -- from film to commercial, novels to poetry. </p>

        </div>
    )
}

export default Home