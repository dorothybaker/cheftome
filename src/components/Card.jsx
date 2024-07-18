import { useState } from "react";
import { GoHeart, GoHeartFill, GoPlay } from "react-icons/go";

function Card({ recipe }) {
  const [favorite, setFavorite] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const inFavorites = favorites.some((fav) => fav.label === recipe.label);

    if (inFavorites) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setFavorite(false);
    } else {
      favorites.push(recipe);
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="bg-white w-full rounded-xl">
      <a
        href={recipe?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-1"
      >
        <div className="relative">
          <img
            src={recipe?.image}
            alt=""
            className="h-[210px] w-full object-cover rounded-t-xl"
          />
          <div className="absolute bottom-2 left-2 bg-white px-4 py-2 flex items-start gap-2 rounded-full z-[1] uppercase">
            <span className="text-sm text-[#735542]">
              {recipe?.yield} servings
            </span>
          </div>
          <button
            className="bg-white h-8 w-8 flex items-center justify-center absolute top-2 right-2 rounded-full z-[1]"
            onClick={(e) => {
              e.preventDefault();
              addToFavorites();
            }}
          >
            {favorite ? (
              <GoHeartFill size={20} color="#735542" />
            ) : (
              <GoHeart size={20} />
            )}
          </button>

          <div className="absolute top-0 left-0 h-full w-full bg-black/20 rounded-t-xl" />
        </div>

        <div className="p-2 flex flex-col">
          <h2 className="text-xl line-clamp-1 text-[#735542]">
            {recipe?.label}
          </h2>
          <div className="flex items-center justify-between gap-x-3">
            <h2 className="text-base capitalize text-slate-700 line-clamp-1">
              {recipe?.cuisineType} &ndash; {recipe.mealType.join(", ")}
            </h2>
            <button className="size-7 bg-[#735542] text-white flex items-center justify-center rounded-full">
              <a
                href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoPlay size={18} />
              </a>
            </button>
          </div>

          <span className="text-[15px] leading-5 line-clamp-2 text-slate-500">
            {recipe?.ingredientLines.join(", ")}
          </span>
        </div>
      </a>
    </div>
  );
}

export default Card;
