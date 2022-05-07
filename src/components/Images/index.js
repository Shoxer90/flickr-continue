import React, { memo } from 'react';

import Image from './Image';

import styles from './index.module.scss';

const ImageContainer = ({ images }) => (
    !!images?.length && (
        <div className={styles.container}>
            {images?.map?.((image) => (
                <Image 
                    id={image?.id}
                    url={image?.url}
                    identifier={image?.identifier}
                    key={image?.id + image?.identifier}
                />
            ))}
        </div>
    )
);
export default memo(ImageContainer);
