import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function ContinuousSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <div className={classes.root}>
            <Slider value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
            />
        </div>
    );
}