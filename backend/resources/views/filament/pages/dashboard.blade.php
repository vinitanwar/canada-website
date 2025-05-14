<!-- resources/views/filament/pages/dashboard.blade.php -->
<x-filament::page>
    <div class="space-y-6">
        <!-- Header Section -->
        <div class="text-center">
            <h1 class="text-4xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
            <p class="text-lg text-gray-600 mt-2">Here you can show dynamic content like stats, charts, and more.</p>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <!-- Card 1 -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 class="text-xl font-semibold text-gray-800">Total Sales</h2>
                <p class="text-2xl text-indigo-600 font-bold mt-2">$25,000</p>
                <p class="text-sm text-gray-500 mt-2">This month's sales</p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 class="text-xl font-semibold text-gray-800">New Users</h2>
                <p class="text-2xl text-green-600 font-bold mt-2">120</p>
                <p class="text-sm text-gray-500 mt-2">Sign-ups in the last 30 days</p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 class="text-xl font-semibold text-gray-800">Revenue Growth</h2>
                <p class="text-2xl text-yellow-600 font-bold mt-2">15%</p>
                <p class="text-sm text-gray-500 mt-2">Growth compared to last month</p>
            </div>
        </div>

        <!-- Chart Section (Placeholder for Dynamic Content) -->
        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 class="text-2xl font-semibold text-gray-800">Website Traffic</h2>
            <div class="mt-4">
                <!-- Here you can integrate a chart component like Chart.js, or leave it as a placeholder -->
                <div class="bg-gray-100 p-4 text-center rounded-md text-gray-500">
                    <p>Insert your chart here!</p>
                </div>
            </div>
        </div>

        <!-- Call to Action Button -->
        <div class="text-center mt-8">
            <x-filament::button class="bg-indigo-600 hover:bg-indigo-700 text-white">
                View Detailed Report
            </x-filament::button>
        </div>
    </div>
</x-filament::page>
