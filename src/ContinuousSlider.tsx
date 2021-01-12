import React from 'react';
import Slider from '@material-ui/core/Slider';

type MyProps = {
    value: number;
    handleChange: (val: number) => void;
};

type MyState = {
    value: number; 
}

export default class ContinuousSlider extends React.Component<MyProps, MyState> {

    constructor(props: MyProps){
        super(props);
        this.state = {value: props.value};

        this.changeHandler = this.changeHandler.bind(this);
    };

    changeHandler(event: any, newValue: number | number[]) {
        this.setState({value: newValue as number});
        this.props.handleChange(newValue as number);
    };

    render() {
        return(
        <div className="dou-slider">
            <Slider id="dou"
                value={this.state.value}
                onChange={this.changeHandler}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="on"
            />
        </div>);
    };
}