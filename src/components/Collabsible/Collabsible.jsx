import { Component } from 'react';

export class Collabsible extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {isOpen ? 'Скрыть' : 'Показать'}
        </button>
        {isOpen && children}
      </div>
    );
  }
}
