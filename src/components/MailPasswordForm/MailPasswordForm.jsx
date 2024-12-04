import React from "react";

export default function MailPasswordForm(){
    return(
        <>
            <form class="flex justify-center">
                <div class="flex flex-col w-1/4">
                    <label for="mail"><b>Mail:</b></label>
                    <input type="text" class="mb-5" placeholder="Enter mail"></input>
                    <label for="password"><b>Password:</b></label>
                    <input type="password" class="mb-5" placeholder="Enter password"></input>
                    <p class="flex justify-center mb-5"><b>Forgot password?</b></p>
                <div class="flex justify-center">
                    <button type="submit" class="bg-violeta text-white w-1/2">Log in</button>
                </div>
                </div>
            </form>
        </>
    )
}