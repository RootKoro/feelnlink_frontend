import React, { useState } from 'react'
import SignUpS1 from './SignUpS1'
import SignUpS2 from './SignUpS2';
import SignUpS3 from './SignUpS3';
import SignUpS4 from './SignUpS4';


export default function SignUp({ steps, setSteps }) {
    const [registerFormData, setRegisterFormData] = useState({
        pseudo: '',
        email: '',
        password: '',
    })

    console.log(registerFormData);


    switch (steps) {
        case 1:
            return (
                <SignUpS1 setSteps={setSteps} setRegisterFormData={setRegisterFormData} />
            )

        case 2:
            return (
                <SignUpS2 setSteps={setSteps} setRegisterFormData={setRegisterFormData} />
            )

        case 3:
            return (
                <SignUpS3 setSteps={setSteps} setRegisterFormData={setRegisterFormData} />
            )

        case 4:
            return (
                <SignUpS4 setSteps={setSteps} />
            )

    }

}

