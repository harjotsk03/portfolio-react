// Form.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useSendContact } from '../hooks/useSendContact';

export const Form = ({ onFormSubmit }) => {
    const { sendContact } = useSendContact(''); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
    
        // Check if required fields are not undefined or empty
        if (firstName && lastName && email && message) {
            await sendContact({
                firstName: firstName,
                lastName: lastName,
                email: email,
                message: message,
            });

            // Call the callback function from the parent component
            onFormSubmit(true);
        } else {
            // Handle the case where some fields are missing
            console.error('Please fill in all required fields.');
        }
    };

    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='nameContainer'>
                <Box
                    component="form"
                    sx={{
                        margin: '1vw', // Change the margins (top, right, bottom, left)
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'var(--text-color)', // Customize the border color
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--text-color)', // Customize the border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--text-color)', // Customize the border color when focused
                        },
                        },
                        '& .MuiInputLabel-root': {
                        color: 'var(--hover2)', // Customize the label color
                        },
                        '& .MuiInputBase-input': {
                        color: 'var(--text-color)', // Customize the text color
                        },
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        },
                        '& .MuiInputLabel-root': {
                        color: 'var(--hover2)',
                        '&.Mui-focused': {
                            color: 'var(--text-color)', // Customize the label color when focused
                        },
                        },
                        '& .MuiInputBase-input': {
                        color: 'var(--text-color)',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField className='inputName' id="outlined-basic" label="First Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)}/>
                </Box>
                <Box
                    component="form"
                    sx={{margin: '1vw', // Change the margins (top, right, bottom, left)
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'var(--text-color)',
                            borderWidth: '10px',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--text-color)', // Customize the border color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--text-color)', // Customize the border color when focused
                        },
                        },
                        '& .MuiInputLabel-root': {
                        color: 'var(--hover2)', // Customize the label color
                        },
                        '& .MuiInputBase-input': {
                        color: 'var(--text-color)', // Customize the text color
                        },
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        },
                        '& .MuiInputLabel-root': {
                        color: 'var(--hover2)',
                        '&.Mui-focused': {
                            color: 'var(--text-color)', // Customize the label color when focused
                        },
                        },
                        '& .MuiInputBase-input': {
                        color: 'var(--text-color)',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField className='inputName' id="outlined-basic" label="Last Name" variant="outlined" onChange={(e) => setLastName(e.target.value)} />
                </Box>
            </div>
            <Box
                component="form"
                sx={{
                    margin: '1vw', // Change the margins (top, right, bottom, left)
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'var(--text-color)', // Customize the border color
                    },
                    '&:hover fieldset': {
                        borderColor: 'var(--text-color)', // Customize the border color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'var(--text-color)', // Customize the border color when focused
                    },
                    },
                    '& .MuiInputLabel-root': {
                    color: 'var(--hover2)', // Customize the label color
                    },
                    '& .MuiInputBase-input': {
                    color: 'var(--text-color)', // Customize the text color
                    },
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'var(--text-color)',
                    },
                    '&:hover fieldset': {
                        borderColor: 'var(--text-color)',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'var(--text-color)',
                    },
                    },
                    '& .MuiInputLabel-root': {
                    color: 'var(--hover2)',
                    '&.Mui-focused': {
                        color: 'var(--text-color)', // Customize the label color when focused
                    },
                    },
                    '& .MuiInputBase-input': {
                    color: 'var(--text-color)',
                    },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField className='inputEmail' id="outlined-basic" type='email' label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
            </Box>
            <Box
                component="form"
                sx={{
                    margin: '1vw', // Change the margins (top, right, bottom, left)
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'var(--hover2)',
                    },
                    '& .MuiInputBase-input': {
                        color: 'var(--text-color)',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&:hover fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'var(--text-color)',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'var(--hover2)',
                        '&.Mui-focused': {
                            color: 'var(--text-color)',
                        },
                    },
                    '& .MuiInputBase-input': {
                        color: 'var(--text-color)',
                    },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        className='inputMessage'
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </Box>
            <button className='submitBtn'>Send Message</button>
        </form>
    );
}

