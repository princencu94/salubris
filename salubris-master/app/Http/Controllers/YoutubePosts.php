<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Alaouy\Youtube\Facades\Youtube;

class YoutubePosts extends Controller
{
    //

    function youTubeVideos() {
        $videoList = Youtube::listChannelVideos('UCk1SpWNzOs4MYmr0uICEntg', 40);
        return view('videos', ['videos' => $videoListvideo]);
    }
}
