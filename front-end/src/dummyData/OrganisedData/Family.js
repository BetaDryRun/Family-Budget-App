export const family={
    id: "132415",
    name: "Family",
    link: "https://share",
    description: "Description about the family in multiple lines",
    members: ["1", "2", "3"],
    admins: ["1"],
    seasoned: ["2"],
    walletId: "3", // will be same as userID
    membersBudgets: [
      { id: "1", budget: 600, remainingBudget: 400, firstName: "Sarthak" },
      { id: "2", budget: 500, remainingBudget: 150, firstName: "Shivansh"},
      { id: "3", budget: 300, remainingBudget: 200, firstName: "Naman"},
      { id: "4", budget: 200, remainingBudget: 200, firstName: "Apoorv"},
      { id: "5", budget: 400, remainingBudget: 100, firstName: "Utkarsh"},
    ],
    iterationDuration: "Weekly",
    // budget: double   → this should be equal to the sum of all the membersBudgets.
    budget: 2000,
    tags: ["tag1", "tag2"],
}