import React from 'react';
import { Menu, MenuItem, LeftNavLayout, PageLayout, NavBarLayout } from 'prism-reactjs';
import 'prism-reactjs/dist/index.css';
import { MenuDivider } from 'prism-reactjs/src/components/v2/Navigation/OldMenu.jsx';

class MyApp extends React.Component {

  render() {
    const leftPanel = (

      const MenuDivider = MenuDivider;
      const summary = 'summary';
      const alerts = 'Alerts';
    
    
    initialState = {
        page: summary
    };
    
    function menuOnClick(item, key, keyPath) {
      let page;
      console.log('key', item.key);
      switch(item.key) {
        case '1':
          page = summary;
          break;
        case '2':
          page = alerts;
          break;
      }
    
      console.log('menuOnClick', item, key, keyPath);
      setState({page: page})
    }
    
    <FlexLayout>
      <OldMenu isDeprecated={false} theme="light"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub2']} onClick={ menuOnClick } >
        <OldMenuItem isDeprecated={false} key="1">Summary</OldMenuItem>
        <OldMenuItem isDeprecated={false} key="2">Alerts</OldMenuItem>
        <OldMenuItem isDeprecated={false} key="3">Metrics</OldMenuItem>
        <MenuDivider/>
        <SubMenu isDeprecated={false} key="sub1" title="Hardware">
          <OldMenuItem isDeprecated={false} key="s11">Disks</OldMenuItem>
          <OldMenuItem isDeprecated={false} key="s12">GPUs</OldMenuItem>
    
          <SubMenu isDeprecated={false} key="sub9" title="Hardware">
            <OldMenuItem isDeprecated={false} key="s119">Disks</OldMenuItem>
            <OldMenuItem isDeprecated={false} key="s129" onClick={ () => {console.log('you click me')} }>GPUs</OldMenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu isDeprecated={false} key="sub2" title="Storage">
          <OldMenuItem isDeprecated={false} key="s21">Containers</OldMenuItem>
          <OldMenuItem isDeprecated={false} key="s22">Volumn Groups</OldMenuItem>
          <OldMenuItem isDeprecated={false} key="s23">Storage Pools</OldMenuItem>
        </SubMenu>
        <MenuDivider/>
        <OldMenuItem isDeprecated={false} key="4">Network</OldMenuItem>
        <OldMenuItem isDeprecated={false} key="5">Health</OldMenuItem>
      </OldMenu>
    
      { state.page }
    
    </FlexLayout>

    )      
  }

}

export default MyApp;
