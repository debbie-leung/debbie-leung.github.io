import React from 'react';
import { Typography, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import profilePicture from '../media/Debbie.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
    return (
        <Grid container spacing={4} direction="column" sx={{ padding: 3 }}>
            <Grid display="flex" justifyContent="center">
                <Avatar alt="Debbie Leung" src={profilePicture} sx={{ width: 120, height: 120 }} />
            </Grid>
            <Grid display="flex" justifyContent="center">
                <Typography variant="h4">DEBBIE LEUNG</Typography>
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
                Hello! I'm a systems engineer with a B.A. degree in Computer Science and Environmental Biology from Columbia University. I'm passionate about embedded programming, robotics, full-stack development, computer vision, graphics and animation. I also dabble in marine biology and diving.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Profile;