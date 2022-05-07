import React, { memo, useRef, useCallback } from 'react';

import { getPhoto } from '../../Services/FLICKR';

import Input from './Input';
import Button from './Button';
import { FLICKR_IMAGE_URI } from '../../Config/API';

const Search = ({ setTags, setImages }) => {
    const inputValue = useRef();
    
    const getImagesByTag = useCallback(async (tag) => {
        const response = await getPhoto(tag);

        const images = (response?.data?.photos?.photo || []).map((photo) => {
            return { 
                ...photo,
                identifier: tag,
                url: `${FLICKR_IMAGE_URI}${photo?.server}/${photo?.id}_${photo?.secret}.jpg` 
            };
        })

        return images;
    }, [])

    const onSearchPress = useCallback(async () => {
        const tags = inputValue
        .current
        ?.replace?.(/[^a-zа-яё]/gi, ' ')
        ?.replace?.(/\s+/g, ' ')
        ?.trim?.()
        ?.split?.(" ") || [];

        const distinctTags = [...(new Set(tags || []))];

        setTags(distinctTags);

        const images = await Promise.all(distinctTags.map((tag) => getImagesByTag(tag)));

        const flattedImages = images?.flat?.();

        setImages(flattedImages);
    }, []);


    
    return (
        <>
            <Input valueRef={inputValue} />
            <Button onPress={onSearchPress} />
        </>
    )

};

export default memo(Search);