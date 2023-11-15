import { Accueil } from '@/app/accueil';
import { Competences } from '@/app/competences';
import { Projets } from '@/app/projets';
import { ContactezMoi } from '@/app/contactez-moi';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  return (
    <main>
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
