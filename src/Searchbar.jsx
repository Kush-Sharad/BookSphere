// YourComponent.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';

const YourComponent = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Chemical Engineering', value: 'option1', route: '/Chemical' },
    { label: 'Civil Engineering', value: 'option2', route: '/Civil' },
    { label: 'Computer Science Engineering', value: 'option3', route: '/Computer' },
    { label: 'Electrical Engineering', value: 'option4', route: '/Electronics' },
    { label: 'Electronics Engineering', value: 'option5', route: '/Electrical' },
    { label: 'Mechanical Engineering', value: 'option6', route: '/Mechanical' },
    // Add more options as needed
  ];

  const handleOptionSelect = (option) => {
    if (option) {
      setSelectedOption(null);
      navigate(option.route);
    }
  };

  const textFieldStyles = {
    background: 'white',
    borderRadius: '50px', // Adjust the radius for rounding corners
    border : 'none',
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px', width: '300px', margin: 'auto'}}>
      <Autocomplete
        value={selectedOption}
        onChange={(_, newValue) => handleOptionSelect(newValue)}
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => 
        <TextField {...params} label="Search..."  style={textFieldStyles}/>}
      />
    </div>
  );
};

export default YourComponent;

