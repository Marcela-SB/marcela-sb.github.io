"use client"
import { Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

export default function ContactMe() {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")
    const [text, setText] = useState("")

    function sendEmail(){
        
    }

    return (
            
        <div className="m-0 mt-20 sm:m-20 sm:mt-0 p-5 sm:p-10 lg:p-20 bg-white/10 rounded-2xl backdrop-blur-lg">

            <h1 className="md:-mt-5 mb-5 text-[30px] md:text-[40px]">Contact Me</h1>

            <form onSubmit={sendEmail} className="flex flex-col gap-5">
                <TextField 
                    variant="outlined" 
                    name="name" 
                    label="Nome" 
                    required
                    className="rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField 
                    variant="outlined" 
                    name="email"
                    label="Email"
                    type="email" 
                    required
                    className="rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField 
                    variant="outlined" 
                    name="about"
                    label="Assunto" 
                    required
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />

                <TextField 
                    variant="outlined" 
                    name="text" 
                    label="Texto" 
                    multiline 
                    minRows={4} 
                    maxRows={10} 
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                <Button 
                    variant="contained"
                    color="secondary"
                    type="submit"
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
            </form>


        </div>
    
    );
}