import React,{useEffect, useState} from 'react';
import Model from './Model';

const Chemical = () => {
  const handleDivHover = (divId) => {
    console.log(`Div ${divId} is hovered`);
  };

  const [openModel, setOpenModel] = useState(false)

  useEffect(()=>{
    console.log(openModel);
  },[openModel])

  return (
    <div className="subject">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((divId) => (
        <div
          key={divId}
          className="hoverable-div"
          onClick={()=>setOpenModel(prev => !prev)}
          onMouseOver={() => handleDivHover(divId)}
          >
          {`Subject- ${divId}`}
        </div>
      ))}
      {openModel && <Model onclose={()=>{setOpenModel(prev => !prev)}}/>}
    </div>
  );
};

export default Chemical;
