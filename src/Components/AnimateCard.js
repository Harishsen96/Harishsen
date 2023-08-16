import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Animatedbox.css';
const WordAnimation = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const leftAnimation = useSpring({
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateX(2)' : 'translateX(-1000%)',
    })

    const rightAnimation = useSpring({
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateX(2)' : 'translateX(1000%)',
    });
    return (
        <div className="container">
            <div className="word-container">
                <animated.div className="word left-word" style={leftAnimation}>
                    Welcome to 
                </animated.div>
                <animated.div className="word right-word" style={rightAnimation}>
                    my profile 
                </animated.div>
            </div>
        </div>
    );
};

export default WordAnimation;
