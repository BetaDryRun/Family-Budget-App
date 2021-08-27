export const DummyFamily = [
  {
    id: "132415",
    name: "Family",
    link: "https://share",
    description: "Weekly Budgeting for my family.",
    members: ["1", "2", "3", "4" , "5"],
    admins: ["1"],
    seasoned: ["2"],
    walletId: "3", // will be same as userID
    membersBudgets: [
      { id1: "2", budget: 500, remainingBudget: 150 },
      { id2: "3", budget: 300, remainingBudget: 200 },
    ],
    iterationDuration: "Daily",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 5000,
    tags: ["tag1", "tag2"],
  },
  {
    id: "151515",
    name: "Flat-Mates",
    link: "https://share2",
    description: "Monthly Expense management among flatmates.",
    members: ["mid1", "mid2", "mid3"],
    admins: ["aid1", "aid2", "aid3…"],
    seasoned: ["sid1", "sid2", "sid3…"],
    walletId: "id", // will be same as userID
    membersBudgets: [
      { id1: "mid1", budget: 515, remainingBudget: 525 },
      { id2: "mid2", budget: 566, remainingBudget: 676 },
    ],
    iterationDuration: "Monthly",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 10000,
    tags: ["tag1", "tag2"],
  },
  {
    id: "133753",
    name: "College Friends",
    link: "https://share3",
    description: "Expense management among friends.",
    members: ["mid1", "mid2", "mid3"],
    admins: ["aid1", "aid2", "aid3…"],
    seasoned: ["sid1", "sid2", "sid3…"],
    walletId: "id", // will be same as userID
    membersBudgets: [
      { id1: "mid1", budget: 515, remainingBudget: 365 },
      { id2: "mid2", budget: 566, remainingBudget: 4366 },
    ],
    iterationDuration: "Monthly",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 6000,
    tags: ["tag1", "tag2"],
  },
];
