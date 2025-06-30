"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions());
  const { data } = useQuery(trpc.hello.queryOptions({ text: "asdadad" }));
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button onClick={() => invoke.mutate({ text: "adasd" })}>
        Invoke background job
      </Button>
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
