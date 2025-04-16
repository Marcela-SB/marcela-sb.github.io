import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialMedia(){
    return (
        <div className='
            flex gap-10 mt-8 m-5 col-span-12 justify-end
            md:flex-col md:space-y-4 md:fixed md:right-0 md:top-10 md:m-10 md:mt-0 md:gap-0
        '>
            
            <a href='https://github.com/Marcela-SB'>
                <GitHubIcon />
            </a>
            <a href='https://www.linkedin.com/in/marcela-silvab/'>
                <LinkedInIcon />
            </a>
            <a href='#'>
                <EmailIcon />
            </a>
            
        </div>
    );
}
