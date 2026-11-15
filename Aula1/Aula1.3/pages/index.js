import Link from 'next/Link';


export default function HomePage() {
  return <div>
    Welcome to Next.js!
    <ul>
      <li>
        <Link href="/sobre">
          Ir para a Sobre
        </Link>
      </li>
    </ul>
  
  
  </div>
}

