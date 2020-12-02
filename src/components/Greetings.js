import React from 'react';
class Greetings extends React.Component {
  render() {
    if (this.props.lang === 'fr')
      return (
        <div className="greets">
          Bonjour {this.props.children}
        </div>
      );
    if (this.props.lang === 'de')
      return (
        <div className="greets">
          Hallo {this.props.children}
        </div>
      );
    if (this.props.lang === 'es')
      return (
        <div className="greets">
          Hola {this.props.children}
        </div>
      );
    return (
      <div className="greets">
        Hello {this.props.children}
      </div>
    );
  }
}

export default Greetings;