import React from 'react';
import { useParams } from 'react-router-dom';

const Colors = () => {
    const { red, blue, green } = useParams();
    return (
        <div 
            style={{
                backgroundColor: `hsl(${red}, ${green}%, ${blue}%)`,
                height: '200px',
                width: '200px'
            }}
        />
    )
}

export default Colors;