"use client";

import { useState } from "react";

import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [value, setValue] = useState("");
  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onSuccess: (data) => {
        toast.success("Message created");
        router.push(`/projects/${data.id}`);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-y-4 justify-center">
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button
          onClick={() => createProject.mutate({ value })}
          disabled={createProject.isPending}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Page;
