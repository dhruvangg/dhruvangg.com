import Head from 'next/head'
import Link from "next/link"
import Layout from '../components/Layout'
import separator from '../public/images/separator.png'
import Date from '../components/Date'
import Welcome from '../public/images/welcome.png'

export async function getServerSideProps() {
  const posts = await fetch(`${process.env.APP_URI}/api/post?limit=3`)
  const postsData = await posts.json()
  const allPostsData = postsData
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Dhruvang | A JavaScript Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Dhruvang | A JavaScript Developer" />
        <meta name="description" content="I'm JavaScript Developer and mentor with 6+ Years of experience. Open to collaborate on JavaScript based projects." />
        <meta name="keywords" content="webdev,dhruvang,dhruvang gajjar,champdecay,javascript,software engineer,web developer" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="Dhruvang Gajjar" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dhruvang.com/" />
        <meta property="og:title" content="Dhruvang | JavaScript Developer" />
        <meta property="og:description" content="I'm JavaScript Developer and mentor with 6+ Years of experience. Open to collaborate on JavaScript based projects." />
        <meta property="og:image" content={Welcome} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dhruvang.com/" />
        <meta property="twitter:title" content="Dhruvang | JavaScript Developer" />
        <meta property="twitter:description" content="I'm JavaScript Developer and mentor with 6+ Years of experience. Open to collaborate on JavaScript based projects." />
        <meta property="twitter:image" content={Welcome} />
      </Head>

      <section className='max-w-3xl mx-auto px-4 mt-12 prose prose-xl dark:prose-invert'>
        <h1>Hello, I'm Dhruvang Gajjar</h1>
        <h4>A JavaScript Developer and Mentor.</h4>

        <p>I've started my career as a web developer over 6 years ago, and I've collaborated with great individuals to create digital solutions for both corporate and consumer usage. I'm quietly confident, naturally curious, and perpetually focusing on improving my skills one challenge at a time.</p>

        <img src={separator.src} alt="" className='my-20' />

        <h3>Work Experience</h3>

        <ul>
          <li>
            <p>2021 - Present <br /><span>Uplers Solutions</span> <br />Senior JavScript Developer</p>
          </li>
          <li>
            <p>2017 - 2021 <br /><span>Uplers Solutions</span> <br />jQuery Developer</p>
          </li>
          <li>
            <p>2016 - 2017 <br /><span>Freelancer</span> <br />WordPress Developer</p>
          </li>
        </ul>

        <img src={separator.src} alt="" className='my-20' />

        <h3>Awards and Achievements</h3>

        <div>
          <p>M001: MongoDb Basics by mongo university</p>
          <p>JavaScript Algorithms and Data Structures by Freecodecamp</p>
          <p>Responsive Web Design by Freecodecamp</p>
          <p>Fundamentals of digital marketing by Google Digital Garage</p>
          <p>Certified HubSpot CMS Developer by HubSpot</p>
        </div>

        <img src={separator.src} alt="" className='my-20' />

        <h3>Skills</h3>

        <ul>
          <li>
            <p><span className='font-semibold'>Web Technology</span> <br />JavaScript / ReactJS / NodeJS / ExpressJS / jQuery / PHP / Laravel / HTML / CSS</p>
          </li>
          <li><p><span className='font-semibold'>Database and ORMs</span> <br />MongoDB / Mongoose / MySQL / Sequalize / Firebase </p></li>
          <li>
            <p>
              <span className='font-semibold'>Other Platforms</span>
              <br />Hubspot / MailChimp / Zapier / Google Analytics / Google Tag Manager / Google Maps and Many more...
            </p>
          </li>
          <li>
            <p><span className='font-semibold'>Non-technical</span> <br />Time Management / Problem-solving / Mentorship / Adaptability / Teamwork</p></li>
        </ul>

        <img src={separator.src} alt="" className='my-20' />

        <h3>Recent Articles</h3>

        <ul>
          {allPostsData.map(({ _id, name, createdAt, slug }) => (
            <li key={_id}>
              <Link href={`/blog/${slug}`}><a>{name}</a></Link>
              <br />
              <small>
                <Date dateString={createdAt} />
              </small>
            </li>
          ))}
        </ul>

      </section>
    </Layout>
  )
}
