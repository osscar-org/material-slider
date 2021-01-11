import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

interface ISliderPros {
    value: number;
    handleChange: (val: number) => void;
};

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function ContinuousSlider(Props: ISliderPros) {
    const classes = useStyles();
    const [value, setValue] = React.useState<number>(Props.value);

    const changeHandler = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
        Props.handleChange(newValue as number);
    };

    return (
        <div className={classes.root}>
            <Slider id="dou"
                value={value}
                onChange={changeHandler}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="on"
            />
        </div>
    );
}