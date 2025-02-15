import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InteractiveMap from './InteractiveMap';
import Projects from './Projects';
import { technicalProjects } from '../data/TechnicalProjects';
import { biologyProjects } from '../data/BiologyProjects';
import { publications } from '../data/Publications';

const TabContent = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Travel" value="1" />
                <Tab label="Technical Projects" value="2" />
                <Tab label="Biology Projects" value="3" />
                <Tab label="Publications" value="4" />
            </TabList>
            </Box>
            <TabPanel value="1">
                <InteractiveMap />
            </TabPanel>
            <TabPanel value="2">
                <Projects projects={technicalProjects} />
            </TabPanel>
            <TabPanel value="3">
                <Projects projects={biologyProjects} />
            </TabPanel>
            <TabPanel value="4">
                <Projects projects={publications} />
            </TabPanel>
        </TabContext>
    </Box>
  );
};

export default TabContent;