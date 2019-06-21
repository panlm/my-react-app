import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'prism-reactjs';
import { ThemeManager } from 'prism-reactjs';
import { MainPageLayout, Link, FlexLayout, AlertIcon, Badge, MenuIcon, NavBarLayout, Input, Favorite, MagGlassIcon, Menu, MenuItem, StackingLayout, Table } from 'prism-reactjs';

class MainPageLayoutExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPanelVisible: true
    }
  }
  
  render() {
    const styleBlackBackground = {
      padding: '20px 20px',
      backgroundColor: '#22272E',
      borderRadius: '4px',
      padding: '40px',
      margin: '-40px'
    };

    const account = <Link type="info">van@nutanix.com</Link>;
    
    const alerts = (
      <FlexLayout itemSpacing="10px" alignItems="center">
        <AlertIcon size="large" color={ThemeManager.getVar('red-1')}/>
        <Badge count={8} color="red"/>
      </FlexLayout>
    );
    
    const menuIcon = <MenuIcon onClick={() => this.toggleMenuState() } />;
    
    const header = <NavBarLayout
      accountInfo={ account }
      eventsTasksInfo={ alerts }
      menuIcon={ menuIcon }
      searchInput=<Input placeholder="Search Input" theme="dark" suffix={<Favorite background="dark" checked={true} />} prefix={<MagGlassIcon color={ThemeManager.getVar('gray-2')}/>}/>
    />
    
    // Left panel
    const leftPanel = (
      <Menu padding="20px-0px" oldMenu={false} theme="dark" activeKeyPath={['1']}>
        <MenuItem key="1">Summary</MenuItem>
        <MenuItem key="2">List</MenuItem>
        <MenuItem key="3">Alerts</MenuItem>
      </Menu>
    );
    
    
    // Body
    const columns = [{
      title: 'Name',
      key: 'name'
    }, {
      title: 'Age',
      key: 'age',
    }, {
      title: 'Address',
      key: 'address',
    }];
    
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    
    const body=(
      <StackingLayout padding="20px">
        <Table rowKey="key" dataSource={data} columns={columns} />
      </StackingLayout>
    );

    return (
      <MainPageLayout
        header={header}
        leftPanel={leftPanel}
        leftPanelVisible={this.state.leftPanelVisible}
        body={body}
        oldMainPageLayout={false}
      />
    );
  }
  
  toggleMenuState() {
    console.log('toggleMenuState - leftPanelVisible', !this.state.leftPanelVisible);
    this.setState({leftPanelVisible: !this.state.leftPanelVisible});
  }
}

// <MainPageLayoutExample />

export default MainPageLayoutExample;

