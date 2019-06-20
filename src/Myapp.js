import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'prism-reactjs';
import { ThemeManager } from 'prism-reactjs';
import { MainPageLayout } from 'prism-reactjs';

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
  
      const account = <MainPageLayout.Link type="info">van@nutanix.com</MainPageLayout.Link>;
      
      const alerts = (
        <MainPageLayout.FlexLayout itemSpacing="10px" alignItems="center">
          <MainPageLayout.AlertIcon size="large" color={ThemeManager.getVar('red-1')}/>
          <MainPageLayout.Badge count={8} color="red"/>
        </MainPageLayout.FlexLayout>
      );
      
      const menuIcon = <MainPageLayout.MenuIcon onClick={() => this.toggleMenuState() } />;
      
      const header = <MainPageLayout.NavBarLayout
        accountInfo={ account }
        eventsTasksInfo={ alerts }
        menuIcon={ menuIcon }
        searchInput=<MainPageLayout.Input placeholder="Search Input" theme="dark" suffix={<MainPageLayout.Favorite background="dark" checked={true} />} prefix={<MainPageLayout.MagGlassIcon color={ThemeManager.getVar('gray-2')}/>}/>
      />
      
      // Left panel
      const leftPanel = (
        <MainPageLayout.Menu padding="20px-0px" oldMenu={false} theme="dark" activeKeyPath={['1']}>
          <MainPageLayout.MenuItem key="1">Summary</MainPageLayout.MenuItem>
          <MainPageLayout.MenuItem key="2">List</MainPageLayout.MenuItem>
          <MainPageLayout.MenuItem key="3">Alerts</MainPageLayout.MenuItem>
        </MainPageLayout.Menu>
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
        <MainPageLayout.StackingLayout padding="20px">
          <MainPageLayout.Table rowKey="key" dataSource={data} columns={columns} />
        </MainPageLayout.StackingLayout>
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

