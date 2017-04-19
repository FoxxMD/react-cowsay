import React from 'react';
import cowsay from 'cowsay-browser';

class Cowsay extends React.Component {
  componentDidMount(){
	// some logic here - we only test if the method is called
  }
  
  getText(){
	const content = this.props.children || this.props.text;
	let text      = null;
	if(content === undefined) {
	  return 'Cowsay needs some text! Please add some to the text prop or as children.';
	}
	else if(typeof content !== 'string') {
	  return 'Cowsay can only accept a string x.x';
	}
	return content;
  }
  
  getAction(){
	return this.props.think !== undefined ? 'think' : 'say';
  }
  
  getOptions(){
	return Object.assign( {
	  text: this.getText()
	}, { W: 40 }, this.props );
  }
  
  render(){
	
	const cow = cowsay[ this.getAction() ]( this.getOptions() );
	return (
		<pre style={{ textAlign: 'left' }}>
		  {cow}
            </pre>
	)
  }
}
;

export default Cowsay;