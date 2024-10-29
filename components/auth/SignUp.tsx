import React, { useState } from 'react'
import SignUpS1 from './SignUpS1'
import SignUpS2 from './SignUpS2';
import SignUpS3 from './SignUpS3';
import SignUpS4 from './SignUpS4';


export default function SignUp({ steps, setSteps }) {
    switch (steps) {
        case 1:
            return (
                <SignUpS1 setSteps={setSteps} />
            )

        case 2:
            return (
                <SignUpS2 setSteps={setSteps} />
            )

        case 3:
            return (
                <SignUpS3 setSteps={setSteps} />
            )

        case 4:
            return (
                <SignUpS4 setSteps={setSteps} />
            )

    }

}

