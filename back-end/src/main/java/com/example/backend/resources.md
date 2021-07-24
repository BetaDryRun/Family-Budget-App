```
db.families.aggregate({
    $lookup:
        {
            from: "users",
            localField: "admins.id",
            foreignField: "id",
            as: "details"
        }
})
```

`db.families.drop()`

```
db.families.find()
```

```
db.users.aggregate([
    {
        $match: {phoneNumber:"123456789"}
    },
    {
        $lookup:
            {
                from: "families",
                localField: "admins_id",
                foreignField: "id",
                as: "families"
            }
    },
    {
        $project:
            {
                password: 0,
                families_id:0
            }
    },
    {
        $limit: 1
    }
])
```