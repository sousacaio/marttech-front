import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import { useAuth } from '../../../../contexts/auth';
interface ProductItemProps {
    name: string,
    price: number,
}

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

const ProductItem: React.FC<ProductItemProps> = (props): JSX.Element => {

    const classes = useStyles();
    
    const { signed } = useAuth()

    return <Grid item >
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography>
                    {props.price}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" color="primary">
                    <InfoIcon />
                </Button>
                {signed ?
                    <Button size="small" color="primary">
                        <AddShoppingCartIcon />
                    </Button> : ''}
            </CardActions>
        </Card>
    </Grid>
};

export default ProductItem;
