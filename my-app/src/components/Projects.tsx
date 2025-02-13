import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ImageCard from '../reusables/Card';
import avrHardware from '../media/avr_hardware.jpg';
const Projects = () => {
  const projects = [
    {
      title: "AVR Hardware",
      description: "AVR Hardware is a hardware project that uses the AVR microcontroller.",
      image: avrHardware
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      image: avrHardware  // Using same image as placeholder
    }
  ];

  return (
    <Container>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid size={4}>
            <ImageCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
