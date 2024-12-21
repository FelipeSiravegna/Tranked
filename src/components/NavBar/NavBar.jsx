export default function NavBar(){
    return(
        <div class="flex justify-around items-center fixed w-full h-12 bg-violeta bottom-0">
            <a href="/"><img class="w-6 h-6" src='src/assets/media/home.svg' alt="Home" /></a>
            <img class="w-6 h-6" src='src/assets/media/search.svg' alt="Search" />
            <img class="w-6 h-6" src='src/assets/media/add.svg' alt="Add" />
            <img class="w-6 h-6" src='src/assets/media/activity.svg' alt="Activity" />
            <a href="/profile"><img class="w-6 h-6" src='src/assets/media/profile.svg' alt="Profile" /></a>
        </div>
    )
}