import TopBar from "../TopBar/TopBar"

export default function Profile(){
    return(
        <>
            <TopBar />
            {/* Image - Following - Followers */}
            <div class="m-4 flex items-center justify-around">
                <img class="h-32 w-32 rounded-3xl" alt="Profile picture" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
                <div class="w-full flex flex-col items-center">
                    <h1 class="p-1">User name</h1>
                    <div class="w-full flex justify-around">
                        <div class="flex flex-col items-center">
                            <h3>190</h3>
                            <h3>Following</h3>
                        </div>
                        <div class="flex flex-col items-center">
                            <h3>190</h3>
                            <h3>Followers</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Favourite artist - Favourite album */}
            <div class="flex flex-col ">
                <div class="flex flex-col">
                    <hr />
                    <h2 class="p-2">Favourite artist</h2>
                    <div class="p-2 flex w-4/5 items-center">
                        <img class="h-32 w-32" alt="Favourite artist" src="https://www.iamrap.es/asset/thumbnail,992,558,center,center/media/iamrap/images/2022/05/31/2022053116184934884.jpg" />
                        <h3 class="p-2" >Kendrick Lamar</h3>
                    </div>
                </div>
                <div class="flex flex-col">
                    <hr />
                    <h2 class="p-2">Favourite album</h2>
                    <div class="p-2 flex w-4/5 items-center">
                        <img class="h-32 w-32" alt="Favourite album" src="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58" />
                        <h3 class="p-2">GNX</h3>
                    </div>
                </div>
            </div>
            {/* Favourite songs */}
                <hr />
                <h2 class="p-2">Favourite songs</h2>
            <div class="flex justify-around">
                <div class="w-24 flex flex-col justify-center">
                    <img class="w-24 h-24" alt="Favourite song" src="https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1" />
                    <h3>King Cunta</h3>
                </div>
                <div class="w-24 flex flex-col justify-center">
                    <img class="w-24 h-24" alt="Favourite song" src="https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60" />
                    <h3>Sweet Child O' Mine</h3>
                </div>
                <div class="w-24 flex flex-col justify-center">
                    <img class="w-24 h-24" alt="Favourite song" src="https://www.clarin.com/img/2022/05/06/tYfXw0AJI_720x0__1.jpg" />
                    <h3>La corriente</h3>
                </div>
            </div>
        </>
    )
}