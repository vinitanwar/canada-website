<?php

namespace App\Filament\Widgets;

use App\Models\Siteuser;
use App\Models\Usermessage;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Carbon\Carbon;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Clients', Siteuser::count())
                ->description('All Clients')
                ->descriptionIcon('heroicon-m-command-line')
                ->color('success')
                ->extraAttributes([
                    'class' => 'cursor-pointer',
                ]),
            Stat::make('All Users Message', Usermessage::count())
                ->description('All Users joined')
                ->descriptionIcon('heroicon-m-user-plus')
                ->color('primary')
                ->extraAttributes([
                    'class' => 'cursor-pointer',
                ]),
            Stat::make('This Month', Usermessage::whereBetween('created_at', [
                Carbon::now()->startOfMonth(),
                Carbon::now()->endOfMonth()
            ])->count())
                ->description('This Month Users')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('warning')
                ->extraAttributes([
                    'class' => 'cursor-pointer',
                ]),
        ];
    }

 
}