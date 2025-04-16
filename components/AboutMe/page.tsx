import SocialMedia from '@/components/SocialMedia/page';

export default function AboutMe() {
    return (
        <>
            <div className='grid grid-cols-3 md:grid-cols-5 p-10 md:p-25 gap-10'>
                <div className='flex justify-center col-span-3 md:col-span-2'>
                    <img src='images/photo.png' className='max-h-100'/>
                </div>
                
                <div className='col-span-3 self-center'>
                    <div className='block'>
                        <h2>
                            Olá, sou
                        </h2>
                        <h1 className='text-[50px]'>
                            Marcela
                        </h1>
                        <p>
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                        </p>
                    </div>

                    <SocialMedia />
                
                </div>
            </div>
        </>
    );
}