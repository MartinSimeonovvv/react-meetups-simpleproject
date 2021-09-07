import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavouritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavourite(props.id);

    function toggleFavoruiteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavourite(props.id);
        } else {
            favoritesCtx.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoruiteStatusHandler}>
                        {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li >
    )
}

export default MeetupItem;