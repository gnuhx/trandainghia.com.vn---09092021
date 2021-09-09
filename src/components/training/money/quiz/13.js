import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import img from '../quiz/images/13.png';

const useStyles = makeStyles((theme) => ({
    rootText: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      }
    ,root: {

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

const Quiz_13 =({history})=>{
    const classes = useStyles();

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

    const [color1, setColor1] = React.useState(0);

    return(
        <>

            <div>
            <Card className="block-example border border-warning" style={{backgroundColor:colorsBackground[color1%5].primaryColor}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        13
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px', marginRight:'5px'}}>
                Two shirts and three pairs of shorts cost $88.15. <br/>
                Three shirts and one pair of shorts cost $66.60. Find the cost of each.
                </Typography>

                </div>

                <div style={{marginLeft:'5%'}}>
                    <img src={img} style={{ maxWidth:'95%'}} />
                </div>

                <div style={{marginLeft:'4%',marginBottom:'50px'}}>
                <Table striped bordered hover>
                        <tbody style={{width:'100%'}}>
                            <tr>
                            {/* <td>
                                <div>
                                    <form className={classes.rootText} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Your answer" variant="outlined" />
                                    </form>
                                </div>
                            </td> */}
                            <td>
                                <div onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    style={{marginBottom:'0',marginLeft:'-10px',width:'95%'}}>
                                    <CardActions >
                                        <IconButton>
                                        <ExpandMoreIcon />
                                        </IconButton>
                                        <Typography>XEM ĐÁP ÁN</Typography>
                                    </CardActions>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div style={{marginBottom:'20px',marginLeft:'5%'}}>
                       <Typography paragraph>
                       2SHIRTS + 3 SHORTS=88.15 <br/>
                        3SHIRTS + 1 SHORTS=66.60 THEREFORE 1 SHORTS =66.60-3 SHIRTS SUBSTITUTING FOR SHORTS IN EQUATION 1 WE GET<br/>
                        2 SHIRTS + 3(66.60-3 SHIRTS)=66.60 OR 2 SHIRTS + 199.80-9 SHIRTS=66.60 OR<br/>
                        2 SHIRTS -9 SHIRTS=66.60-199.80 OR -7 SHIRTS=-111.65 OR 1 SHIRT =-111.65/-7 OR<br/>
                        SHIRTS=15.95 EACH THEREFORE<br/>
                        2(15.95)+3 SHORTS=88.15 OR 31.90 +3 SHORTS=88.15 OR 3 SHORTS =88.15-31.90 OR<br/>
                        SHORTS=56.25/3 OR SHORTS =18.75 EACH.
                       
                       </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Quiz_13;