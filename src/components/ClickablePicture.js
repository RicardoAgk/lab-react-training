import React from 'react';

class ClickablePicture extends React.Component {

    state = {
        click: false
    }

    handleIncrementClick = () => {
        this.setState({
            click: !this.state.click
        });
    };

    srcImg = click === false ? img : imgClicked;

    render() {
        return (
            <div>
                <button onClick={this.handleIncrementClick}><img src={srcImg}/></button>
            </div>

        )
    }
}


export default ClickablePicture;