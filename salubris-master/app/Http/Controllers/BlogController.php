<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
       
        return Inertia::render('Admin/Showblogs', ['blogs' => Blog::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'category' => 'required',
            'image_file' => ['required'],
        ]);

        $name = $request->file('image_file')->getClientOriginalName();
        $request->file('image_file')->move(public_path('images'), $name);

        $blog = new Blog;

        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->image_path = $name;
        $blog->category = $request->category;
       
        
       
        $blog->save();

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Inertia::render('Admin/Editblog', ['blog' => Blog::all()->find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);


        if($request->file('image_file') === null) {
            $name = $blog->image_path;
        } else {
            $name = $request->file('image_file')->getClientOriginalName();
            $request->file('image_file')->move(public_path('images'), $name);
        }

        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->image_path = $name;
        $blog->category = $request->category;
       
        $blog->save();

        return redirect()->route('adminblogs');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();

        return redirect()->route('adminblogs');
    }
}
