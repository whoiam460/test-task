import Image from "next/image";
import { Title, Text } from "@/_components";
import clsx from "clsx";

const UserSimpleView = ({
  name,
  publicRepos,
  joinInDate,
  imageUrl,
  className,
}) => {
  const joinSince = new Date(joinInDate).getFullYear();

  const wrapperClasses = clsx("flex p-4 bg-white rounded-xl", className);
  return (
    <div className={wrapperClasses}>
      <Image
        objectFit="contain"
        className="w-full h-full mr-4 overflow-hidden rounded-full"
        width={180}
        height={180}
        alt="User avatar"
        src={imageUrl}
      />

      <div className="flex flex-col gap-y-2">
        <Title level={2}>{name}</Title>
        <Text>Public repositories: {publicRepos}</Text>
        <Text>Member since: {joinSince}</Text>
      </div>
    </div>
  );
};

export default UserSimpleView;
