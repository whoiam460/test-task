"use client";

import { Button, Container, Input, Text, Title } from "@/_components";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <Container className="flex flex-col items-center justify-center h-screen gap-y-8 md:gap-y-12">
      <Title level={2} className="text-center text-balance">
        Create your GitHub resume
      </Title>
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 md:gap-4 w-full md:w-[40%]"
      >
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />

        <Button className="w-auto" type="submit">
          <Text level={2} variant="white">
            Create
          </Text>
        </Button>
      </form>
    </Container>
  );
};

export default HomePage;
