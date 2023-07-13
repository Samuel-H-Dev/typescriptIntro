interface IEmployee {
  fName: string,
  lName: string,
  age: number,
  cool?: boolean,
  apps: {appName: string; production: boolean }
}

interface IManager extends IEmployee {
salaryTier:number
}

let student1: IEmployee = {
  fName: 'jon',
  lName: 'smith',
  age: 24,
  cool: true,
  apps: {appName: "Cf Akeneo", production: true}
}

let manager1:IManager = {
  fName: 'jon',
  lName: 'smith',
  age: 24,
  cool: true,
  apps: {appName: "Cf Akeneo", production: true},
  salaryTier: 2
}