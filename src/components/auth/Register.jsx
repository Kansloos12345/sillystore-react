import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!passwordValue) {
      setIsPasswordFocused(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const pronouns1 = [
    { value: 'He', label: 'He' },
    { value: 'She', label: 'She' },
    { value: 'They', label: 'They' },
    { value: 'It', label: 'It' },
    { value: 'Ze', label: 'Ze' },
    { value: 'Xe', label: 'Xe' },
    { value: 'Other', label: 'Other' },
    { value: 'RvSpijker', label: 'RvSpijker' }
  ];

  const pronouns2 = [
    { value: 'Him', label: 'Him' },
    { value: 'Her', label: 'Her' },
    { value: 'Them', label: 'Them' },
    { value: 'Its', label: 'Its' },
    { value: 'Zir', label: 'Zir' },
    { value: 'Xem', label: 'Xem' },
    { value: 'Other', label: 'Other' },
    { value: 'RvSpijker', label: 'RvSpijker' }
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/auth/login');
  };

  const [houseNumber, setHouseNumber] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    // Allow only positive numbers
    if (/^\d*$/.test(value)) {
      setHouseNumber(value);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mx-auto text-center mb-6">Create Account :3</h1>
      <form className="m-6 bg-transparentbg outline outline-basicblue outline-4 rounded-lg p-6 min-w-[200px] max-w-[400px] mx-auto">
        <h1 className="my-2">Account info</h1>
        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="Username"
            placeholder="Username"
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="Email"
            type="email"
            placeholder="yourname@gmail.com"
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              htmlFor="outlined-adornment-password"
              className={`transition-all duration-200 ${
                isPasswordFocused || passwordValue ? 'mt-0' : '-mt-2'
              }`}
            >
              Password
            </InputLabel>
            <OutlinedInput
              size="small"
              required
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={passwordValue}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        
        <div className="mb-2 flex space-x-2">
          <TextField
            id="outlined-select-pronoun1"
            select
            label="Singular pronoun"
            defaultValue="They"
            size="small"
            fullWidth
            required
          >
            {pronouns1.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-pronoun2"
            select
            label="Objective pronoun"
            defaultValue="Them"
            size="small"
            fullWidth
            required
          >
            {pronouns2.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <h1 className="my-2 mt-4">Adress</h1>

        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="Street name"
            placeholder="Street name"
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="House number"
            placeholder="House number"
            fullWidth
            required
            value={houseNumber}
            onChange={handleChange}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // This helps with mobile inputs
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="Postal code"
            placeholder="Postal code"
            fullWidth
            required
          />
        </div>
        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="Country"
            placeholder="Country"
            fullWidth
            required
          />
        </div>

        <div className="mb-6 mt-4">
          <Button variant="contained" color="success" fullWidth type="submit">
            Register & Login
          </Button>
        </div>
        <a onClick={goToLogin} className="hover:underline cursor-pointer">
          I already have account :3c
        </a>
      </form>
    </div>
  );
}

export default Login;
