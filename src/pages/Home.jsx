import { useEffect, useState } from "react";
import Card from "../components/Card";
import { GoSearch } from "react-icons/go";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const fetchRecipes = async (query) => {
    setIsLoading(true);
    setRecipes([]);

    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`
      );
      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("dessert");
  }, []);

  return (
    <section className="bg-gray-100 px-4 py-7 flex flex-col gap-5">
      <div>
        <form
          className="w-full h-12 bg-white shadow-md flex items-center gap-2 rounded-xl"
          onSubmit={(e) => {
            e.preventDefault();
            fetchRecipes(query);
          }}
        >
          <input
            type="text"
            placeholder="What do you want to cook today?"
            className="px-2 outline-none bg-transparent w-full h-full pl-3 ellipsis text-[17px]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="h-full bg-[#735542] text-white px-3 rounded-e-xl"
            type="submit"
          >
            <GoSearch size={20} />
          </button>
        </form>
      </div>
      <div className="flex flex-col">
        <h1 className="sm:text-3xl text-2xl">Recommended Recipes</h1>
        <span className="text-base text-gray-500">Popular choices</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!isLoading &&
          recipes.map((recipe, idx) => (
            <Card key={idx} recipe={recipe.recipe} />
          ))}
        {isLoading &&
          [...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col gap-3 w-full">
              <div className="h-[220px] w-full bg-gray-200 rounded-xl"></div>
              <div className="flex justify-between">
                <div className="h-5 w-28 bg-gray-200 rounded-xl"></div>
                <div className="h-5 w-24 bg-gray-200 rounded-xl"></div>
              </div>
              <div className="h-5 w-1/2 bg-gray-200 rounded-xl"></div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Home;
