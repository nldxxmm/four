import React from 'react'
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
      return <div>正在加载...</div>
  }
});

class MyComponent extends React.Component {
  render(){
    return <LoadableComponent/>
  }
}

export default MyComponent