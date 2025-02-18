const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  if (!response.ok) throw new Error("User not found");
  return await response.json();
};

export default fetchUserData;
