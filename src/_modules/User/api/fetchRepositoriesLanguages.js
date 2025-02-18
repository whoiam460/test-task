const fetchRepositoriesLanguages = async (repoUrl) => {
  const response = await fetch(repoUrl, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  return await response.json();
};

export default fetchRepositoriesLanguages;
