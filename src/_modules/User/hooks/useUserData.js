import { fetchUserData, fetchUserRepositories } from "@/_modules/User/api";
import { useEffect, useState } from "react";

import { fetchLanguagesForRepositories } from "@/_modules/User/helpers";

const useUserData = (username) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languageData, setLanguageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(false);

    const fetchData = async () => {
      try {
        const user = await fetchUserData(username);
        if (!user) return;

        setUserData(user);

        const reposData = await fetchUserRepositories(username);
        const sortedRepos = reposData
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 10);

        setRepos(sortedRepos);

        const languageCount = await fetchLanguagesForRepositories(sortedRepos);

        const totalLanguages = Object.values(languageCount).reduce(
          (acc, value) => acc + value,
          0
        );

        setLanguageData(
          Object.entries(languageCount).map(([language, value]) => ({
            language,
            percentage: (value / totalLanguages) * 100,
          }))
        );
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);
  return { userData, repos, languageData, loading, error };
};

export default useUserData;
