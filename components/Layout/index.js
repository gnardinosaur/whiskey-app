import React from 'react';
import Header from '../Header/index';
import MobileHeader from '../MobileHeader/index';

function Layout(props) {

  return (
    <div>
      {window.innerWidth > 415? <Header /> : <MobileHeader />}
        {props.children} {/* will render all child components */}
    </div>
  )
};

export default Layout;