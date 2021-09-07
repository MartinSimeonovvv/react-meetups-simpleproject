import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
    const favoritesCtx = useContext(FavouritesContext);

    let content;

    if (favoritesCtx.totalFavourites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavouritesPage;