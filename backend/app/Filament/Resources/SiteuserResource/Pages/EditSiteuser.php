<?php

namespace App\Filament\Resources\SiteuserResource\Pages;

use App\Filament\Resources\SiteuserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSiteuser extends EditRecord
{
    protected static string $resource = SiteuserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
