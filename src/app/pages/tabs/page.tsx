"use client"

import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
      <table>
            <tbody>
              <tr className="h-12">
                <th className="text-left">Coeficiente de variabilidad:</th>
                <td className="w-24 text-center">45%</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">Promedio:</th>
                <td className="w-24 text-center">456</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">Mediana:</th>
                <td className="w-24 text-center">496</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">1° Cuartilo:</th>
                <td className="w-24 text-center">1485</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">3° Cuartilo:</th>
                <td className="w-24 text-center">375</td>
              </tr>                            
            </tbody>
          </table>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={tabValue} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
