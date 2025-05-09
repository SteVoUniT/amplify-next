// amplify/storage/resource.ts

import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "todosStorage",
  access: (allow) => ({
    "media/*": [
      allow.guest.to(["read", "write", "delete"]), // additional actions such as "write" and "delete" can be specified depending on your use case
    ],
  }),
});
