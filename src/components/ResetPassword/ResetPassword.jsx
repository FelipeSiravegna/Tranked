import React from "react";
import TopBar from "../TopBar/TopBar";

export default function ResetPassword(){
    return(
        <>
            <TopBar/>
            <form class="flex justify-center">
                <div class="flex flex-col w-8/12">
                    <p class="mt-24">Type your new password below</p>
                    <label class="mt-6" for="password"><b>New password:</b></label>
                    <input type="password" class="mb-5 mt-3 h-10" placeholder="Enter new password"></input>
                    <label class="mt-3" for="password"><b>Confirm new password:</b></label>
                    <input type="password" class="mb-5 mt-3 h-10" placeholder="Confirm new password"></input>
                <div class="flex justify-center">
                    <button type="submit" class="bg-violeta text-white w-1/2 mt-8 h-10 rounded-md">Reset password</button>
                </div>
                </div>
            </form>
        </>
    )
}