import React from "react";

export default function MailPasswordForm(){
    return(
        <>
            <form class="flex justify-center">
                <div class="flex flex-col w-8/12">
                    <label class="mt-24" for="mail"><b>Mail:</b></label>
                    <input type="text" class="mb-5 mt-3 h-10" placeholder="Enter mail"></input>
                    <label class="mt-6" for="password"><b>Password:</b></label>
                    <input type="password" class="mb-5 mt-3 h-10" placeholder="Enter password"></input>
                    <p class="flex justify-center mb-5 mt-6"><b>Forgot password?</b></p>
                <div class="flex justify-center">
                    <button type="submit" class="bg-violeta text-white w-1/2 mt-4 h-10 rounded-md">Log in</button>
                </div>
                </div>
            </form>
        </>
    )
}