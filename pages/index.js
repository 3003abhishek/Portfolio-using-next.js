import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {

  console.log(data);
  return (
    
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Navbar/>
        <div className={styles.description}>
         
          

          <div>
          <img src={data.avatar_url}/>
          <h1>{data.name}</h1>
          <h2>{data.bio}|Html|css|javascript|react.js|redux|next.js|typescript</h2>
          <div style={{display:"flex"}}>
          <Link href={data.blog}><button>Resume</button></Link>
          <Link href={data.html_url}><button>Follow</button></Link>
          </div>
          <h1>TechStack</h1>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
           <button>HTML</button>
           <button>CSS</button>
           <button>JAVASCRIPT</button>
           <button>REACT</button>
           <button>REDUX</button>
           <button>NEXT.JS</button>
           <button>TYPESCRIPT</button>

          </div>
          <h1>Education</h1>
          <div>
            <ul>
              <li>{data.company}</li>
              <li>Jorhat Engineering College</li>
            </ul>
           
          </div>
         
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context) {

  let res=await fetch("https://api.github.com/users/3003abhishek");
  let data=await res.json();
  
  return {
    props: {
      data:data
    }, 
  }
}




// {
//   "login": "3003abhishek",
//   "id": 106218925,
//   "node_id": "U_kgDOBlTFrQ",
//   "avatar_url": "https://avatars.githubusercontent.com/u/106218925?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/3003abhishek",
//   "html_url": "https://github.com/3003abhishek",
//   "followers_url": "https://api.github.com/users/3003abhishek/followers",
//   "following_url": "https://api.github.com/users/3003abhishek/following{/other_user}",
//   "gists_url": "https://api.github.com/users/3003abhishek/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/3003abhishek/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/3003abhishek/subscriptions",
//   "organizations_url": "https://api.github.com/users/3003abhishek/orgs",
//   "repos_url": "https://api.github.com/users/3003abhishek/repos",
//   "events_url": "https://api.github.com/users/3003abhishek/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/3003abhishek/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Abhishek Jha",
//   "company": "Masai School",
//   "blog": "https://www.linkedin.com/in/abhishek-jha-430055231/",
//   "location": "Guwahati, Assam",
//   "email": null,
//   "hireable": null,
//   "bio": "Full Stack Web Developer",
//   "twitter_username": null,
//   "public_repos": 11,
//   "public_gists": 0,
//   "followers": 69,
//   "following": 80,
//   "created_at": "2022-05-25T03:31:58Z",
//   "updated_at": "2023-01-09T03:54:10Z"
// }
