<?php

namespace App\Filament\Resources\UsermessageResource\Pages;

use App\Filament\Resources\UsermessageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListUsermessages extends ListRecords
{
    protected static string $resource = UsermessageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
