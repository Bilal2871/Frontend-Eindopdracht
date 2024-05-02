export function toggleFavorite(name, favorites) {
    let updatedFavorites = [...favorites];

    if (favorites.includes(name)) {
        updatedFavorites = updatedFavorites.filter(fav => fav !== name);
    } else {
        if (favorites.length >= 4) {
            alert('Je kan maximaal 4 pokemons kiezen als favoriet.');
            return favorites;
        }
        updatedFavorites.push(name);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return updatedFavorites;
}