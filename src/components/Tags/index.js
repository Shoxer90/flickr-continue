import React, { memo } from 'react';

import Tag from './Tag';

import styles from './index.module.scss';

const Tags = ({ tags, onDragEnd, selectedTag, setSelectedTag }) => (
    !!tags?.length && (
        <div className={styles.container}>
            {tags?.map?.((tag) => (
                <Tag 
                    key={tag}
                    title={tag}
                    onDragEnd={onDragEnd}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                />
            ))}
        </div>
    )
);

export default memo(Tags);
