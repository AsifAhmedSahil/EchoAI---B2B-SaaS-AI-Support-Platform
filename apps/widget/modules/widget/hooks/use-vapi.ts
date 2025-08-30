import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web"


interface TranscriptMessage{
    role:"user" | "assistant";
    text: string;
}

export const useVapi = () =>{
    const [vapi,setVapi] = useState<Vapi | null>(null)
    const [isConnected,setIsConnected] = useState(false)
    const [isConnecting,setIsConnecting] = useState(false)
    const [isSpeaking,setIsSpeaking] = useState(false)
    const [ transcript, setTranscript] = useState<TranscriptMessage[]>([])


    useEffect(()=>{
        // only for testing , customer will  provide their own api key
        const vapiInstance = new Vapi("7e897af4-9c72-4446-a4d4-2492dbf1197a")

        vapiInstance.on("call-start",()=>{
            setIsConnected(true)
            setIsConnecting(false)
            setTranscript([])
        })
        vapiInstance.on("call-end",()=>{
            setIsConnected(true)
            setIsConnecting(false)
            setIsSpeaking(false)
        })

        vapiInstance.on("speech-start",()=>{
            setIsSpeaking(true)
        })
        vapiInstance.on("speech-end",()=>{
            setIsSpeaking(false)
        })
        vapiInstance.on("error",(error)=>{
            console.log(error)
            setIsConnecting(false)
        })

        vapiInstance.on("message",(message)=>{
            if(message.type === "transcript" && message.transcriptType === "final"){
                setTranscript((prev) => [
                    ...prev,
                    {
                        role:message.role === "user" ? "user" : "assistant",
                        text: message.transcript
                    }
                ])
            }
        })

        return () =>{
            vapiInstance?.stop();
        }

    },[])

    const startCall = () =>{
        setIsConnecting(true)

        if(vapi){
            // here customer provide their own asistant key.. this is for testing purpose
            vapi.start("3f2833f7-2ee4-4750-8351-a6cf22dfccf8")
            
        }
    }


}