const projects = [

    {
        title: "Ascent Healthy Living",
        description: 'During the recent pandemic and quaranitine, alcohol consumption has risen by 30%. We designed this application to let users track and reduce their alcohol intake in a positive manner. Users set goals and receive badges for their accomplishments and are presented with a sleek visual representation of their work. This application uses NodeJs, HandleBars, Sequelize, Express, and a "Seperation of Concerns" approach.                                                                                                        ',
        github: "https://github.com/keiththarp/Ascent-Sobriety-Tool",
        deployed: "https://ascent-sobriety.herokuapp.com/",
        imgUrl: "./img/ascent.png",
    },
    {
        title: "Vedge-In",
        description: "This is a tool that guides users towards a more healthy eating decisions through tracking and gamification. Users log the amount of fruits and veggies they consume in a day to gain points. Users can challenge eachother to see who can gain the most points in the course of a week and end up on the leaderboard! This application uses TypeScript, NestJs, and TypeORM. ",
        github: "https://github.com/tiffany-brand/veg-out",
        deployed: "https://vedge-in.herokuapp.com/",
        imgUrl: "./img/vedgeIn.jpg",
    },
    {
        title: "Quar 'N Titles",
        description: "What was that movie called again? This application allows users to search multiple APIs for movies, TV shows, and books that they enjoyed and would like to reccomend. Upon searching for titles, the user is presented with a cover image and information about the release and are able to save it to their collection.",
        github: "https://github.com/mlanglois333/Quarantine-Accomplishments",
        deployed: "https://mlanglois333.github.io/Quarantine-Accomplishments/",
        imgUrl: "./img/quarntitles.png",
    }, 
    {
        title: "React Employee Directory",
        description: "This is a simple application using React that displays, filters, and sorts a table of employee information. ",
        github: "https://github.com/mlanglois333/React-Employee-Directory",
        deployed: "https://mlanglois333.github.io/React-Employee-Directory/",
        imgUrl: "./img/employee.png",
    }, 
    {
        title: "Offline-Enabled Ledger",
        description: "This is a PWA that allows users to log transactions when offline. The cached transactions will be sent to the MongoDB Atlas database once an internet connection is established again.",
        github: "https://github.com/mlanglois333/Offline-Banking",
        deployed: "https://shrouded-bastion-57978.herokuapp.com/",
        imgUrl: "./img/budget.png",
    }, 
    {
        title: "NodeJS Staff Database",
        description: "This is an ap using NodeJs and Mysql that allows users to create, review, update, and delete employee data held in a database. It works by establishing a connection to the database then using input from inquirer prompts to manipulate data within the tables.",
        github: "https://github.com/mlanglois333/mysql-staff-generator",
        deployed: "https://drive.google.com/file/d/1aML90GX1Kmi0IcVd3heisLn4VwZrSXVf/view",
        imgUrl: "./img/staff.png",
    }

];

exports.projects = projects;