const employees = {
  "CfedlHneZNg": {
    name: "Jenny",
    skills: ["react", "java", "mysql"]
  },

  "zpjssaqdLOp2x": {
    name: "Bobby",
    skills: ["angular", "go", "rust"]
  },

  "70IY3XBZSIWY": {
    name: "Alex",
    skills: ["vue", "go", "php"]
  },
  "70IASDRXS": {
    name: "Tim",
    skills: ["vue", "react", "java"]
  }
}
// [[key, val], [key, val]]
const res = Object.entries(employees)
  .filter(([, { skills } ]) => {
    return skills.includes('react') && skills.includes('java');
  })
  .map(([, { name }]) => name)

console.log(res);

// write the code to find employees who have both
// react and java amongst their skills

// HINTS:
// 1. Check out Object.entries() to get the list of entries
// 2. Check out Array methods on MDN

