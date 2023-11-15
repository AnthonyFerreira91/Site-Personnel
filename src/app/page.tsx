import { Accueil } from '@/app/content/accueil';
import { Competences } from '@/app/content/competences';
import { Projets } from '@/app/content/projets';
import { ContactezMoi } from '@/app/content/contactez-moi';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className='bg-dark'>
      <div className="p-28 pb-20 space-y-16">
        <Accueil />
        <hr className='border-gray-300' />
        <Competences />
        <hr className='border-gray-300' />
        <Projets />
        <hr className='border-gray-300' />
        <ContactezMoi />
      </div>
    </main>
  )
}
