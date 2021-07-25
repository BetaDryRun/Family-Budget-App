export const family={
    id: "132415",
    name: "Family 1",
    link: "https://share",
    description: "About the family argarga aergarg rga agaraga",
    members: ["1", "2", "3"],
    admins: ["1"],
    seasoned: ["2"],
    walletId: "3", // will be same as userID
    membersBudgets: [
      { id: "2", budget: 500, remainingBudget: 150 },
      { id: "3", budget: 300, remainingBudget: 200 },
    ],
    iterationDuration: "Weekly",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 2000,
    tags: ["tag1", "tag2"],
}