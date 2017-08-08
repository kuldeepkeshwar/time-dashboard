import React from 'react';
import './styles.scss';

export default class SideMenu extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      open: false,
    };
    this.mounted = true;
    this.setNode = this.setNode.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }
  componentDidMount () {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount () {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  setNode(node) {
    this.node = node;
  }
  clickHandler(index) {
    this.toggle();
    const { onClick } = this.props;
    if (onClick) {
      onClick(index);
    }
  }
  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleDocumentClick (event) {
    if (this.mounted) {
      if (!this.node.contains(event.target)) {
        this.setState({ open: false });
      }
    }
  }
  render () {
    return (
      <div className="dropdown" ref={this.setNode} >
        <div role="presentation" className="dotted-icon" onClick={() => this.toggle()}>
          <span />
          <span />
          <span />
        </div>
        {this.state.open && (
          <div className="dropdown-menu">
            {
            this.props.items.map((item, i) => {
              return (
                <a key={item.value} className="dropdown-item" tabIndex={-1} role="link" onClick={() => this.clickHandler(i)}>{item.value}</a>
              );
            })
          }
          </div>
        )}
      </div>
    );
  }
}
SideMenu.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClick: React.PropTypes.func.isRequired,
};
