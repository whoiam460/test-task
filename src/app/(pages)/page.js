"use client";
import { Text, Title, Input, Button } from "@/_components";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Title level={2} className="mb-12 text-center">
        Create your GitHub resume
      </Title>
      <form
        onSubmit={handleSubmit}
        className="block md:flex gap-4 w-full md:w-[40%]"
      >
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />

        <Button className="w-auto px-6" type="submit">
          <Text level={2} variant="white">
            Create
          </Text>
        </Button>
      </form>
    </div>
  );
};

export default HomePage;
