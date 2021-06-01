import { useState } from 'react';

export const useSignUpModal = () => {
    const [isSignUpModalShown, setIsSignUpModalShown] = useState<boolean>(false);
    const toggleSignUpModal = () => setIsSignUpModalShown(!isSignUpModalShown);
    return {
        isSignUpModalShown,
        toggleSignUpModal,
    };
};