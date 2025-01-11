"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabPanelProps } from "@/interfaces/tabs";
import { useState } from "react";
import { Autocomplete, TextField, Tooltip } from "@mui/material";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function page() {
  const options = ["Option 1", "Option 2", "oPTION 3", "Option 4"];

  const [value, setValue] = useState(0);
  const [ancho, setAncho] = useState(300);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }


  return (
    <div>
      <div className="flex bg-yellow-200 h-12 items-center justify-center m-2">
        <p className="text-center">Titulo</p>
      </div>
      <div className="p-2 m-2 bg-red-400 h-[800px] grid md:grid-cols-2 md:h-[400px] justify-center">
        <div className="bg-green-300 min-w-full">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
              centered
            >
              <Tab {...a11yProps(0)} label="Item One" />
              <Tab {...a11yProps(1)} label="Item Two" />
              <Tab {...a11yProps(2)} label="Item Three" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <div className="w-72">
                <div className="m-4 p-2 ">
                  <Autocomplete
                    disablePortal
                    options={options}
                    sx={{
                      width: {ancho},
                    //   "@media (max-width: 1000px)": {
                    //     width: 300,
                    //     border: "3px solid red",
                    //   },
                    //   "@media (max-width: 800px)": {
                    //     width: 200,
                    //     border: "3px solid red",
                    //   },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Option" />
                    )}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              DOs
            </TabPanel>
            <TabPanel value={value} index={2}>
              Tres
            </TabPanel>
          </Box>
        </div>
        <div className="bg-blue-400">Segundo div</div>
      </div>
      <div className="p-2 bg-fuchsia-400 h-[500px] m-2">La tabla</div>
      <div className="p-2 bg-slate-400 h-[500px] m-2">El gráfico</div>
      <div className="flex bg-yellow-200 h-12 items-center justify-center m-2">
        <p className="text-center">Footer</p>
      </div>
    </div>
  );
}
