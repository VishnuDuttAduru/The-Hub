const useGenres = (selectedGenres) => {

    if(selectedGenres < 1) return "";
    const genreIds = selectedGenres.map((g) => g.id);
    return genreIds.reduce((acc,curr) => acc+"," + curr)
}

export default useGenres