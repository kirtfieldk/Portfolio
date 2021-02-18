 export interface Article{
    title: string,
    url: string,
    description: string,
    date: string
}
export interface Project{
    title:string, 
    url?: string,
    description: string,
    skills: string[]
}
export const articles: Article[] = [
    {
        "title": "CI/CD — Docker-Compose, Elastic Beanstalk, and Github Actions",
        "date": "Jan. 31, 2021",
        "url":"https://kirtfieldk.medium.com/ci-cd-docker-compose-elastic-beanstalk-and-github-actions-9d5572975269",
        "description": "Establish a CI/CD pipeline so that all git pushes to master branch deploys my application to AWS Elastic Beanstalk."
    },{
        "title": "Understanding Docker-Compose",
        "date": "Jan. 27, 2021",
        "url": "https://kirtfieldk.medium.com/understanding-docker-compose-71663472ecc4",
        "description": "Explains how to leverage Docker Compose into multi-container applications"
    },{
        "title": "Guide: Deploying Container on AWS Elastic BeanStalk",
        "date": "Jan. 23, 2021",
        "url": "https://kirtfieldk.medium.com/guid-deploying-container-on-aws-elastic-beanstalk-f586f02c5de5",
        "description": "Explains how to implement the EB CLI to deploy our containers to AWS Elastic Beanstalk."
    },{
        "title":"II. Inserting Client Containers Into Kubernetes",
        "date": "Jan. 17, 2021",
        "url": "https://kirtfieldk.medium.com/ii-inserting-client-containers-into-kubernetes-b71aeeec7a4c",
        "description": "In the aready established K8S network, learn how to add more containers seamlessly!"
    },{
        "title": "I. Setting Up K8S Cluster For A Node Server",
        "date":"Jan. 10, 2021",
        "url":"https://kirtfieldk.medium.com/i-setting-up-k8s-cluster-for-a-node-server-bf65846d8327",
        "description": "Set up a local K8S cluster and use a load balancer to distribute incomming traffic between the server deployments and client deployments."
    },{
        "title": "Guide to Deploying K8S on AWS",
        "date": "Jan. 9, 2021",
        "url": "https://kirtfieldk.medium.com/guid-to-deploying-k8s-on-aws-eb1f0c398648",
        "description": "Introduction to the journey of deploying a K8S network onto AWS Elastic Beanstalk."
    },
    {
        "title": "The Fun Way To Build Docker Containers",
        "date": "Sept. 12, 2020",
        "url": "https://kirtfieldk.medium.com/the-fun-way-to-build-docker-containers-ae671ebe83d5",
        "description": "Sometimes building a container inside out is needed. Learn how to enter any container and configure it from the inside!"
    }
]

export const projects: Project[] = [
    {
        "title": "Portfolio",
        "description": "This is the source code for this website.",
        "skills": ["Angular", "Typescript", "Docker", "AWS Elastic Beanstalk"],
        "url": "https://github.com/kirtfieldk/Portfolio"
    },
    {
        "title": "BC_API",
        "description": "The articles I wrote about DevOps are based off of this project. An Angular UI with a NodeJS Backend. Employed Github Actions and AWS to create a CI/CD Pipeline.",
        "skills": ["Angular", "Javascript", "MongoDB", "Docker", "AWS Elastic Beanstalk"],
        "url": "https://github.com/kirtfieldk/BC_API"
    },
    {
        "title": "Project_X_Client",
        "description": "One of the vary first React projects. This is a blogging site about the outdoors. Users can log in and write articles about their time outside.",
        "skills": ["React", "Docker"],
        "url": "https://github.com/kirtfieldk/project-x-client"
    },
    {
        "title": "Project_X_Server",
        "description": "This is the backend for my nature blogging site.",
        "skills": ["Node", "MongoDB", "Docker"],
        "url": "https://github.com/kirtfieldk/project-x"
    },
    {
        "title": "Py_CPU_Percent",
        "description": "A Python package that measures CPU usage during execution of methods in application. This is a Decorator that signals that a specific method will be measured. All stats are logged into a noSQL DB.",
        "skills": ["Python", "Docker"],
        "url": "https://github.com/kirtfieldk/pyCpuPercent"
    },{
        "title":"Py_character_db",
        "skills": ["Python", "Flask", "Postgres", "REST"],
        "description": "A flask server that follows REST service. Users can log in, create characters, and weapons. Easy to hook up with any frontend framework.",
        "url": "https://github.com/kirtfieldk/py_character_db"
    },{
        "title": "Java_Threads",
        "url": "https://github.com/kirtfieldk/Java_Threads",
        "description": "Implemented Java threads to mock a food bank situation. Once food in the food bank reached zero, all threads were stopped untill more food was placed in the bank.",
        "skills": ["Java", "Concurrency"]
    },
    {
        "title": "C_Lexic_Analysis",
        "url": "https://github.com/kirtfieldk/C_lexic_analy",
        "description": "A C program that determins if syntatical tokens are valid. This is important to see if strings have correct structural deretives.",
        "skills": ["C"]
    }
]

export const proProjects: Project[] =[
    {
        "title": "Can Roles",
        "description": "An internal application that allows department heads to create groups that allow distribution of confidential information.",
        "skills": ["React", "Python", "SQL", "Docker", "Unit Testing"]
    },
    {
        "title": "Git Commit Tracker",
        "description": "Used the bitbucket API and Py Git package to measure the commits in all repos and collect metadata. This Python script gathered all needed data and placed in Postgres database. Constructed a SpringBoot server to serve quieries from SQL database via REST. Then created an interactive React UI.",
        "skills": ["Python", " SpringBoot", "Python", "React", "Docker", "Postgres"]
    },
    {
        "title": "Jira Dif Ticket Checker",
        "description": "Compared tickets between two different instances of Jira (Production and Development) and logged the difference. To correct any differences, this Python Script will make a series of API calls to ensure both Jira instances will have the same tickets.",
        "skills": ["Python", "Jira"]
    }
    
]