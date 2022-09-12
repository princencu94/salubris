<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
        $categories = DB::table('categories')->get();
        return Inertia::render('Admin/Addblog', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = Auth::user()->id;
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'category' => 'required',
            'image_file' => ['required'],
        ]);

        $name = $request->file('image_file')->getClientOriginalName();
        $request->file('image_file')->move(public_path('images'), $name);

        
        $blog = Blog::create([
            'user_id' => $user_id,
            'title' => $request->title,
            'description' => $request->description,
            'image_path' => $name,
        ]);


        if(isset($blog)) {
            DB::table('blog_categories')->insert([
                'category_id' => $request->category,
                'blog_id'  => $blog->id, 
            ]);
        }
    
        return redirect()->route('dashboard')->with('success', 'Blog has been created');;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = DB::table('blog_categories')->where('blog_id', $id)->value('category_id');
        $categories = DB::table('categories')->get();
        return Inertia::render('Admin/Editblog', ['blog' => Blog::all()->find($id), 'categories' => $categories, 'category' => $category]);
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
        $blog_category = DB::table('blog_categories')->where('blog_id', $id)->first();

        if($request->file('image_file') === null) {
            $name = $blog->image_path;
        } else {
            $name = $request->file('image_file')->getClientOriginalName();
            $request->file('image_file')->move(public_path('images'), $name);
        }

        $blog->user_id = Auth::user()->id;
        $blog->title = $request->title;
        $blog->description = $request->description;
        $blog->image_path = $name;

        if($request->category !== $blog_category->category_id) {
            DB::table('blog_categories')
              ->where('blog_id', $id)
              ->update(['category_id' => $request->category]);
        }

        $blog->save();

        return redirect()->route('adminblogs')->with('success', 'Blog has been updated');;
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

        return redirect()->route('adminblogs')->with('success', 'Blog has been deleted');;
    }

    public function blogtopics() {
        $categories = DB::table('categories')->get();
        return Inertia::render('Blogs', ['categories' => $categories]);
    }
}
