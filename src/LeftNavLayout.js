import React from 'react';
import { Menu, MenuItem, LeftNavLayout } from 'prism-reactjs';
import 'prism-reactjs/dist/index.css';

class MyApp extends React.Component {

  render() {
    const leftPanel = (
      <Menu oldMenu={false} activeKeyPath={['1']}>
        <MenuItem key="1">Summary</MenuItem>
        <MenuItem key="2">List</MenuItem>
        <MenuItem key="3">Alerts</MenuItem>
      </Menu>
    );
    
    return <LeftNavLayout leftPanel={leftPanel} rightBodyContent="Body Content Here" />





  }

}

export default MyApp;
