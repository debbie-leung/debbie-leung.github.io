import React from 'react';
import { Typography, Avatar, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import profilePicture from '../media/Debbie.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Mode } from '../enums/Mode';

interface ProfileProps {
    colorMode: Mode;
    handleModeChange: (colorMode: Mode) => void;
}

const Profile = ({ colorMode, handleModeChange }: ProfileProps) => {

    return (
        <Grid container spacing={4} direction="column" sx={{ padding: 3, position: 'relative' }}>
            <Grid display="flex" justifyContent="center" sx={{ position: 'relative' }}>
                <Avatar alt="Debbie Leung" src={profilePicture} sx={{ width: 120, height: 120 }} />
                <IconButton 
                    onClick={() => { handleModeChange(colorMode === Mode.Light ? Mode.Dark : Mode.Light) }}
                    sx={{ 
                        position: 'absolute', 
                        top: {xs: '-1.5vh', md: '-2.5vh'}, 
                        right: { xs: '-2vw', md: '-0.5vw' },
                        padding: 1
                    }}
                >
                    { colorMode === Mode.Light ? <DarkModeIcon /> : <LightModeIcon /> }
                </IconButton>
            </Grid>
            <Grid display="flex" justifyContent="center">
                <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>DEBBIE</Typography>
                <Typography variant="h4" component="span">&nbsp;LEUNG</Typography>
            </Grid>
            <Grid container spacing={0} sx={{ flexDirection: { xs: "column", sm: "row"}, justifyContent: { sm: "space-evenly", md: "flex-start" }, alignItems: { xs : 'center' } }}>
                <Grid container spacing={2}>
                    <Grid>
                        <PhoneIcon />
                    </Grid>
                    <Grid>
                        <Typography>(646) 269-4181</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid>
                        <EmailIcon />
                    </Grid>
                    <Grid>
                        <Typography>dsl2162@columbia.edu</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }}}>
                <Typography variant="h6">SOCIAL</Typography>
                <Grid container direction="row" sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'space-evenly', sm: 'space-evenly', md: 'flex-start' } }}>
                    <Grid container spacing={2} component="a" href="https://www.linkedin.com/in/debbie-sinki-leung/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit', width: { xs: 'auto', sm: 'auto', md: '50%' } }}>
                        <Grid>
                            <LinkedInIcon />
                        </Grid>
                        <Grid>
                            <Typography>LinkedIn</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} component="a" href="https://github.com/debbie-leung" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit', width: { xs: 'auto', sm: 'auto', md: '50%' } }}>
                        <Grid>
                            <GitHubIcon />
                        </Grid>
                        <Grid>
                            <Typography>GitHub</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ 
                textAlign: { xs: 'center', sm: 'center', md: 'left' }
            }}>
                <Typography variant="h6" sx={{ width: '100%' }}>PROFILE</Typography>
                <Typography sx={{ width: '100%', textAlign: 'justify' }}>
                Hello! I'm a systems engineer with a B.A. degree in Computer Science and Environmental Biology from Columbia University. I enjoy embedded / firmware programming, robotics, full-stack development, computer vision, graphics and animation. I'm also passionate about marine biology and diving.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Profile;