import { Card, Text, Title } from "@/_components";

import Image from "next/image";
import clsx from "clsx";

const UserSimpleView = ({
  name,
  publicRepos,
  joinInDate,
  imageUrl,
  className,
}) => {
  const joinInYear = new Date(joinInDate).getFullYear();

  const wrapperClasses = clsx(
    "flex flex-col justify-center items-center",
    className
  );
  return (
    <Card className={wrapperClasses}>
      <Image
        alt="User avatar"
        src={imageUrl}
        objectFit="cover"
        width={180}
        height={180}
        className="mb-4 rounded-full"
      />

      <div className="flex flex-col items-center justify-center gap-y-2">
        <Title level={3}>{name}</Title>
        <div className="flex items-center justify-center gap-1">
          <Text level={2}>
            Public repositories: <b>{publicRepos}</b>
          </Text>
        </div>
        <div className="flex gap-1">
          <Text level={2}>
            Since: <b>{joinInYear}</b>
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default UserSimpleView;
