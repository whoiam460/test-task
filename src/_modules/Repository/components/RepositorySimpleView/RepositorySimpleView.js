import { Title, Text } from "@/_components";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

const RepositorySimpleView = ({ name, description, created_at, onClick }) => {
  const createdAt = new Date(created_at).toLocaleDateString();
  return (
    <div
      onClick={onClick}
      className="flex items-center w-full px-3 py-4 transition-shadow duration-400  bg-white cursor-pointer rounded-xl hover:shadow-[0px_0px_14px] hover:shadow-[#849CB4]"
    >
      <RiGitRepositoryCommitsLine
        fill="text-slate-700"
        size={58}
        className="mr-4"
      />

      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <Title level={4}>{name}</Title>
          <Text level={4}>Created at: {createdAt}</Text>
        </div>
        <Text level={3}>{description || "No description"}</Text>
      </div>
    </div>
  );
};

export default RepositorySimpleView;
