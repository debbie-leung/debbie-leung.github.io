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
            <Grid sx={{ position: 'absolute', top: 0, right: 0, paddingTop: 1, paddingRight: { xs: 2, md: 5 } }}>
                <IconButton onClick={() => { handleModeChange(colorMode === Mode.Light ? Mode.Dark : Mode.Light) }}>
                { colorMode === Mode.Light ? <LightModeIcon /> : <DarkModeIcon /> }
                </IconButton>
            </Grid>
            <Grid display="flex" justifyContent="center">
                <Avatar alt="Debbie Leung" src={profilePicture} sx={{ width: 120, height: 120 }} />
            </Grid>
            <Grid display="flex" justifyContent="center">
                <Typography variant="h4" component="span" sx={{ fontWeight: 'bold' }}>DEBBIE</Typography>
                <Typography variant="h4" component="span">&nbsp;LEUNG</Typography>
            </Grid>
            <Grid>
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
            <Grid>
                <Typography variant="h6">SOCIAL</Typography>
                <Grid container direction="row" spacing={4}>
                    <Grid container spacing={2} component="a" href="https://www.linkedin.com/in/debbie-sinki-leung/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Grid>
                            <LinkedInIcon />
                        </Grid>
                        <Grid>
                            <Typography>LinkedIn</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} component="a" href="https://github.com/debbie-leung" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Grid>
                            <GitHubIcon />
                        </Grid>
                        <Grid>
                            <Typography>GitHub</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid>
                <Typography variant="h6">PROFILE</Typography>
                <Typography>
                Hello! I'm a systems engineer with a B.A. degree in Computer Science and Environmental Biology from Columbia University. I enjoy embedded / firmware programming, robotics, full-stack development, computer vision, graphics and animation. I'm also passionate about marine biology and diving.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Profile;