const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue ={
    title: "issue title",
    repositoryNameAssociated: "Launc x",
    status: "active",
    numberOfComments: 150,
    labels: ["error","label2", "label3"],
    author: "Harry Baez",
    dateCreated: "2022-04-05",
    lastUpdated: "2022-05-20",
    getTitleAndUthor: function(){
        return `This issue ${this.issue.title} from repository: ${this.issue.repositoryNameAssociated} has the labels: ${this.issue.labels} , is ${this.issue.status} `
    }
}