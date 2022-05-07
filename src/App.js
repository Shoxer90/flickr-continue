import React, { useState, useMemo, useEffect, useRef } from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend' ;
import './App.css';
import './components/taskStyle.css'

import Tags from './components/Tags';
import Search from './components/Search';
import ImageContainer from './components/Images';

const App = () => {
   const [tags, setTags] = useState([]);
   const [images, setImages] = useState([]);
   const [selectedTag, setSelectedTag] = useState('');

   const imagesRef = useRef([]);
   
   const onDragEnd = (id, identifier, title) => {
      if(identifier !== title) {
          return;
      }
      
      const newImages = imagesRef.current.map((item) => {
         if (id === item?.id) {
            return { ...item, inContainer: true };
         }
         
         return item;
      });

      setImages(newImages);
    };

    const allImages = useMemo(() => images.filter((image) => !image?.inContainer), [images]);

    const selectedImages = useMemo(
       () => 
         images.filter((image) => image?.inContainer && image?.identifier === selectedTag)
   , [images, selectedTag]);


    useEffect(() => {
         imagesRef.current = images;
    }, [images]);
    console.log('selectedTag', selectedTag)

  return (
     <DndProvider backend={HTML5Backend}>
        <Search setTags={setTags} setImages={setImages} />
        <ImageContainer key="all" images={allImages} />
        <Tags 
            tags={tags}
            onDragEnd={onDragEnd}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
         />
        <ImageContainer key="selected" images={selectedImages} />
     </DndProvider>
  );
}

export default App;
