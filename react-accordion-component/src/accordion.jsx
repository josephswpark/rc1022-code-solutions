import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    if (this.state.display === id) {
      this.setState({ display: null });
    } else {
      this.setState({ dispaly: id });
    }
  }

  render() {
    // const hidden = this.state.display ? '' : 'hidden';
    const language = this.props.description.map(selection =>
      <React.fragment key={selection.id}>
        <p id={selection.id} onClick={this.handleClick}>{selection.name}</p>
        <p className={this.state.display === selection.id ? '' : 'hidden'}>{selection.description}</p>
      </React.fragment>
    );
    return (
      // <div className='title' onClick={this.handleClick}>
      //   <p>{language.name}</p>
      //   <p className={'description ' + hidden}>{language.description}</p>
      // </div>
      <div className='title'>
        {language}
      </div>
    );

  }
}
