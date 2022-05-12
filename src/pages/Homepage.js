import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../store/characters/thunks";
import {
  getCharacters,
  getCharactersOlderThan,
  getLoading,
} from "../store/characters/selectors";

// 1. get a list of characters
// - Make a request => axios + thunk
// - Set up a reducer case + action to store this data
// - Dispatch this to the store using this action
// - check if data is in the store
// - Create a selector to get the data to the page
// - render it!
const Homepage = () => {
  const [age, setAge] = useState(0);
  // const characters = useSelector(getCharacters);
  const parsedAge = parseInt(age);
  const characters = useSelector(getCharactersOlderThan(parsedAge));
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  console.log("do I have characters in the homepage?", characters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Game of Thrones</h1>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        {characters.length
          ? characters.map((c) => (
              <div>
                <img width="400" src={c.imageUrl} alt={c.name} />
                <h3>{c.name}</h3>
              </div>
            ))
          : "No characters with this age"}
      </div>
    </div>
  );
};

export default Homepage;
