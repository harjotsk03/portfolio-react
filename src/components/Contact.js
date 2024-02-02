import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
export const Contact = () => {
    return(
        <>
            <div className='leftSideContact'>
                <div className='contactHeaderContainer'>
                    <h2 className='contactTitle'>Contact</h2>
                    <p className='contactSecondTitle'>Get in touch or shoot me an email directly at <span style={{fontFamily: 'main'}}>harjotsk03@gmail.com</span></p>
                </div>

                <form>
                    <div className='nameContainer'>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '20vw', margin: '1vw' },
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
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '20vw', margin: '1vw' },
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
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </Box>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '42vw', margin: '1vw' },
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
                        <TextField id="outlined-basic" type='email' label="Email" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                m: 2,
                                marginBottom: 0,
                                paddingBottom: 0,
                                width: '42vw',
                                minHeight: 'auto', // Set minHeight to 'auto' or remove it
                                maxHeight: 'auto', // Set maxHeight to 'auto' or remove it
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
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                            />
                        </div>
                    </Box>
                    <button className='submitBtn'>Send Message</button>
                </form>
                
            </div>
            <div className='rightSideContact'>
                        <div className='socials'>
                            <h3 className='socialsHeader'>+</h3>
                            <h3 className='socialsHeader'>-</h3>
                            <h3 className='socialsHeader'>)</h3>
                        </div>
            </div>
        </>
    )
}