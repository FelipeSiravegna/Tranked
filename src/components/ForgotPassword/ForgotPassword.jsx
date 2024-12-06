import React from "react";
import TopBar from "../TopBar/TopBar";

export default function ForgotPassword(){
    return(
        <>
            <TopBar/>
            <form class="flex justify-center">
                <div class="flex flex-col w-8/12">
                    <p class="mt-24">Enter your email below, and we'll send you a message with a link to reset your password</p>
                    <label class="mt-12" for="mail"><b>Mail:</b></label>
                    <input type="text" class="mb-5 mt-3 h-10" placeholder="Enter mail"></input>
                <div class="flex justify-center">
                    <button type="submit" class="bg-violeta text-white w-1/2 mt-8 h-10 rounded-md">Send request</button>
                </div>
                </div>
            </form>
        </>
    )
}