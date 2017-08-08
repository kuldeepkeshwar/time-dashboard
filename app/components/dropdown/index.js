import React from 'react';
import './styles.scss';

export default class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      active: 0,
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
    this.setState({
      active: index,
    });
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
    const arrowCls = (this.state.open) ? 'arrowdown open' : 'arrowdown';
    return (
      <div className="dropdown mr-15" ref={this.setNode} >
        <a tabIndex={-1} role="link" className="dropdown-link" onClick={() => this.toggle()}>
          {this.props.items[this.state.active].value}
          <span className={arrowCls} />
        </a>
        {this.state.open && (
        <div className="dropdown-menu">
          {
            this.props.items.map((item, i) => {
              const cls = (i === this.state.active) ? 'dropdown-item active' : 'dropdown-item';
              return (
                <a key={item.value} className={cls} tabIndex={-1} role="link" onClick={() => this.clickHandler(i)}>{item.value}</a>
              );
            })
          }
        </div>
        )}
      </div>
    );
  }
}
DropDown.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onClick: React.PropTypes.func.isRequired,
};
