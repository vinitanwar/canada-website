<?php

namespace App\Filament\Resources\SiteuserResource\Pages;

use App\Filament\Resources\SiteuserResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSiteusers extends ListRecords
{
    protected static string $resource = SiteuserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
