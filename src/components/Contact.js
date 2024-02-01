import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
export const Contact = () => {
    return(
        <>
            <div className='leftSideContact'>
                <div className='nameContainer'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '36ch', margin: '1vw' },
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
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '35ch', margin: '1vw' },
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
                        '& > :not(style)': { m: 1, width: '75ch', margin: '1vw' },
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
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="outlined-basic" type='email' label="Email" variant="outlined" />
                </Box>
            </div>
            <div className='rightSideContact'>
            </div>
        </>
    )
}