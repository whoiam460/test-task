const fetchUserRepositories = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.error("Error during fetch user data", err.message);
  }
};

export default fetchUserRepositories;
