import { useState } from 'react';

export const useLoginModal = () => {
    const [isLoginModalShown, setIsLoginModalShown] = useState<boolean>(false);
    const toggleLoginModal = () => setIsLoginModalShown(!isLoginModalShown);
    return {
        isLoginModalShown,
        toggleLoginModal,
    };
};