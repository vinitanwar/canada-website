<?php

namespace App\Filament\Widgets;

use App\Models\Siteuser;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class clientCharts extends ChartWidget
{
    protected static ?string $heading = 'New Clients Per Month';

    protected function getData(): array
    {
        $users = Siteuser::select(
                DB::raw("COUNT(*) as count"),
                DB::raw("DATE_FORMAT(created_at, '%M') as month")
            )
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderByRaw("MIN(created_at)")
            ->get();

        $labels = $users->pluck('month')->toArray();
        $data = $users->pluck('count')->toArray();

        return [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Siteusers Registered',
                    'data' => $data,
                    'backgroundColor' => [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(199, 199, 199, 0.6)',
                        'rgba(83, 102, 255, 0.6)',
                        'rgba(255, 99, 71, 0.6)',
                        'rgba(60, 179, 113, 0.6)',
                        'rgba(255, 105, 180, 0.6)',
                        'rgba(100, 149, 237, 0.6)',
                    ],
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'polarArea';
    }
}
