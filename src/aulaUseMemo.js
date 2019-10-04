import React, { useState, useMemo } from 'react';

const AulaUseMemo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const countString = (str) => {
        console.log("Executado");
        return str.length;
    };

    const countedName = useMemo(() => countString(name), [name]);

    const countEmail = useMemo(() => countString(email), [email]);

    return (
        <>
            <h1>Bem vindo(a)</h1>

            <label>Qual seu nome?</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <p>{countedName} letras</p>

            <label>Qual seu E-mail?</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p>{countEmail} letras</p>

        </>
    );
}

export default AulaUseMemo;