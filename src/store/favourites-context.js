import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favoruiteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { }
});

export function FavouritesContextProvider(props) {
    const [userFacourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favoruiteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favoruiteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFacourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFacourites,
        totalFavourites: userFacourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;