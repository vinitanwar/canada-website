<?php

namespace App\Filament\Widgets;

use App\Models\Usermessage;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class UserCharts extends ChartWidget
{
    protected static ?string $heading = 'User Messages per Month';

    protected function getData(): array
    {
        $messages = Usermessage::select(
                DB::raw("COUNT(*) as count"),
                DB::raw("DATE_FORMAT(created_at, '%M') as month")
            )
            ->whereYear('created_at', now()->year)
            ->groupBy('month')
            ->orderByRaw("MIN(created_at)")
            ->get();

        $labels = $messages->pluck('month')->toArray();
        $data = $messages->pluck('count')->toArray();

        return [
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Messages',
                    'data' => $data,
                    'fill' => true,
                    'borderColor' => 'rgba(75, 192, 192, 1)',
                    'backgroundColor' => 'rgba(75, 192, 192, 0.2)',
                    'tension' => 0.4,
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
