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
import { travelCategories } from '../data/TravelCategories';

const TabContent = () => {
    const [tabValue, setTabValue] = useState('1');
    const [filterOptions, setFilterOptions] = useState<TagProps[]>(travelCategories);
    const [selectedFilters, setSelectedFilters] = useState<TagProps[]>([]); 
    const [data] = useState<Project[][]>([ technicalProjects, biologyProjects, publications ]);

    const handleChange = (newValue: string) => {
        setTabValue(newValue); 
        // Clear selected filters when tab changes
        setSelectedFilters([]); 
        // Update the filter bar options based on the new tab value
        if (newValue > '1') {
            const index = parseInt(newValue) - 2;
            // Get all tags from projects and flatten into a single array
            const allTags = data[index].map((project) => project.tags).flat();
            // Extract unique tag names
            const uniqueTagNames = Array.from(new Set(allTags.map(tag => tag.name)));
            // Map tag names to TagProps objects with name and color from tagCategoryColors
            const newFilterOptions = uniqueTagNames.map(name => {
                const tag = allTags.find(tag => tag.name === name)!;
                return {
                    name: tag.name,
                    category: tag.category,
                };
            });
            // Sort tags by category to group them together
            newFilterOptions.sort((a, b) => {
                if (a.category < b.category) return -1;
                if (a.category > b.category) return 1;
                return 0;
            });
            setFilterOptions(newFilterOptions);
        } else if (newValue === '1') {
            setFilterOptions(travelCategories);
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
                    backgroundColor: 'background.default',
                    position: { xs: 'fixed', md: 'sticky' }, 
                    top: { xs: 'auto', md: 0 },
                    bottom: { xs: 0, md: 'auto' },
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: "column", md: "row"},
                    width: '100%',
                }}>
                    <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                        <TabList 
                            sx={{
                                width: '100%',
                                '& .MuiTabs-scrollButtons': {
                                    display: 'flex',
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            onChange={(event, newValue) => handleChange(newValue)} 
                        >
                            <Tab label="Travel" value="1" />
                            <Tab label="Technical Projects" value="2" />
                            <Tab label="Biology Projects" value="3" />
                            <Tab label="Publications" value="4" />
                        </TabList>
                    </Box>
                    <Box sx={{ width: { xs: '100%', md: '30%' }, padding: { xs: 1, md: 0 } }}>
                        <FilterBar tabValue={tabValue} options={filterOptions} value={selectedFilters} onChange={setSelectedFilters} />
                    </Box>
                </Box>
                <TabPanel value="1">
                    <InteractiveMap hotspots={travelSpots} selectedFilters={selectedFilters} />
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