import self from "../img/self.png"
import inspiro from "../img/inspiro.png"
import vv from "../img/vv.png"
import handson from "../img/handson.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Aman",
    lastName: "Raj",
    initials: "arj", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Backend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🔋',
            text: 'fueled by curiosity and charged with enthusiasm'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "strongly focused on backend development by passion"
        },
        {
            emoji: "📧",
            text: "aman02437@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://drive.google.com/file/d/19eG1zrigfbRnHZY9ogZLiGUEoOIrPhf4/view?usp=sharing",
            icon: 'fa fa-file',
            label: 'resume'
        },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/araj00",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/araj00/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Aman. I'm a backend developer by profession. I studied CompSci at KLE Technological University, Hubli.I enjoy building robust and flexible backend for applications and learning new technologies.I'm a part time freelancer as well, dedicated fitness enthusiast and health and wellness advocate. I love to travel and explore new places. I'm currently based in Bangalore, India.And, I firmly believe that, even as artificial intelligence advances, humanity will always retain its unique place and importance.",
    skills:
    {
        languages: ['javascript', 'nodejs', 'typescript'],
        frameworks: ['express', 'nestjs'],
        databases: ['mongodb', 'mysql', 'postgresql'],
        tools: ['git/github', 'aws', 'firebase', 'digital ocean', 'nginx', 'docker', 'linux', 'socket.io', 'cloudflare', 'postman']
    }
    ,
    hobbies: [
        {
            label: 'exercise',
            emoji: '🎽'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies and anime',
            emoji: '🍿'
        },
        {
            label: 'video games',
            emoji: '🎮'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Inspiro",
            live: "https://inspiro.digital/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            image: inspiro
        },
        {
            title: "Virtual Voter",
            live: "https://www.virtualvoter.app/",
            image: vv
        },
        {
            title: "Handson",
            live: "https://www.handson.ai/",
            image: handson
        },
        
    ]
}