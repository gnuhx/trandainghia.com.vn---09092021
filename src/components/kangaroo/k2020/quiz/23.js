import { Button } from '@material-ui/core/';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import img from '../images/2020_23.PNG';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    media: {
      height: 100,
      width:100
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
  }));

const K2020_23 =({history})=>{
    const classes = useStyles();
    const colors = [
        {
            primaryColor : "#ffffff",
            secondaryColor : "#ffffff"
        },
        {
            primaryColor : "#036919",
            secondaryColor : "#036919"
        },
        {
            primaryColor : "#FF3232",
            secondaryColor : "#FF3232"
        },
        {
            primaryColor : "#5FC221",
            secondaryColor : "#5FC221"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const colorsBackground = [
        {
            primaryColor : "#ffffff",
            secondaryColor : "#ffffff"
        },
        {
            primaryColor : "#faffe6",
            secondaryColor : "#faffe6"
        },
        {
            primaryColor : "#ffffff",
            secondaryColor : "#ffffff"
        }
    ]

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [value, setValue] = React.useState('');
    const [color1, setColor1] = React.useState(0);
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === 'right') {
          setHelperText('Your answer is right!');
          setColor1(1);
          setError(false);
        } else if (value!=='') {
          setHelperText('Wrong answer! Please choose again.');
          setColor1(2);
          setError(true);
        } else {
          setHelperText('Please select an option.');
          setColor1(2);
          setError(true);
        }
      };

    return(
        <>
            <Card className={classes.root} style={{backgroundColor:colorsBackground[color1%5].primaryColor}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    23
                    </Avatar>
                    }

                    title = {
                        <Typography style={{fontSize:'30px'}}>Nine tokens are black on one side and white on the other. Initially, four tokens have the black side upwards.
                        In each turn you have to flip three tokens. What is the least number of turns you need to have all tokens showing the same colour?
                        </Typography>
                    }
                />

                <div style={{marginLeft:'5%'}}>

                    <img src={img} style={{maxWidth:'75%'}} />
                </div>

                <form style={{marginLeft:'1%'}} onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error} className={classes.formControl}>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="wrong1" control={<Radio />} label="1" />
                    <FormControlLabel value="right" control={<Radio />} label="2" />
                    <FormControlLabel value="wrong3" control={<Radio />} label="3" />
                    <FormControlLabel value="wrong2" control={<Radio />} label="4" />
                    <FormControlLabel value="wrong" control={<Radio />} label="5" />
                    </RadioGroup>
                    <div style={{color: colors[color1%5].primaryColor}}>
                    <Typography style={{fontSize:'20px'}} >{helperText}</Typography>
                    </div>
                    <Button type="submit" variant="outlined" style={{backgroundColor:'orange'}} className={classes.button}>
                    Xem đáp án
                    </Button>
                </FormControl>
                </form>

                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                    <ExpandMoreIcon />
                    </IconButton>
                    <Typography>XEM LỜI GIẢI</Typography>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                    </Typography>
                    </CardContent>
                    <div style={{marginBottom:'20px',marginLeft:'3%'}}>
                    <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/jS8SvvFuSiU?start=4418&end=4571" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    allow="fullscreen"></iframe>
                    </div>
                </Collapse>
            </Card>
        </>
    )
};
export default K2020_23;