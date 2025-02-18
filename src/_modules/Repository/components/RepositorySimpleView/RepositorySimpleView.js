import { Card, Text, Title } from "@/_components";

import { GoRepo } from "react-icons/go";

const RepositorySimpleView = ({ name, description, created_at, onClick }) => {
  const createdAt = new Date(created_at).toLocaleDateString();
  return (
    <Card
      onClick={onClick}
      className="flex items-center h-full transition-shadow duration-700 shadow-md cursor-pointer hover:shadow-xl"
    >
      <GoRepo fill="text-slate-700" size={58} />

      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <Title level={4} weight="semiBold">
            {name}
          </Title>
          <Text level={4}>{createdAt}</Text>
        </div>
        <Text level={3}>{description || "No description"}</Text>
      </div>
    </Card>
  );
};

export default RepositorySimpleView;
