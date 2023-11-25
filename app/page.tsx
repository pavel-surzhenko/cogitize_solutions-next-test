import OrganizationalStructure from './components/OrganizationalStructure';

export default function Home() {
    return (
        <main className='bg-background w-screen h-screen bg-cover'>
            <div className='w-screen h-screen bg-[#262534]/70 grid place-items-center'>
                <OrganizationalStructure />
            </div>
        </main>
    );
}
