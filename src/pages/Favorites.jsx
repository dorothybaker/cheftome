import Card from "../components/Card";

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <section className="px-4 py-7 flex flex-col gap-5 bg-gray-100 min-h-[calc(100vh-66px)]">
      <h2 className="text-3xl">My Favorites</h2>
      {favorites && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((favorite) => (
            <Card key={favorite.label} recipe={favorite} />
          ))}
        </div>
      )}

      {favorites.length < 1 && (
        <div className="h-full w-full flex items-center justify-center min-h-[350px] sm:text-4xl text-3xl text-center text-gray-400">
          You don't have any favorites yet!
        </div>
      )}
    </section>
  );
}

export default Favorites;
