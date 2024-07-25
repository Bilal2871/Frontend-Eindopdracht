// This JavaScript function toggles a Pokémon's favorite status. 

export function toggleFavorite(name, favorites) {
    let updatedFavorites = [...favorites];

    if (favorites.includes(name)) {
        updatedFavorites = updatedFavorites.filter(fav => fav !== name);
    } else {
        if (favorites.length >= 4) { // If the Pokémon is already a favorite, it is removed; if not, it is added, with a maximum of four favorites allowed. 
            alert('Je kan maximaal 4 pokemons kiezen als favoriet.');
            return favorites;
        }
        updatedFavorites.push(name);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // The updated list of favorites is saved to local storage.
    return updatedFavorites;
}