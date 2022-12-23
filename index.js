// Code your solution here
{
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

  function findMatching(a, b) {
    const output = a.filter((item) => {
      return item.toUpperCase() === b.toUpperCase()
    })
    return output
  }

  findMatching(drivers, 'Bobby')
  findMatching(drivers, 'Sammy')
  findMatching(drivers, 'Susan')
}

{
  const drivers = [];

  drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby')

  function fuzzyMatch(a, b) {
    const output = a.filter(item => item.indexOf(b) === 0 )
    return output
  }

  fuzzyMatch(drivers, 'Sa')
  fuzzyMatch(drivers, 'y')
  fuzzyMatch(drivers, 'mm')
}

{
  const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh'
    },
    {
      name: 'Sammy',
      hometown: 'New York'
    },
    {
      name: 'Sally',
      hometown: 'Cleveland'
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles'
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay'
    }
  ];

  function matchName(a, b) {
    const output = a.filter(item => item.name === b)
    return output
  }

  matchName(drivers, 'Bobby')

}