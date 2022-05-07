import React, { memo, useCallback } from 'react';
import { useDrop } from 'react-dnd';

import styles from './index.module.scss';

const Tag = ({ title, onDragEnd, selectedTag, setSelectedTag }) => {
    const [, drop] = useDrop(
        () => ({
            accept : 'image',
            drop: (item) => {
                onDragEnd(item?.id, item?.identifier, title)
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
    );

    const onTagPress = useCallback(() => {
        if (selectedTag === title) {
            return setSelectedTag('');
        }

        setSelectedTag(title);
    }, [selectedTag, setSelectedTag, title]);

    return (
        <div ref={drop} onClick={onTagPress}>  
            {title}
        </div>
    );

};

export default memo(Tag);