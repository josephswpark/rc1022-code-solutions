import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const targetId = Number(event.target.getAttribute('id'));
    if (event.target.className === 'name') {
      if (this.state.currentId === targetId) {
        this.setState({ currentId: null });
      } else {
        this.setState({ currentId: targetId });
      }
    }
  }

  render() {
    const language = this.props.content.map(selection =>
      <React.Fragment key={selection.id}>
        <p className='name' id={selection.id} onClick={this.handleClick}>{selection.name}</p>
        <p className={this.state.currentId === selection.id ? 'description' : 'hidden'}>{selection.description}</p>
      </React.Fragment>
    );
    return (
      <div className='title'>
        {language}
      </div>
    );
  }
}
