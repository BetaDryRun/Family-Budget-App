export const DummyFamily = [
  {
    id: "132415",
    name: "Family 1",
    link: "https://share",
    description: "About the family",
    members: ["mid1", "mid2", "mid3"],
    admins: ["aid1", "aid2", "aid3…"],
    seasoned: ["sid1", "sid2", "sid3…"],
    walletId: "id", // will be same as userID
    membersBudgets: [
      { id1: "mid1", budget: 123, remainingBudget: 14 },
      { id2: "mid2", budget: 13, remainingBudget: 51 },
    ],
    iterationDuration: "Daily",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 5000,
    tags: ["tag1", "tag2"],
  },
  {
    id: "151515",
    name: "Family 2",
    link: "https://share2",
    description: "About the family 2",
    members: ["mid1", "mid2", "mid3"],
    admins: ["aid1", "aid2", "aid3…"],
    seasoned: ["sid1", "sid2", "sid3…"],
    walletId: "id", // will be same as userID
    membersBudgets: [
      { id1: "mid1", budget: 515, remainingBudget: 52 },
      { id2: "mid2", budget: 566, remainingBudget: 67 },
    ],
    iterationDuration: "Monthly",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 10000,
    tags: ["tag1", "tag2"],
  },
];
