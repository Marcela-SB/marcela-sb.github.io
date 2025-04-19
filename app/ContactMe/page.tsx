import { Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
export default function ContactMe() {
    return (
    
    <div className="m-10 md:m-25">
            
        <div className="m-0 sm:m-30 p-5 sm:p-10 lg:p-20 bg-white/10 rounded-2xl backdrop-blur-lg">

            <h1 className="md:-mt-5 mb-5 text-[30px] md:text-[40px]">Contact Me</h1>

            <form action="" method="get" className="flex flex-col gap-5">
                <TextField 
                    variant="outlined" 
                    name="name" 
                    label="Nome" 
                    required
                    className="rounded"
                />

                <TextField 
                    variant="outlined" 
                    name="email"
                    label="Email"
                    type="email" 
                    required
                    className="rounded-lg"
                />

                <TextField 
                    variant="outlined" 
                    name="about"
                    label="Assunto" 
                    required
                />

                <TextField 
                    variant="outlined" 
                    name="text" 
                    label="Texto" 
                    multiline 
                    minRows={4} 
                    maxRows={10} 
                    required
                />
                
                <Button 
                    variant="contained"
                    className="absolute bg-red"
                    color="secondary"
                    endIcon={<SendIcon />}
                    //onClick={null}
                >
                    Send
                </Button>
            </form>


        </div>

    </div>
    
    );
}