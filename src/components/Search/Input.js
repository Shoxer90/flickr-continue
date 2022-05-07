import React, { useState, useEffect, memo, useCallback } from 'react'


const Input = ({ valueRef }) => {
    const [value, setValue] = useState('');

    const onInputChange = useCallback((e) => {
        setValue(e?.target?.value?.trim());
    })

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return <input type="text" onChange={onInputChange} />;
};

export default memo(Input);
