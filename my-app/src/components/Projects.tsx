import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ImageCard from '../reusables/ImageCard';
import { TagColor } from '../types/TagColor';

export interface Project {
  title: string;
  tags: { name: string; color: TagColor }[];
  description: string;
  image: string;
}

const Projects = ({ projects }: { projects: Project[] }) => {
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
