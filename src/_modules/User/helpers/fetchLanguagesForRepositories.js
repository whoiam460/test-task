import { fetchRepositoriesLanguages } from "@/_modules/User/api";

const fetchLanguagesForRepositories = async (repositoriesData) => {
  const languageCount = {};

  const languagesPromises = repositoriesData.map(async (repo) => {
    try {
      const languages = await fetchRepositoriesLanguages(repo.languages_url);

      Object.entries(languages).forEach(([language, value]) => {
        languageCount[language] = (languageCount[language] || 0) + value;
      });
    } catch (err) {
      console.error(`Error fetching languages for repo: ${repo.name}`, err);
    }
  });

  await Promise.all(languagesPromises);

  return languageCount;
};

export default fetchLanguagesForRepositories;
