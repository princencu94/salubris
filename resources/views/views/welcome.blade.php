<!DOCTYPE HTML>
<html>
  <head>
    <title>Home Page</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="css/app.css" rel="stylesheet">
    <link href="css/home.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>

    <header class="page-width">
      <nav class="navbar  navbar-expand-lg navbar-light">
          <div class="container-fluid">
              <a class="navbar-brand" href="/">
                  <img src="images/logo.png" alt="" width="150" height="50">
                </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 text">
                <li class="nav-item">
                  <a class="nav-link active text-color" aria-current="page" href="#">Salubris Gymnacity</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-color" href="#">Managed Healthcare</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-color" href={{ url('videos') }}>Videos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href={{ url('contact') }}>Contact Us</a>
                </li>
                
              </ul>
              <div class="d-flex">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6 text text-color">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Our class schedule</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href={{ url('blog') }}>Blog</a>
                      </li>
                  </ul>
                  <span class="pt-2"><a class="btn-back py-2 px-3 rounded-md" href={{ route('register') }} role="button">Login</a></span>
              </div>
            </div>
          </div>
        </nav>
  </header>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/hero-wellness-1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Your total wellbeing is our obligation</h5>

            </div>
          </div>
          <div class="carousel-item">
            <img src="images/hero-wellness-2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Salubris- wellness with a difference</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/hero-wellness-3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>We cater to your total wellness needs, mind and body</h5>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="intro-section" class="page-width">
        <div class="intro-image">
            <img src="images/intro.png" class="d-block w-100" alt="...">
        </div>
        <div class="intro-content">
            <h2 class="mb-3">All the variety you crave with 20 daily LIVE & 7,000+ on-demand classes</h2>
            <p class="pb-3">With 15 class types for every style, mood, and level—you’ll always look forward to your workout! Tune in LIVE, or fit an on-demand class into your schedule. Stream obé on any device or cast it big via Apple TV, Roku, Fire TV, or Chromecast.</p>
            <a class="btn-back py-3 px-5 rounded-md" href="#" role="button">Start Today</a>
          </div>
      </div>

      <div class="class-section-back">
        <div class="spacer"></div>
        <div id="class-section" class="page-width">
          <div class="class-content">
            <h2 class="mb-3 text-center">Effective programs that deliver results</h2>
            <p class="pb-3 text-center">Whether you’re just starting your fitness journey, exploring something new, or ready for a Hard AF challenge, get motivated with curated training programs that take you for a ride and amp up amazing results.</p>
            <a class="btn-back py-3 px-5 rounded-md" href="#" role="button">Start Today</a>
          </div>
          <div class="class-images">
            <div class="workout-card">
                <div class="workout-card-top">
                    <img src="images/trainers-1.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="workout-card-content mt-3">
                  <h5>Body Comp</h5>
                </div>
            </div>

            <div class="workout-card">
              <div class="workout-card-top">
                  <img src="images/trainers-2.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="workout-card-content mt-3">
                <h5>Starter Pack</h5>
              </div>
          </div>
            
          </div>
        </div>
        <div class="spacer"></div>
      </div>
      

      {{-- price section starts here --}}

      <div class="max-w-7xl mx-auto pt-5 pb-5 px-4 bg-white sm:px-6 lg:px-8">
        <div class="price-section-header">
          <h2>Start your free trial today!</h2>
          <p>No charge until the trial ends. Cancel anytime.</p>
      </div>
        <!-- Tiers -->
        <div class="mt-5 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">Salubris Plata</h3>
              <p class="mt-4 flex items-baseline text-gray-900">
                <span class="text-5xl font-extrabold tracking-tight">$0.50</span>
                <span class="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p class="mt-6 text-gray-500">You can start your journey towards a healthy lifestyle.</p>
      
              <!-- Feature list -->
              <ul role="list" class="mt-6 space-y-6">
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
              </ul>
            </div>
      
            <a href="#" class="btn-back mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Monthly billing</a>
          </div>
      
          <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">Salubris Norm</h3>
      
              <p class="absolute top-0 py-1.5 px-4 back-color rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Most popular</p>
              <p class="mt-4 flex items-baseline text-gray-900">
                <span class="text-5xl font-extrabold tracking-tight">$0.75</span>
                <span class="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p class="mt-6 text-gray-500">Get access to our Salubris Wellness product.</p>
      
              <!-- Feature list -->
              <ul role="list" class="mt-6 space-y-6">
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
              </ul>
            </div>
      
            <a href="#" class="btn-back mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Monthly billing</a>
          </div>
      
          <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">Salubris Prima</h3>
              <p class="mt-4 flex items-baseline text-gray-900">
                <span class="text-5xl font-extrabold tracking-tight">$1</span>
                <span class="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p class="mt-6 text-gray-500">Get unbelievable discounts and rewards by subscribing to our premium package.</p>
      
              <!-- Feature list -->
              <ul role="list" class="mt-6 space-y-6">
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
      
                <li class="flex">
                  <!-- Heroicon name: outline/check -->
                  <svg class="flex-shrink-0 w-6 h-6 text-color" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-3 text-gray-500">Just some listings</span>
                </li>
              </ul>
            </div>
      
            <a href="#" class="btn-back mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium">Monthly billing</a>
          </div>
        </div>
      </div>

      <div class="partners-section-container ">
        <div class="price-section-header">
          <h2>Our Partners</h2>
          <p>We have partnered with great stakeholders so that you can be fit</p>
        </div>
        
      </div>

      <div class="bg-white">
        <div class=" mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-24" src="images/partner-1.png" alt="Tuple">
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-24" src="images/partner-2.png" alt="Mirage">
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-24" src="images/partner-3.png" alt="StaticKit">
            </div>
            <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img class="h-24" src="images/partner-4.png" alt="Transistor">
            </div>
            <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img class="h-24" src="images/partner-5.png" alt="Workcation">
            </div>
            <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img class="h-24" src="images/partner-6.png" alt="Workcation">
            </div>

          </div>
        </div>
      </div>
      <footer>
          <p  class="pt-5">Copyright © 2021 Salutem Wellness</p>
      </footer>
  </body>
</html>