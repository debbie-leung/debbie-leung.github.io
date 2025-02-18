import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InteractiveMap from './InteractiveMap';
import Projects, { Project } from './Projects';
import { technicalProjects } from '../data/TechnicalProjects';
import { biologyProjects } from '../data/BiologyProjects';
import { publications } from '../data/Publications';
import travelSpots from '../data/TravelSpots';
import FilterBar from './FilterBar';
import { TagProps } from '../reusables/Tag';

const TabContent = () => {
    const [tabValue, setTabValue] = useState('1');
    const [filterOptions, setFilterOptions] = useState<TagProps[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<TagProps[]>([]); 
    const [data] = useState<Project[][]>([ technicalProjects, biologyProjects, publications ]);

    const handleChange = (newValue: string) => {
        setTabValue(newValue); 
        // Clear selected filters when tab changes
        setSelectedFilters([]); 
        // Update the filter bar options based on the new tab value
        const index = parseInt(newValue) - 2;
        if (index >= 0) {
            // Get all tags from projects and flatten into a single array
            const allTags = data[index].map((project) => project.tags).flat();
            // Extract unique tag names
            const uniqueTagNames = Array.from(new Set(allTags.map(tag => tag.name)));
            // Map tag names back to their full tag objects
            const newFilterOptions = uniqueTagNames.map(name => {
                return allTags.find(tag => tag.name === name)!;
            });
            // Sort tags by color to group them together
            newFilterOptions.sort((a, b) => {
                if (a.color < b.color) return -1;
                if (a.color > b.color) return 1;
                return 0;
            });
            setFilterOptions(newFilterOptions);
        } else {
            setFilterOptions([]); // Reset filters for travel tab
        }
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
                <Box sx={{ 
                    borderBottom: 1, 
                    borderColor: 'divider', 
                    position: 'sticky', 
                    top: 0, 
                    backgroundColor: 'white', 
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{ width: '75%' }}>
                        <TabList onChange={(event, newValue) => handleChange(newValue)} sx={{ width: '100%' }}>
                            <Tab label="Travel" value="1" />
                            <Tab label="Technical Projects" value="2" />
                            <Tab label="Biology Projects" value="3" />
                            <Tab label="Publications" value="4" />
                        </TabList>
                    </Box>
                    <Box sx={{ width: '25%' }}>
                        <FilterBar options={filterOptions} value={selectedFilters} onChange={setSelectedFilters} />
                    </Box>
                </Box>
                <TabPanel value="1">
                    <InteractiveMap hotspots={travelSpots} />
                </TabPanel>
                <TabPanel value="2">
                    <Projects projects={data[0]} selectedFilters={selectedFilters} />
                </TabPanel>
                <TabPanel value="3">
                    <Projects projects={data[1]} selectedFilters={selectedFilters} />
                </TabPanel>
                <TabPanel value="4">
                    <Projects projects={data[2]} selectedFilters={selectedFilters} />
                </TabPanel>
            </TabContext>
        </Box>
    );
};

export default TabContent;