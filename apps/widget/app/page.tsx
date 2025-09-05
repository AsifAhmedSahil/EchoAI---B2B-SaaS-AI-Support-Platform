"use client";

import WidgetView from "@/modules/widget/ui/views/widget-view";
import { use } from "react";
// import { useVapi } from "@/modules/widget/hooks/use-vapi";
// import { Button } from "@workspace/ui/components/button";

interface Props {
  searchParams: Promise<{
    organizationId:string
  }>
}

export default function Page({searchParams}:Props) {
  const {organizationId} = use(searchParams)
  // const {
  //   isSpeaking,
  //   isConnecting,
  //   isConnected,
  //   transcript,
  //   startCall,
  //   endCall,
  // } = useVapi();

  return (
    // <div className="flex items-center justify-center min-h-svh max-w-md mx-auto w-full">
    //   <p>apps/widget</p>

    //   <Button onClick={()=>startCall()}>
    //     Start Call
    //   </Button>
    //   <Button onClick={()=>endCall()} variant="destructive">
    //     End Call
    //   </Button>

    //   <p>isConnected:{`${isConnected}`}</p>
    //   <p>isConnecting:{`${isConnecting}`}</p>
    //   <p>isSpeaking:{`${isSpeaking}`}</p>
    //   <p>{JSON.stringify(transcript,null,2)}</p>
    // </div>

    <WidgetView organizationId={organizationId}/>
  );
}
