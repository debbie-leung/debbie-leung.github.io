import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ImageCard from '../reusables/ImageCard';
import { MediaType } from '../enums/MediaType';
import { TagProps } from '../reusables/Tag';
import { TagCategory } from '../enums/TagCategory';

interface ProjectTag {
  name: string;
  category: TagCategory;
}

export interface Project {
  title: string;
  media: string[];
  mediaType: MediaType;
  mediaLink?: string;
  tags: ProjectTag[];
  description: string;
}

interface ProjectProps {
  projects: Project[];
  selectedFilters: TagProps[];
}

const Projects = ({ projects, selectedFilters }: ProjectProps) => {
  const [selectedProjects, setSelectedProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setSelectedProjects(projects.filter(project => selectedFilters.every(filter => project.tags.some(tag => tag.name === filter.name))));
  }, [projects,selectedFilters]);

  return (
    <Container maxWidth={false}>
      <Grid container spacing={0}>
        {selectedProjects.map((project, index) => (
          <Grid key={index} size={4}>
            <ImageCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
