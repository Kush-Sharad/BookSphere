import React,{useEffect, useState} from 'react';
import Model from './Model';

const subs=[
  {sub:'Kinematics of Machines'},
  {sub:'Dynamics of Machines'},
  {sub:'Fluid Mechanics'},
  {sub:'Solid Mechanics'},
  {sub:'Applied Thermodynamics'},
  {sub:'Production Technology'},
  {sub:'Heat and Mass Transfer'},
  {sub:'Material Science'},
  {sub:'Composite Materials'},
  {sub:'Tribological Components'},
];

const Mechanical = () => {
  const handleDivHover = (divId) => {
    console.log(`Div ${divId} is hovered`);
  };

  const [openModel, setOpenModel] = useState(false)

  useEffect(()=>{
    console.log(openModel);
  },[openModel])

  return (
    <div className="subject">
      {subs.map((divId) => (
        <div
          key={divId}
          className="hoverable-div"
          onClick={()=>setOpenModel(prev => !prev)}
          onMouseOver={() => handleDivHover(divId)}
          >
          {divId.sub}
        </div>
      ))}
      {openModel && <Model onclose={()=>{setOpenModel(prev => !prev)}}/>}
    </div>
  );
};

export default Mechanical;