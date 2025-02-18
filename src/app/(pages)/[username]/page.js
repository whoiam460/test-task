"use client";

import { Text, Title, List } from "@/_components";
import { UserSimpleView, LanguageChart } from "@/_modules/User/components";
import { RepositorySimpleView } from "@/_modules/Repository/components";
import { useParams } from "next/navigation";
import { useUserData } from "@/_modules/User/hooks";

const UserPage = () => {
  const { username } = useParams();

  const { userData, repos, languageData, loading, error } =
    useUserData(username);

  if (loading) return <div className="mt-10 text-center">Loading...</div>;
  if (error)
    return <div className="mt-10 text-center text-red-500">User not found</div>;

  const onClick = (item) => window.open(item?.html_url);

  return (
    <div className="p-10 mx-auto ">
      <div className="flex w-full mb-8">
        <UserSimpleView
          className="mr-8"
          joinInDate={userData.created_at}
          publicRepos={userData.public_repos}
          imageUrl={userData?.avatar_url}
          name={userData.name || userData.login}
        />
        <LanguageChart languageData={languageData} />
      </div>

      <Title level={3} className="mb-4">
        Latest Repositories
      </Title>
      <List onClick={onClick} items={repos}>
        <RepositorySimpleView />
      </List>
    </div>
  );
};

export default UserPage;
