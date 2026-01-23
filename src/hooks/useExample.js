import { useState, useEffect } from 'react';

const useExample = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        // Logic to run on component mount or value change
        console.log('Value changed:', value);
    }, [value]);

    const updateValue = (newValue) => {
        setValue(newValue);
    };

    return [value, updateValue];
};

export default useExample;