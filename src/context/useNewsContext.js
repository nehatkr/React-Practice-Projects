import { useContext } from "react";
import NewsContext from "../../src/context/NewsContext"
const useNewsContext = () => {
  return useContext(NewsContext);
};

export default useNewsContext;
