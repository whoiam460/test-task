"use client";

import { Container, List, Title, Text } from "@/_components";
import { LanguageChart, UserSimpleView } from "@/_modules/User/components";

import { RepositorySimpleView } from "@/_modules/Repository/components";
import { useParams } from "next/navigation";
import { useUserData } from "@/_modules/User/hooks";

const UserPage = () => {
  const { username } = useParams();

  const { userData, repos, languageData, loading, error } =
    useUserData(username);

  if (loading || userData === null)
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Text>{loading ? "Loading..." : "User not found"}</Text>
      </div>
    );

  const onClick = (item) => window.open(item?.html_url);

  return (
    <Container>
      <div className="flex flex-col w-full gap-8 mb-8 md:flex-row">
        <UserSimpleView
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
    </Container>
  );
};

export default UserPage;
