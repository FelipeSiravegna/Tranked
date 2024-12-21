import React from "react";
import TopBar from "../TopBar/TopBar";
import MailPasswordForm from "../MailPasswordForm/MailPasswordForm";

export default function LogIn(){
    return(
        <div class="bg-fondo h-dvh">
            <TopBar/>
            <MailPasswordForm/>
        </div>
    )
}