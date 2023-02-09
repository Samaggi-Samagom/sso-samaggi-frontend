import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import axios from 'axios';

// has theme in case we need to create it!
const StyledButton = styled(Button)(({ theme }) => ({
    //backgroundColor: theme.vars.palette.primary.main, // var(--mui-palette-primary-main)
    //color: theme.vars.palette.primary.contrastText, // var(--mui-palette-primary-contrastText)
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: 'blue',
    color: 'white',
})); 

const StyledBox = styled(Box)(({ theme }) => ({
    //alignContent: "center",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    paddingBottom: 10,
    //alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
}));

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
    paddingBottom: 10,
    justifyContent: 'center',
    display: 'flex',
}));

const SignupForm: React.FC = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [university, setuniversity] = useState('');
    const [dateofgraduation, setdateofgraduation] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const responses = await axios.post('', {
                firstname,
                lastname,
                email,
                university,
                dateofgraduation,
                password,
                confirmpassword,
            });
            console.log(responses);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <StyledBox>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <FormControl component='fieldset'>
                <StyledFormLabel>New Samaggi Signup</StyledFormLabel>
                <StyledTextField
                    id='firstname'
                    label='firstname'
                    value={firstname}
                    onChange={e => setfirstname(e.target.value)}
                />
                <StyledTextField
                    id='lastname'
                    label='lastname'
                    value={lastname}
                    onChange={e => setlastname(e.target.value)}
                />
                <StyledTextField
                    id='email'
                    label='email'
                    value={email}
                    onChange={e => setemail(e.target.value)}
                />
                <StyledTextField
                    id='university'
                    label='university'
                    value={university}
                    onChange={e => setuniversity(e.target.value)}
                />
                <StyledTextField
                    id='dateofgraduation'
                    label='dateofgraduation'
                    value={dateofgraduation}
                    onChange={e => setdateofgraduation(e.target.value)}
                />
                <StyledTextField
                    id='password'
                    label='password'
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                    type='password'
                />
                <StyledTextField
                    id='confirmpassword'
                    label='confirmpassword'
                    value={confirmpassword}
                    onChange={e => setconfirmpassword(e.target.value)}
                />
                <StyledButton type="submit">Submit</StyledButton>
                </FormControl>
            </form>
        </StyledBox>
    );
}

export default SignupForm;


