const fetchRepositoriesLanguages = async (repoUrl) => {
  try {
    const response = await fetch(repoUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    });
    return await response.json();
  } catch (err) {
    console.error("Error during fetch user data", err.message);
  }
};

export default fetchRepositoriesLanguages;
