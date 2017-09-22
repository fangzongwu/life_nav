import React, { PropTypes, Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import { Menu, Breadcrumb, Icon } from 'antd';

import './App.scss';

const SubMenu = Menu.SubMenu;

@observer
class App extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

    this.state = {

    };
  }

  componentDidMount() {
  }

  renderAuthenticatedPage() {
    return (
      <div className="ant-layout-aside">
        <header className="header">
          <div>
            <span className="header-title-img"></span>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderAuthenticatedPage() }
      </div>
    );
  }
}

export default App;
