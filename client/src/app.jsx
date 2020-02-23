import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <span>My name is Christian. This is going to be my server side rendered React app.</span>
    );
  }
}