import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutMe() {
    return (
        <div className='flex justify-evenly'>
            <div>
                imagem
            </div>
            
            <div>
                <span>
                    <h1>I'M MARCELA</h1>
                    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </span>

                <div className='flex justify-evenly'>
                    <a href='#'>
                        <GitHubIcon />
                    </a>
                    <a href='#'>
                        <EmailIcon />
                    </a>
                    <a href='#'>
                        <LinkedInIcon />
                    </a>
                    
                </div>
            
            </div>
        </div>
    );
}