import React, {memo} from 'react';

const Button = ({ onPress }) => (
    <button onClick={onPress}>
        Search
    </button>
);

export default memo(Button);
