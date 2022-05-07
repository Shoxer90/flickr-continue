import React, { memo } from 'react';
import { useDrag } from 'react-dnd';

import styles from './index.module.scss';

const Image = ({ id, url, identifier }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            item: { id, identifier },
            type: "image",
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        })
    );
    
    return (
        <img 
            alt={id}
            src={url}  
            ref={drag}
            className={`${styles.image} ${isDragging ? styles.border : styles.noBorder}`}
        />
    );

};

export default memo(Image);